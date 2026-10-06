// Add local files manifest for dynamic scanning
const knownFilesFolder = [
  "01_financial_proposal",
  "02_technical_proposal",
  "03_tin_certificate",
  "04_vat_certificate",
  "bank_solvency",
  "experience_cert (1)",
  "experience_cert",
  "scan_0042",
  "trade_license_2025",
  "trade_license_2026"
];

let unmappedFiles = [];

// Improved Document Fetching Logic
async function loadRequirementsAndDocs() {
  try {
    const response = await fetch('./requirements.json');
    requirements = await response.json();
    
    let mappedFilesList = new Set();

    for (const req of requirements) {
      let foundBuffer = null;
      let matchedPath = "";

      // Try candidate paths (with and without .pdf extensions)
      for (const candidate of (req.candidates || [])) {
        try {
          const docRes = await fetch('./' + candidate);
          if (docRes.ok) {
            foundBuffer = await docRes.arrayBuffer();
            matchedPath = candidate;
            
            // Extract pure filename to mark as mapped
            const cleanName = candidate.replace('documents/', '').replace('.pdf', '');
            mappedFilesList.add(cleanName);
            break; // Stop at first valid match
          }
        } catch (e) {
          // Continue searching candidates
        }
      }

      if (foundBuffer) {
        loadedDocuments[req.id] = {
          exists: true,
          filePath: matchedPath,
          arrayBuffer: foundBuffer,
          expiryDate: ''
        };
      } else {
        loadedDocuments[req.id] = { exists: false, arrayBuffer: null, expiryDate: '' };
      }
    }

    // Identify unmapped / leftover files (e.g., scan_0042, trade_license_2025)
    unmappedFiles = knownFilesFolder.filter(file => {
      const clean = file.replace('.pdf', '');
      return !Array.from(mappedFilesList).some(mapped => mapped.includes(clean) || clean.includes(mapped));
    });

    renderRequirements();
    renderFiles();
    validatePackage();
  } catch (err) {
    console.error('Error loading configuration:', err);
  }
}

// Updated Validation Engine to alert on Unmapped Files
const originalValidatePackage = validatePackage;
validatePackage = function() {
  const subDateStr = document.getElementById('submission-date').value;
  const subDate = subDateStr ? new Date(subDateStr) : new Date();
  const t = i18n[currentLang];

  const auditChecks = [];
  let criticalErrors = 0;
  let warnings = 0;

  // 1. Standard Requirement Audits
  requirements.forEach(req => {
    const docData = loadedDocuments[req.id];
    const isFilePresent = docData && docData.exists;
    const reqName = currentLang === 'bn' ? (req.nameBn || req.nameEn) : (req.nameEn || req.nameBn || req.name);

    if (req.mandatory && !isFilePresent) {
      criticalErrors++;
      auditChecks.push({
        type: 'error',
        title: t.missingMandatory.replace('{name}', reqName),
        desc: t.missingMandatoryDesc.replace('{order}', req.order)
      });
    } else if (!req.mandatory && !isFilePresent) {
      warnings++;
      auditChecks.push({
        type: 'warning',
        title: t.optionalMissing.replace('{name}', reqName),
        desc: t.optionalMissingDesc
      });
    }

    if (isFilePresent && req.requiresExpiry) {
      if (!docData.expiryDate) {
        criticalErrors++;
        auditChecks.push({
          type: 'error',
          title: t.missingExpiry.replace('{name}', reqName),
          desc: t.missingExpiryDesc
        });
      } else {
        const expDate = new Date(docData.expiryDate);
        if (expDate < subDate) {
          criticalErrors++;
          auditChecks.push({
            type: 'error',
            title: t.expiredDoc.replace('{name}', reqName),
            desc: t.expiredDesc.replace('{date}', docData.expiryDate).replace('{subDate}', subDateStr)
          });
        } else {
          auditChecks.push({
            type: 'success',
            title: t.validExpiry.replace('{name}', reqName),
            desc: t.validDesc.replace('{date}', docData.expiryDate)
          });
        }
      }
    }
  });

  // 2. Unmapped File Detection (e.g. scan_0042, trade_license_2025)
  if (unmappedFiles.length > 0) {
    warnings += unmappedFiles.length;
    unmappedFiles.forEach(fileName => {
      auditChecks.push({
        type: 'warning',
        title: currentLang === 'bn' ? `ম্যাপ না করা ফাইল: ${fileName}` : `Unmapped/Extra File: ${fileName}`,
        desc: currentLang === 'bn' 
          ? `এই ফাইলটি /documents ফোল্ডারে আছে কিন্তু কোন টেন্ডার শর্তে যুক্ত করা হয়নি।` 
          : `File exists in /documents folder but is not mapped to any tender requirement.`
      });
    });
  }

  renderAuditUI(criticalErrors, warnings, auditChecks);
};

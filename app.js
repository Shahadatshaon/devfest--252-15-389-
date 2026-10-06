// --- i18n Translations Dictionary ---
const i18n = {
  en: {
    title: "TenderPack Assistant",
    subtitle: "Automated Tender Document Validator & Single-PDF Compiler",
    subDateLabel: "Target Submission Date",
    compileBtn: "Compile & Export PDF",
    mergingBtn: "Merging PDFs...",
    sec1Title: "1. Tender Requirements",
    reqCountBadge: "{count} Requirements",
    sec1Desc: "Set the required document types, mandatory status, and required sequence.",
    addReqBtn: "Add Extra Requirement",
    sec2Title: "2. Documents (/documents)",
    docsCountBadge: "{count} Loaded",
    sec2Desc: "Documents are automatically read from the local /documents folder.",
    sec3Title: "3. Compliance Audit",
    awaitingTitle: "Checking Documents...",
    awaitingSub: "Reading files from the local /documents folder.",
    criticalDetected: "{count} Critical Issue(s) Detected",
    criticalSub: "Package cannot be exported until critical errors are resolved.",
    readyTitle: "Tender Package Ready",
    readySub: "All mandatory requirements verified and sequence compliant.",
    mandatory: "Mandatory",
    requiresExpiry: "Requires Expiry Date",
    expiryDateLabel: "Document Expiry Date",
    missingMandatory: "Missing Mandatory: {name}",
    missingMandatoryDesc: "This document is required by tender sequence (#{order}). File not found in /documents.",
    optionalMissing: "Optional Missing: {name}",
    optionalMissingDesc: "Optional document file not found in /documents.",
    missingExpiry: "Missing Expiry Date: {name}",
    missingExpiryDesc: "Expiry date required for validation.",
    expiredDoc: "Expired Document: {name}",
    expiredDesc: "Expired on {date} (Submission: {subDate}).",
    validExpiry: "Valid Expiry: {name}",
    validDesc: "Valid until {date}.",
    fileFound: "Loaded from /documents",
    fileNotFound: "Not found in /documents folder",
    coverTitle: "TENDER SUBMISSION PACKAGE",
    coverSubDate: "Submission Date: {date}",
    coverTocTitle: "TABLE OF CONTENTS / SEQUENCE",
    statusIncluded: "INCLUDED",
    statusMissing: "MISSING",
    statusNA: "NOT APPLICABLE"
  },
  bn: {
    title: "টেন্ডারপ্যাক অ্যাসিস্ট্যান্ট",
    subtitle: "স্বয়ংক্রিয় টেন্ডার নথিপত্র যাচাইকরণ ও সিঙ্গেল-পিডিএফ কম্পাইলার",
    subDateLabel: "জমা দেওয়ার তারিখ",
    compileBtn: "কম্পাইল ও এক্সপোর্ট করুন",
    mergingBtn: "পিডিএফ সংযুক্ত করা হচ্ছে...",
    sec1Title: "১. টেন্ডারের প্রয়োজনীয়তা",
    reqCountBadge: "{count} টি প্রয়োজনীয়তা",
    sec1Desc: "প্রয়োজনীয় নথির ধরন, বাধ্যতামূলক স্ট্যাটাস এবং ক্রম বিন্যাস করুন।",
    addReqBtn: "নতুন শর্ত যোগ করুন",
    sec2Title: "২. টেন্ডার নথি সমুহ (/documents)",
    docsCountBadge: "{count} টি লোড হয়েছে",
    sec2Desc: "নথিপত্রগুলো লোকাল /documents ফোল্ডার থেকে স্বয়ংক্রিয়ভাবে লোড হয়।",
    sec3Title: "৩. অনুপালন অডিট (Audit)",
    awaitingTitle: "নথিপত্র পরীক্ষা করা হচ্ছে...",
    awaitingSub: "লোকাল /documents ফোল্ডার থেকে ফাইল লোড হচ্ছে।",
    criticalDetected: "{count} টি সমস্যা সনাক্ত হয়েছে",
    criticalSub: "গুরুতর সমস্যাগুলো সমাধান না করা পর্যন্ত এক্সপোর্ট করা সম্ভব নয়।",
    readyTitle: "টেন্ডার প্যাকেজ প্রস্তুত",
    readySub: "সমস্ত বাধ্যতামূলক প্রয়োজনীয়তা যাচাই করা হয়েছে এবং ক্রমানুসারে ঠিক আছে।",
    mandatory: "বাধ্যতামূলক",
    requiresExpiry: "মেয়াদোত্তীর্ণের তারিখ আবশ্যক",
    expiryDateLabel: "নথির মেয়াদোত্তীর্ণের তারিখ",
    missingMandatory: "অনুপস্থিত বাধ্যতামূলক নথি: {name}",
    missingMandatoryDesc: "ক্রম নম্বর (#{order}) অনুযায়ী এটি বাধ্যতামূলক। /documents ফোল্ডারে ফাইলটি পাওয়া যায়নি।",
    optionalMissing: "ঐচ্ছিক নথি অনুপস্থিত: {name}",
    optionalMissingDesc: "ঐচ্ছিক ফাইলটি /documents ফোল্ডারে পাওয়া যায়নি।",
    missingExpiry: "মেয়াদের তারিখ প্রয়োজন: {name}",
    missingExpiryDesc: "যাচাইকরণের জন্য মেয়াদোত্তীর্ণের তারিখ প্রদান করুন।",
    expiredDoc: "মেয়াদোত্তীর্ণ নথি: {name}",
    expiredDesc: "মেয়াদ শেষ: {date} (জমা দেওয়ার তারিখ: {subDate})।",
    validExpiry: "বৈধ মেয়াদ: {name}",
    validDesc: "{date} তারিখ পর্যন্ত বৈধ।",
    fileFound: "/documents থেকে প্রাপ্ত",
    fileNotFound: "/documents ফোল্ডারে পাওয়া যায়নি",
    coverTitle: "টেন্ডার সাবমিশন প্যাকেজ",
    coverSubDate: "জমা দেওয়ার তারিখ: {date}",
    coverTocTitle: "সূচিপত্র / নথির ক্রম",
    statusIncluded: "সংযুক্ত",
    statusMissing: "অনুপস্থিত",
    statusNA: "প্রযোজ্য নয়"
  }
};

// --- Global Application State ---
let currentLang = 'en';
let requirements = [];
let loadedDocuments = {}; // Map of req.id -> { exists, arrayBuffer, expiryDate }

// Set default submission date to Today
document.getElementById('submission-date').valueAsDate = new Date();

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  setupEventListeners();
  loadRequirementsAndDocs();
});

function setupEventListeners() {
  document.getElementById('submission-date').addEventListener('change', validatePackage);
}

// Language Switcher Function
function setLanguage(lang) {
  currentLang = lang;

  document.getElementById('lang-en').className = lang === 'en' 
    ? 'px-2.5 py-1 rounded-md font-medium transition-all bg-blue-600 text-white' 
    : 'px-2.5 py-1 rounded-md font-medium transition-all text-slate-400 hover:text-white';

  document.getElementById('lang-bn').className = lang === 'bn' 
    ? 'px-2.5 py-1 rounded-md font-medium transition-all bg-blue-600 text-white' 
    : 'px-2.5 py-1 rounded-md font-medium transition-all text-slate-400 hover:text-white';

  updateUIText();
  renderRequirements();
  renderFiles();
  validatePackage();
}

function updateUIText() {
  const t = i18n[currentLang];
  document.getElementById('ui-title').innerText = t.title;
  document.getElementById('ui-subtitle').innerText = t.subtitle;
  document.getElementById('ui-sub-date-label').innerText = t.subDateLabel;
  document.getElementById('ui-compile-btn').innerText = t.compileBtn;
  document.getElementById('ui-sec1-title').innerHTML = `<i data-lucide="list-checks" class="w-5 h-5 text-blue-400"></i> ${t.sec1Title}`;
  document.getElementById('ui-sec1-desc').innerText = t.sec1Desc;
  document.getElementById('ui-add-req-btn').innerText = t.addReqBtn;
  document.getElementById('ui-sec2-title').innerHTML = `<i data-lucide="folder-open" class="w-5 h-5 text-blue-400"></i> ${t.sec2Title}`;
  document.getElementById('ui-sec2-desc').innerText = t.sec2Desc;
  document.getElementById('ui-sec3-title').innerHTML = `<i data-lucide="shield-alert" class="w-5 h-5 text-blue-400"></i> ${t.sec3Title}`;
  lucide.createIcons();
}

// --- Fetch Requirements & Load Local PDFs ---
async function loadRequirementsAndDocs() {
  try {
    const response = await fetch('./requirements.json');
    requirements = await response.json();
    
    // Auto-fetch documents from /documents folder
    for (const req of requirements) {
      if (req.filePath) {
        try {
          const docRes = await fetch('./' + req.filePath);
          if (docRes.ok) {
            const buffer = await docRes.arrayBuffer();
            loadedDocuments[req.id] = {
              exists: true,
              arrayBuffer: buffer,
              expiryDate: ''
            };
          } else {
            loadedDocuments[req.id] = { exists: false, arrayBuffer: null, expiryDate: '' };
          }
        } catch {
          loadedDocuments[req.id] = { exists: false, arrayBuffer: null, expiryDate: '' };
        }
      }
    }

    renderRequirements();
    renderFiles();
    validatePackage();
  } catch (err) {
    console.error('Error loading configuration:', err);
  }
}

// --- Requirements Management UI ---
function renderRequirements() {
  const list = document.getElementById('requirements-list');
  const t = i18n[currentLang];
  
  document.getElementById('req-count-badge').innerText = t.reqCountBadge.replace('{count}', requirements.length);
  requirements.sort((a, b) => a.order - b.order);

  list.innerHTML = requirements.map((req) => {
    const reqName = currentLang === 'bn' ? (req.nameBn || req.nameEn) : (req.nameEn || req.nameBn || req.name);
    return `
      <div class="bg-slate-900 border border-slate-700/80 rounded-lg p-3 text-xs flex flex-col gap-2">
        <div class="flex items-center justify-between gap-2">
          <span class="font-bold text-slate-400">#${req.order}</span>
          <input type="text" value="${reqName}" onchange="updateReqName('${req.id}', this.value)" class="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 font-medium flex-1 outline-none focus:border-blue-500">
          <button onclick="removeRequirement('${req.id}')" class="text-slate-500 hover:text-red-400 p-1"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
        </div>
        <div class="flex items-center justify-between pt-1 border-t border-slate-800 text-[11px] text-slate-400">
          <label class="flex items-center gap-1.5 cursor-pointer">
            <input type="checkbox" ${req.mandatory ? 'checked' : ''} onchange="toggleReqMandatory('${req.id}', this.checked)" class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0">
            ${t.mandatory}
          </label>
          <label class="flex items-center gap-1.5 cursor-pointer">
            <input type="checkbox" ${req.requiresExpiry ? 'checked' : ''} onchange="toggleReqExpiry('${req.id}', this.checked)" class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0">
            ${t.requiresExpiry}
          </label>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateReqName(id, val) {
  const req = requirements.find(r => r.id === id);
  if (req) {
    if (currentLang === 'bn') req.nameBn = val;
    else req.nameEn = val;
  }
  renderFiles();
  validatePackage();
}

function toggleReqMandatory(id, val) {
  const req = requirements.find(r => r.id === id);
  if (req) req.mandatory = val;
  validatePackage();
}

function toggleReqExpiry(id, val) {
  const req = requirements.find(r => r.id === id);
  if (req) req.requiresExpiry = val;
  renderFiles();
  validatePackage();
}

function addCustomRequirement() {
  const newId = 'req_' + Date.now();
  requirements.push({
    id: newId,
    nameEn: `Custom Requirement ${requirements.length + 1}`,
    nameBn: `কাস্টম শর্ত ${requirements.length + 1}`,
    filePath: '',
    mandatory: true,
    order: requirements.length + 1,
    requiresExpiry: false
  });
  loadedDocuments[newId] = { exists: false, arrayBuffer: null, expiryDate: '' };
  renderRequirements();
  renderFiles();
  validatePackage();
}

function removeRequirement(id) {
  requirements = requirements.filter(r => r.id !== id);
  delete loadedDocuments[id];
  renderRequirements();
  renderFiles();
  validatePackage();
}

// --- Render Loaded Documents Status ---
function renderFiles() {
  const fileList = document.getElementById('file-list');
  const t = i18n[currentLang];

  const loadedCount = Object.values(loadedDocuments).filter(d => d.exists).length;
  document.getElementById('uploaded-count-badge').innerText = t.docsCountBadge.replace('{count}', loadedCount);

  fileList.innerHTML = requirements.map(req => {
    const docData = loadedDocuments[req.id] || { exists: false, expiryDate: '' };
    const reqName = currentLang === 'bn' ? (req.nameBn || req.nameEn) : (req.nameEn || req.nameBn || req.name);

    return `
      <div class="bg-slate-900 border ${docData.exists ? 'border-slate-700/80' : 'border-red-900/40'} rounded-lg p-3 text-xs flex flex-col gap-2">
        <div class="flex justify-between items-center gap-2">
          <div class="flex items-center gap-2 overflow-hidden">
            <i data-lucide="${docData.exists ? 'file-check' : 'file-x'}" class="w-4 h-4 ${docData.exists ? 'text-emerald-400' : 'text-red-400'} flex-shrink-0"></i>
            <span class="font-medium text-slate-200 truncate">${reqName}</span>
          </div>
          <span class="text-[10px] px-2 py-0.5 rounded ${docData.exists ? 'bg-emerald-950 text-emerald-300 border border-emerald-800' : 'bg-red-950 text-red-300 border border-red-800'}">
            ${docData.exists ? t.fileFound : t.fileNotFound}
          </span>
        </div>

        ${req.requiresExpiry ? `
          <div class="pt-2 border-t border-slate-800 flex items-center justify-between gap-2">
            <label class="text-[10px] text-slate-400">${t.expiryDateLabel}</label>
            <input type="date" value="${docData.expiryDate \vert{}\vert{} ''}" onchange="updateFileExpiry('${req.id}', this.value)" class="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs outline-none focus:border-blue-500">
          </div>
        ` : ''}
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateFileExpiry(reqId, dateVal) {
  if (!loadedDocuments[reqId]) {
    loadedDocuments[reqId] = { exists: false, arrayBuffer: null, expiryDate: dateVal };
  } else {
    loadedDocuments[reqId].expiryDate = dateVal;
  }
  validatePackage();
}

// --- Compliance Audit Engine ---
function validatePackage() {
  const t = i18n[currentLang];
  const subDateStr = document.getElementById('submission-date').value;
  const subDate = subDateStr ? new Date(subDateStr) : new Date();

  const auditChecks = [];
  let criticalErrors = 0;
  let warnings = 0;

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

  renderAuditUI(criticalErrors, warnings, auditChecks);
}

function renderAuditUI(errors, warnings, checks) {
  const t = i18n[currentLang];
  const banner = document.getElementById('audit-banner');
  const icon = document.getElementById('status-icon');
  const title = document.getElementById('status-title');
  const sub = document.getElementById('status-sub');
  const exportBtn = document.getElementById('btn-export');
  const container = document.getElementById('audit-checks');

  if (errors > 0) {
    banner.className = "p-4 rounded-lg bg-red-950/40 border border-red-800 text-center";
    icon.className = "inline-block p-2 rounded-full mb-2 bg-red-900/60 text-red-400";
    icon.innerHTML = `<i data-lucide="alert-triangle" class="w-6 h-6"></i>`;
    title.innerText = t.criticalDetected.replace('{count}', errors);
    title.className = "font-bold text-sm text-red-300";
    sub.innerText = t.criticalSub;
    exportBtn.disabled = true;
  } else {
    banner.className = "p-4 rounded-lg bg-emerald-950/40 border border-emerald-800 text-center";
    icon.className = "inline-block p-2 rounded-full mb-2 bg-emerald-900/60 text-emerald-400";
    icon.innerHTML = `<i data-lucide="check-circle-2" class="w-6 h-6"></i>`;
    title.innerText = t.readyTitle;
    title.className = "font-bold text-sm text-emerald-300";
    sub.innerText = t.readySub;
    exportBtn.disabled = false;
  }

  container.innerHTML = checks.map(item => {
    let colorClass = "border-slate-700 bg-slate-900 text-slate-300";
    let iconName = "check";
    let iconColor = "text-emerald-400";

    if (item.type === 'error') {
      colorClass = "border-red-900/50 bg-red-950/20 text-red-200";
      iconName = "x-circle";
      iconColor = "text-red-400";
    } else if (item.type === 'warning') {
      colorClass = "border-amber-900/50 bg-amber-950/20 text-amber-200";
      iconName = "alert-circle";
      iconColor = "text-amber-400";
    }

    return `
      <div class="border rounded-md p-2.5 text-xs flex items-start gap-2 ${colorClass}">
        <i data-lucide="${iconName}" class="w-4 h-4 mt-0.5 ${iconColor} flex-shrink-0"></i>
        <div>
          <div class="font-semibold">${item.title}</div>
          <div class="text-[11px] opacity-80 mt-0.5">${item.desc}</div>
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

// --- PDF Compilation Engine ---
async function exportPackage() {
  const t = i18n[currentLang];
  const exportBtn = document.getElementById('btn-export');
  const originalText = exportBtn.innerHTML;

  exportBtn.disabled = true;
  exportBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> ${t.mergingBtn}`;
  lucide.createIcons();

  try {
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    const sortedReqs = [...requirements].sort((a, b) => a.order - b.order);

    // 1. Cover / Table of Contents Page
    const coverPage = mergedPdf.addPage([600, 800]);
    const helveticaBold = await mergedPdf.embedFont(StandardFonts.HelveticaBold);
    const helvetica = await mergedPdf.embedFont(StandardFonts.Helvetica);

    coverPage.drawText(t.coverTitle, { x: 50, y: 730, size: 18, font: helveticaBold, color: rgb(0.1, 0.2, 0.4) });
    coverPage.drawText(t.coverSubDate.replace('{date}', document.getElementById('submission-date').value), { x: 50, y: 705, size: 10, font: helvetica, color: rgb(0.4, 0.4, 0.4) });
    coverPage.drawLine({ start: { x: 50, y: 690 }, end: { x: 550, y: 690 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

    coverPage.drawText(t.coverTocTitle, { x: 50, y: 660, size: 11, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });

    let currentY = 630;
    sortedReqs.forEach((req, idx) => {
      const docData = loadedDocuments[req.id];
      const isPresent = docData && docData.exists;
      const statusText = isPresent ? t.statusIncluded : (req.mandatory ? t.statusMissing : t.statusNA);
      const reqName = req.nameEn || req.name;

      coverPage.drawText(`${idx + 1}. ${reqName}`, { x: 50, y: currentY, size: 10, font: helveticaBold });
      coverPage.drawText(`Status: ${statusText}`, { x: 400, y: currentY, size: 10, font: helvetica, color: isPresent ? rgb(0, 0.5, 0) : rgb(0.6, 0.6, 0.6) });
      currentY -= 25;
    });

    // 2. Append PDFs from /documents in Sequence
    for (const req of sortedReqs) {
      const docData = loadedDocuments[req.id];
      if (docData && docData.exists && docData.arrayBuffer) {
        const srcPdf = await PDFDocument.load(docData.arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(srcPdf, srcPdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
      }
    }

    // 3. Trigger File Download
    const pdfBytes = await mergedPdf.save();
    const blob = new Blob([pdfBytes], { type: 'application/pdf' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = `Tender_Submission_Package_${Date.now()}.pdf`;
    link.click();

  } catch (err) {
    alert("Error generating PDF package: " + err.message);
  } finally {
    exportBtn.disabled = false;
    exportBtn.innerHTML = originalText;
    lucide.createIcons();
  }
}

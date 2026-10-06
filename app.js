// --- Application State ---
let requirements = [];
let uploadedFiles = []; // Array of { id, file, name, size, docTypeId, expiryDate, arrayBuffer }

// Set default submission date to Today
document.getElementById('submission-date').valueAsDate = new Date();

// --- Initialization ---
window.addEventListener('DOMContentLoaded', () => {
  lucide.createIcons();
  setupEventListeners();
  loadRequirements();
});

async function loadRequirements() {
  try {
    const response = await fetch('./requirements.json');
    requirements = await response.json();
    renderRequirements();
    validatePackage();
  } catch (err) {
    console.error('Error loading requirements.json:', err);
  }
}

function setupEventListeners() {
  const dropzone = document.getElementById('dropzone');
  const fileInput = document.getElementById('file-input');
  const subDateInput = document.getElementById('submission-date');

  dropzone.addEventListener('click', () => fileInput.click());
  dropzone.addEventListener('dragover', (e) => { e.preventDefault(); dropzone.classList.add('drag-over'); });
  dropzone.addEventListener('dragleave', () => dropzone.classList.remove('drag-over'));
  dropzone.addEventListener('drop', (e) => {
    e.preventDefault();
    dropzone.classList.remove('drag-over');
    if (e.dataTransfer.files.length) handleFiles(e.dataTransfer.files);
  });

  fileInput.addEventListener('change', (e) => {
    if (e.target.files.length) handleFiles(e.target.files);
  });

  subDateInput.addEventListener('change', validatePackage);
}

// --- Requirement Management ---
function renderRequirements() {
  const list = document.getElementById('requirements-list');
  document.getElementById('req-count-badge').innerText = `${requirements.length} Requirements`;
  
  requirements.sort((a, b) => a.order - b.order);

  list.innerHTML = requirements.map((req) => `
    <div class="bg-slate-900 border border-slate-700/80 rounded-lg p-3 text-xs flex flex-col gap-2">
      <div class="flex items-center justify-between gap-2">
        <span class="font-bold text-slate-400">#${req.order}</span>
        <input type="text" value="${req.name}" onchange="updateReqName('${req.id}', this.value)" class="bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 font-medium flex-1 outline-none focus:border-blue-500">
        <button onclick="removeRequirement('${req.id}')" class="text-slate-500 hover:text-red-400 p-1"><i data-lucide="trash-2" class="w-3.5 h-3.5"></i></button>
      </div>
      <div class="flex items-center justify-between pt-1 border-t border-slate-800 text-[11px] text-slate-400">
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" ${req.mandatory ? 'checked' : ''} onchange="toggleReqMandatory('${req.id}', this.checked)" class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0">
          Mandatory
        </label>
        <label class="flex items-center gap-1.5 cursor-pointer">
          <input type="checkbox" ${req.requiresExpiry ? 'checked' : ''} onchange="toggleReqExpiry('${req.id}', this.checked)" class="rounded bg-slate-800 border-slate-700 text-blue-600 focus:ring-0">
          Requires Expiry Date
        </label>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
  updateFileDropdowns();
  validatePackage();
}

function updateReqName(id, val) {
  const req = requirements.find(r => r.id === id);
  if (req) req.name = val;
  updateFileDropdowns();
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
    name: `Custom Requirement ${requirements.length + 1}`,
    mandatory: true,
    order: requirements.length + 1,
    requiresExpiry: false
  });
  renderRequirements();
}

function removeRequirement(id) {
  requirements = requirements.filter(r => r.id !== id);
  renderRequirements();
}

// --- File Handling & Processing ---
async function handleFiles(files) {
  for (const file of files) {
    if (file.type !== 'application/pdf' && !file.name.endsWith('.pdf')) continue;
    
    const arrayBuffer = await file.arrayBuffer();
    
    let matchedReqId = '';
    const lowerName = file.name.toLowerCase();
    for (const req of requirements) {
      if (lowerName.includes(req.name.toLowerCase().split(' ')[0])) {
        matchedReqId = req.id;
        break;
      }
    }

    uploadedFiles.push({
      id: 'file_' + Date.now() + Math.random().toString(36).substr(2, 4),
      file: file,
      name: file.name,
      size: (file.size / 1024 / 1024).toFixed(2) + ' MB',
      docTypeId: matchedReqId,
      expiryDate: '',
      arrayBuffer: arrayBuffer
    });
  }

  document.getElementById('file-input').value = '';
  renderFiles();
  validatePackage();
}

function renderFiles() {
  const fileList = document.getElementById('file-list');
  document.getElementById('uploaded-count-badge').innerText = `${uploadedFiles.length} Files`;

  if (uploadedFiles.length === 0) {
    fileList.innerHTML = `<p class="text-xs text-slate-500 text-center py-6">No files uploaded yet.</p>`;
    return;
  }

  fileList.innerHTML = uploadedFiles.map(fileObj => {
    const assignedReq = requirements.find(r => r.id === fileObj.docTypeId);
    const needsExpiry = assignedReq ? assignedReq.requiresExpiry : false;

    return `
      <div class="bg-slate-900 border border-slate-700/80 rounded-lg p-3 text-xs flex flex-col gap-2">
        <div class="flex justify-between items-start gap-2">
          <div class="flex items-center gap-2 overflow-hidden">
            <i data-lucide="file-text" class="w-4 h-4 text-blue-400 flex-shrink-0"></i>
            <span class="font-medium text-slate-200 truncate" title="${fileObj.name}">${fileObj.name}</span>
            <span class="text-[10px] text-slate-500 flex-shrink-0">(${fileObj.size})</span>
          </div>
          <button onclick="removeFile('${fileObj.id}')" class="text-slate-500 hover:text-red-400 p-1">
            <i data-lucide="x" class="w-4 h-4"></i>
          </button>
        </div>

        <div class="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 border-t border-slate-800">
          <div>
            <label class="text-[10px] text-slate-400 block mb-1">Assigned Document Type</label>
            <select onchange="updateFileDocType('${fileObj.id}', this.value)" class="req-select w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs outline-none focus:border-blue-500">
              <option value="">-- Select Type --</option>
              ${requirements.map(r => `<option value="${r.id}" ${fileObj.docTypeId === r.id ? 'selected' : ''}>#${r.order}${r.name}</option>`).join('')}
            </select>
          </div>

          ${needsExpiry ? `
            <div>
              <label class="text-[10px] text-slate-400 block mb-1">Document Expiry Date</label>
              <input type="date" value="${fileObj.expiryDate}" onchange="updateFileExpiry('${fileObj.id}', this.value)" class="w-full bg-slate-800 border border-slate-700 rounded px-2 py-1 text-slate-200 text-xs outline-none focus:border-blue-500">
            </div>
          ` : ''}
        </div>
      </div>
    `;
  }).join('');

  lucide.createIcons();
}

function updateFileDropdowns() {
  renderFiles();
}

function updateFileDocType(fileId, reqId) {
  const fileObj = uploadedFiles.find(f => f.id === fileId);
  if (fileObj) {
    fileObj.docTypeId = reqId;
    renderFiles();
    validatePackage();
  }
}

function updateFileExpiry(fileId, dateVal) {
  const fileObj = uploadedFiles.find(f => f.id === fileId);
  if (fileObj) {
    fileObj.expiryDate = dateVal;
    validatePackage();
  }
}

function removeFile(fileId) {
  uploadedFiles = uploadedFiles.filter(f => f.id !== fileId);
  renderFiles();
  validatePackage();
}

// --- Core Audit & Verification Engine ---
function validatePackage() {
  const subDateStr = document.getElementById('submission-date').value;
  const subDate = subDateStr ? new Date(subDateStr) : new Date();

  const auditChecks = [];
  let criticalErrors = 0;
  let warnings = 0;

  const docTypeCounts = {};
  uploadedFiles.forEach(f => {
    if (f.docTypeId) {
      docTypeCounts[f.docTypeId] = (docTypeCounts[f.docTypeId] || 0) + 1;
    }
  });

  requirements.forEach(req => {
    const count = docTypeCounts[req.id] || 0;
    const assignedFile = uploadedFiles.find(f => f.docTypeId === req.id);

    if (req.mandatory && count === 0) {
      criticalErrors++;
      auditChecks.push({
        type: 'error',
        title: `Missing Mandatory: ${req.name}`,
        desc: `This document is required by the tender sequence (#${req.order}).`
      });
    } else if (!req.mandatory && count === 0) {
      warnings++;
      auditChecks.push({
        type: 'warning',
        title: `Optional Missing: ${req.name}`,
        desc: `Optional document not included.`
      });
    } else if (count > 1) {
      criticalErrors++;
      auditChecks.push({
        type: 'error',
        title: `Duplicate Files: ${req.name}`,
        desc: `${count} files mapped to this requirement. Only 1 allowed.`
      });
    }

    if (assignedFile && req.requiresExpiry) {
      if (!assignedFile.expiryDate) {
        criticalErrors++;
        auditChecks.push({
          type: 'error',
          title: `Missing Expiry Date: ${req.name}`,
          desc: `Expiry date required for validation.`
        });
      } else {
        const expDate = new Date(assignedFile.expiryDate);
        if (expDate < subDate) {
          criticalErrors++;
          auditChecks.push({
            type: 'error',
            title: `Expired Document: ${req.name}`,
            desc: `Expired on ${assignedFile.expiryDate} (Submission: ${subDateStr}).`
          });
        } else {
          auditChecks.push({
            type: 'success',
            title: `Valid Expiry: ${req.name}`,
            desc: `Valid until ${assignedFile.expiryDate}.`
          });
        }
      }
    }
  });

  const unassignedCount = uploadedFiles.filter(f => !f.docTypeId).length;
  if (unassignedCount > 0) {
    warnings++;
    auditChecks.push({
      type: 'warning',
      title: `Unmapped Files (${unassignedCount})`,
      desc: `Some uploaded files have no document type category assigned.`
    });
  }

  renderAuditUI(criticalErrors, warnings, auditChecks);
}

function renderAuditUI(errors, warnings, checks) {
  const banner = document.getElementById('audit-banner');
  const icon = document.getElementById('status-icon');
  const title = document.getElementById('status-title');
  const sub = document.getElementById('status-sub');
  const exportBtn = document.getElementById('btn-export');
  const container = document.getElementById('audit-checks');

  if (uploadedFiles.length === 0) {
    banner.className = "p-4 rounded-lg bg-slate-900 border border-slate-700 text-center";
    icon.className = "inline-block p-2 rounded-full mb-2 bg-slate-800 text-slate-400";
    icon.innerHTML = `<i data-lucide="info" class="w-6 h-6"></i>`;
    title.innerText = "Awaiting Files";
    sub.innerText = "Upload PDF documents to verify compliance.";
    exportBtn.disabled = true;
    container.innerHTML = '';
    lucide.createIcons();
    return;
  }

  if (errors > 0) {
    banner.className = "p-4 rounded-lg bg-red-950/40 border border-red-800 text-center";
    icon.className = "inline-block p-2 rounded-full mb-2 bg-red-900/60 text-red-400";
    icon.innerHTML = `<i data-lucide="alert-triangle" class="w-6 h-6"></i>`;
    title.innerText = `${errors} Critical Issue(s) Detected`;
    title.className = "font-bold text-sm text-red-300";
    sub.innerText = "Package cannot be exported until critical errors are resolved.";
    exportBtn.disabled = true;
  } else {
    banner.className = "p-4 rounded-lg bg-emerald-950/40 border border-emerald-800 text-center";
    icon.className = "inline-block p-2 rounded-full mb-2 bg-emerald-900/60 text-emerald-400";
    icon.innerHTML = `<i data-lucide="check-circle-2" class="w-6 h-6"></i>`;
    title.innerText = "Tender Package Ready";
    title.className = "font-bold text-sm text-emerald-300";
    sub.innerText = "All mandatory requirements verified and sequence compliant.";
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

// --- PDF Merging & Export Engine ---
async function exportPackage() {
  const exportBtn = document.getElementById('btn-export');
  const originalText = exportBtn.innerHTML;
  exportBtn.disabled = true;
  exportBtn.innerHTML = `<i data-lucide="loader-2" class="w-4 h-4 animate-spin"></i> Merging PDFs...`;
  lucide.createIcons();

  try {
    const { PDFDocument, StandardFonts, rgb } = PDFLib;
    const mergedPdf = await PDFDocument.create();

    const sortedReqs = [...requirements].sort((a, b) => a.order - b.order);

    // 1. Add Cover / Table of Contents Page
    const coverPage = mergedPdf.addPage([600, 800]);
    const helveticaBold = await mergedPdf.embedFont(StandardFonts.HelveticaBold);
    const helvetica = await mergedPdf.embedFont(StandardFonts.Helvetica);

    coverPage.drawText("TENDER SUBMISSION PACKAGE", { x: 50, y: 730, size: 20, font: helveticaBold, color: rgb(0.1, 0.2, 0.4) });
    coverPage.drawText(`Submission Date: ${document.getElementById('submission-date').value}`, { x: 50, y: 705, size: 10, font: helvetica, color: rgb(0.4, 0.4, 0.4) });
    coverPage.drawLine({ start: { x: 50, y: 690 }, end: { x: 550, y: 690 }, thickness: 1, color: rgb(0.8, 0.8, 0.8) });

    coverPage.drawText("TABLE OF CONTENTS / SEQUENCE", { x: 50, y: 660, size: 12, font: helveticaBold, color: rgb(0.2, 0.2, 0.2) });

    let currentY = 630;
    sortedReqs.forEach((req, idx) => {
      const fileObj = uploadedFiles.find(f => f.docTypeId === req.id);
      const statusText = fileObj ? "INCLUDED" : (req.mandatory ? "MISSING" : "NOT APPLICABLE");

      coverPage.drawText(`${idx + 1}. ${req.name}`, { x: 50, y: currentY, size: 10, font: helveticaBold });
      coverPage.drawText(`Status: ${statusText}`, { x: 400, y: currentY, size: 10, font: helvetica, color: fileObj ? rgb(0, 0.5, 0) : rgb(0.6, 0.6, 0.6) });
      currentY -= 25;
    });

    // 2. Append PDF Documents in Order
    for (const req of sortedReqs) {
      const fileObj = uploadedFiles.find(f => f.docTypeId === req.id);
      if (fileObj && fileObj.arrayBuffer) {
        const srcPdf = await PDFDocument.load(fileObj.arrayBuffer);
        const copiedPages = await mergedPdf.copyPages(srcPdf, srcPdf.getPageIndices());
        copiedPages.forEach(page => mergedPdf.addPage(page));
      }
    }

    // 3. Trigger Download
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
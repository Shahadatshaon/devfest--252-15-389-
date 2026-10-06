# devfest--252-15-389-
A lightweight, zero-server web tool to validate tender document compliance, check document expiry dates, and merge multi-file PDF packages into a single submission file with an automated Table of Contents.

# TenderPack Assistant 📄✨

**TenderPack Assistant** is a client-side web application designed to streamline the assembly, compliance auditing, and compilation of tender document packages. It helps procurement and bidding teams verify that all required documents—such as trade licenses, TIN certificates, and financial proposals—are complete, valid, and ordered correctly before submission.

Everything runs entirely in the browser using `pdf-lib`, ensuring sensitive tender documents are processed locally without sending data to an external server.

---

## 🚀 Key Features

- **📋 Dynamic Requirements Management**
  - Configure document checklists via `requirements.json` or customize them live in the UI.
  - Set custom sequencing, mandatory vs. optional requirements, and expiry date enforcement.

- **📁 Drag-and-Drop PDF Categorization**
  - Upload multiple PDFs simultaneously with smart document-type matching based on file names.
  - Re-assign categories or enter document-specific expiration dates with ease.

- **🛡️ Real-Time Compliance Audit**
  - **Missing Document Checks:** Instantly flags unsubmitted mandatory documents.
  - **Expiry Verification:** Compares document expiration dates against your target submission date to catch expired licenses before submission.
  - **Duplicate & Sequence Validation:** Alerts you to duplicate attachments or unmapped files.

- **📑 Single-PDF Compiler & Cover Page Generator**
  - Merges all valid PDF files into a single, structured submission package ordered by tender sequence.
  - Generates a professional **Cover Page** and **Table of Contents** detailing document inclusion status.

- **🔒 Client-Side & Secure**
  - Built with pure Vanilla JS and `pdf-lib`—all file reading, validation, and PDF merging happen 100% locally in your browser.

---

## 🛠️ Tech Stack

- **Frontend:** HTML5, Vanilla JavaScript (ES6+)
- **Styling:** Tailwind CSS (via CDN)
- **PDF Processing:** [pdf-lib](https://pdf-lib.js.org/)
- **Icons:** Lucide Icons

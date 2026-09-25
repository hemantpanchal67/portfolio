# Hemant Panchal - Technical Architect Portfolio Website

A production-quality, fast, accessible, and lightweight personal portfolio website for **Hemant Panchal** (Technical Architect | Enterprise Solution Architect | Principal Engineer), designed specifically for direct deployment to **GitHub Pages**.

---

## 🎯 Architectural Highlights & Philosophy

- **Senior Positioning:** Communicates enterprise-grade technical leadership, distributed system design, low-code/no-code engine architecture, and governance.
- **Zero Framework Bloat:** Built with pure **HTML5**, **CSS3**, **Vanilla JavaScript**, and responsive **SVGs**. No runtime dependencies, no backend, no server requirements.
- **Subpath & Local Compatibility:** Uses strictly relative paths (`./`) ensuring seamless operation both locally (`file:///` or `localhost`) and under GitHub Pages subpaths (e.g., `https://username.github.io/repository/`).
- **Interactive Features:** Dark/Light theme toggle (persisted via `localStorage` with `prefers-color-scheme` fallback), dynamic SVG architecture diagram tab switcher, expandable case studies, sticky navigation scroll spy, scroll progress bar, 1-click email copy toast, and smooth scroll reveal animations.
- **Recruiter Optimized:** Executive scannability, verified metrics (15+ Years, Fortune 14 Retail, 900+ SaaS Clients), and instant resume download options (PDF and Word `.docx`).

---

## 📁 Repository Structure

```text
portfolio/
├── index.html                   # Semantic HTML5 single-page portfolio
├── styles.css                   # Responsive CSS3 design system (Dark/Light themes)
├── script.js                    # Vanilla JavaScript interactive controller
├── README.md                    # Documentation and maintenance guide
├── .nojekyll                    # Prevents GitHub Pages Jekyll preprocessing
├── assets/
│   ├── resume.pdf               # Downloadable & viewable PDF Resume
│   ├── Hemant_Panchal_Resume.docx # Downloadable Word (.docx) Resume
│   ├── icons/                   # Vector icons
│   └── diagrams/
│       ├── enterprise-builder-engine.svg # Low-Code Engine Ecosystem Architecture
│       ├── microservices-event-driven.svg # .NET 10/8 & Kafka Event Mesh
│       └── retail-inventory-system.svg   # Costco Wholesale High-Concurrency Inventory
└── .github/
    └── workflows/
        └── pages.yml            # GitHub Actions automated deployment workflow
```

---

## 🚀 Local Development & Preview

You can preview the website locally using any standard web browser or static HTTP server.

### Option 1: Direct File Open
Simply double-click or open `portfolio/index.html` in Chrome, Edge, Firefox, or Safari.

### Option 2: Using Node.js / npx
```bash
# From within the portfolio directory:
npx serve .
# or
npx http-server .
```

### Option 3: Using Python (if installed)
```bash
python -m http.server 8080
```
Then navigate to `http://localhost:8080`.

---

## 🌐 Deploying to GitHub Pages

### Step 1: Create a GitHub Repository
1. Log in to [GitHub](https://github.com) and click **New Repository**.
2. Name the repository (e.g., `portfolio` or `hemant-panchal-portfolio`).
3. Set the repository to **Public**.

### Step 2: Push the Files to GitHub
Initialize git and push the contents of the `portfolio` folder to your main branch:
```bash
cd portfolio
git init
git add .
git commit -m "feat: Initial commit for Technical Architect portfolio"
git branch -M main
git remote add origin https://github.com/<YOUR_USERNAME>/<REPO_NAME>.git
git push -u origin main
```

### Step 3: Enable GitHub Pages via GitHub Actions
1. Go to your repository on GitHub: `https://github.com/<YOUR_USERNAME>/<REPO_NAME>`.
2. Click **Settings** > **Pages** (in the left sidebar).
3. Under **Build and deployment** > **Source**, select **GitHub Actions**.
4. Push a commit or trigger the workflow manually from the **Actions** tab.
5. Your website will be live at:
   ```text
   https://<YOUR_USERNAME>.github.io/<REPO_NAME>/
   ```

*(If you name your repository `<YOUR_USERNAME>.github.io`, the live URL will be `https://<YOUR_USERNAME>.github.io/`)*

---

## ✏️ How to Update Content

### 1. Updating the Resume
- Replace `assets/resume.pdf` with your latest PDF resume.
- Replace `assets/Hemant_Panchal_Resume.docx` with your latest Word document.
- The website download links point directly to these files.

### 2. Adding / Editing Professional Experience
Open `index.html` and locate `<section id="experience">`. Each role is structured inside a `.timeline-item` block with role, company, duration, responsibilities, and tech stack tags.

### 3. Modifying Architecture Case Studies
Locate `<section id="case-studies">` in `index.html`. Each case study is inside a `.case-study-card` container with structured sub-blocks for **Business Problem**, **Architectural Approach**, **Key Design Decisions**, and **Contribution**.

### 4. Updating Technical Skills
Locate `<section id="skills">` in `index.html`. Skills are grouped into clean `.skill-card` blocks with `.tech-badge` elements.

---

## 📋 Resume Fidelity & Data Audit

In strict compliance with factual resume fidelity:
- **Verified Experience:** 15+ years encompassing Enablistar (Technical Architect), ZingHR / Cnergyis (PM / Tech Lead), Infogain / Costco Wholesale (Tech Lead), Sportz Interactive (Sr. Associate / Tech Lead), Sodexo (Programmer Analyst), Tara Jewels (Software Dev), and Aim Global Solutions (Software Dev).
- **Verified Achievements:** Infogain "Star of the Month" award for Costco Wholesale project delivery excellence.
- **Verified Education:** B.Sc. IT (Mumbai University, 71.33% Distinction), H.S.C. (68.33%), S.S.C. (77.87%).
- **Intentionally Omitted:** No unverified external certifications or fabricated metrics were added.

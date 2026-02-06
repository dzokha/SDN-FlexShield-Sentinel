# 🤝 Contributing Guide  
**SDN-FlexShield: Sentinel**

Thank you for your interest in contributing to **SDN-FlexShield: Sentinel**!  
This project welcomes contributions from researchers, developers, educators, and security practitioners.

---

## 🎯 Project Principles

All contributions **must align** with the following principles:

- Client-side security awareness tool
- No data collection, tracking, or telemetry
- Explainable and interpretable security indicators
- Research-oriented & educational focus
- Fully open-source and auditable

---

## 🛠️ Ways to Contribute

### 🔹 Code
- New heuristic-based security indicators
- Improvements to detection logic
- UI/UX enhancements (clarity & explainability)
- Refactoring, performance, or security hardening

### 🔹 Research
- Indicator definitions with academic references
- Threat modeling (MITRE ATT&CK, STRIDE, etc.)
- False-positive analysis and mitigation

### 🔹 Documentation
- README improvements
- Indicator explanations
- Tutorials, examples, or translations

---

## 📐 Contribution Guidelines

### 1️⃣ Coding Rules
Your code must:
- Be clear, readable JavaScript
- Avoid unsafe APIs (`eval`, dynamic script loading)
- Not introduce data storage or network transmission
- Be well-commented for security logic

### 2️⃣ Security & Privacy (Mandatory)
❌ No user tracking or analytics  
❌ No background monitoring  
❌ No remote code execution  
❌ No privacy-invasive third-party libraries  

✅ All processing must remain **client-side**

Violations will result in rejection.

---

## 🔍 Adding New Security Indicators

When proposing a new indicator, please include:

- **Threat Description**
- **Detection Logic**
- **Potential False Positives**
- **At least one public reference** (ENISA, NIST, academic paper)

Indicators must produce **interpretable output**, not black-box decisions.

---

## 🧪 Testing Requirements

Before submitting a Pull Request:
- Test in multiple browsing scenarios
- Ensure no new permissions are added without justification
- Confirm deterministic behavior
- Verify no data is stored or transmitted

---

## 🚀 Pull Request Process

1. Fork the repository  
2. Create a feature branch  
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit with clear messages
4. Submit a PR including:
* Description of changes
* Security & privacy impact
* References (if applicable)

## 🧠 Review Criteria

Pull requests will be reviewed based on:
* Alignment with project philosophy
* Security and privacy impact
* Code quality and clarity
* Explainability of security logic
* Research relevance
* Not all PRs will be accepted, but all will be reviewed respectfully.

## 🚨 Reporting Security Issues

If you discover a security vulnerability, do not submit a public issue or PR.

Please follow the instructions in SECURITY.md for responsible disclosure.

## 📚 Academic Integrity

Contributors must ensure that:
* All referenced work is properly cited
* No copyrighted or proprietary code is included
* Contributions respect academic and ethical standards

## 👤 Maintainer
- **Project Maintainer**: Kha Van Nguyen (Dzokha).
- **Author Team**: Quang Nhat Minh Truong, Phuong Hoang Nguyen, Thang Quyet Le.
- **License**: MIT License
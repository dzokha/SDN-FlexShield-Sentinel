🤝 Contributing Guide
SDN-FlexShield: Sentinel

Thank you for your interest in contributing to SDN-FlexShield: Sentinel!
This project welcomes contributions from researchers, developers, educators, and security practitioners who share our commitment to security awareness, transparency, and privacy-by-design.

🎯 Project Philosophy

Before contributing, please understand the core principles of this project:

Client-side security awareness tool

No data collection or tracking

Explainable and interpretable indicators

Research-oriented and educational focus

Open-source transparency

All contributions must align with these principles.

🛠️ Ways to Contribute

You can contribute in several ways:

🔹 Code Contributions

New security indicators (heuristic-based)

Improvements to existing detection logic

UI/UX enhancements focused on clarity and explainability

Code refactoring and performance improvements

Security hardening and input validation

🔹 Research Contributions

Indicator definitions with academic references

Evaluation methodologies

Threat modeling (e.g., STRIDE, ATT&CK mapping)

False-positive analysis and mitigation

🔹 Documentation Contributions

README improvements

Indicator explanations

Tutorials and examples

Translation or accessibility enhancements

📐 Contribution Guidelines
1️⃣ Coding Standards

Please ensure that your code:

Is written in clear, readable JavaScript

Avoids unsafe functions (eval, dynamic script loading)

Does not introduce data persistence or telemetry

Is well-commented, especially for security logic

Follows consistent formatting and naming conventions

2️⃣ Security & Privacy Requirements

All contributions MUST comply with the following:

❌ No user tracking or analytics

❌ No remote code execution

❌ No background data collection

❌ No third-party libraries that compromise privacy

✅ All processing must remain client-side

Contributions violating these principles will not be accepted.

3️⃣ Adding New Security Indicators

When proposing a new indicator:

Clearly describe the threat model

Explain why the indicator is relevant

Specify potential false positives

Provide at least one public reference (e.g., ENISA, academic paper)

Ensure the indicator produces interpretable output

📌 Example structure:

Indicator Name:
Threat Description:
Detection Logic:
Potential False Positives:
References:

🧪 Testing Contributions

Before submitting a pull request:

Test your changes in multiple browsing scenarios

Ensure no new permissions are introduced without justification

Validate that the extension behaves deterministically

Confirm that no data is persisted or transmitted

🚀 Pull Request Process

Fork the repository

Create a feature branch

git checkout -b feature/your-feature-name


Make your changes with clear commit messages

Test thoroughly

Submit a Pull Request (PR) with:

A clear description of the change

Security and privacy impact assessment

References (if applicable)

🧠 Review Criteria

Pull requests will be reviewed based on:

Alignment with project philosophy

Security and privacy impact

Code quality and clarity

Explainability of security logic

Research relevance

Not all PRs will be accepted, but all will be reviewed respectfully.

🚨 Reporting Security Issues

If you discover a security vulnerability, do not submit a public issue or PR.

Please follow the instructions in SECURITY.md for responsible disclosure.

📚 Academic Integrity

Contributors must ensure that:

All referenced work is properly cited

No copyrighted or proprietary code is included

Contributions respect academic and ethical standards

👤 Maintainer

Project Maintainer: Dzokha
Project Type: Open-source research prototype
License: MIT License

🔑 Final Note

SDN-FlexShield: Sentinel values quality over quantity.
Contributions that enhance transparency, security, and user trust are especially welcome.
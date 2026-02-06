# 🔐 Security Policy 
SDN-FlexShield: Sentinel

## 📌 Scope

This document describes the security posture, threat model, and responsible disclosure process for the SDN-FlexShield: Sentinel browser extension.

SDN-FlexShield: Sentinel is a client-side, research-oriented security awareness tool designed to help users identify potential phishing risks through indicator-based analysis.

## 🧠 Security Design Principles

The extension is developed according to the following core security principles:

1. Privacy by Design

All analyses are performed locally within the user's browser

No browsing data is collected, stored, or transmitted

No user identifiers, telemetry, or analytics are implemented

2. Least Privilege

The extension requests only the minimum permissions required

Access is limited to the active tab during user interaction

No background monitoring of user activity

3. Transparency & Auditability

The entire codebase is open source

No obfuscated or dynamically loaded code

All security logic can be independently reviewed and verified

## 🔍 Threat Model Overview

SDN-FlexShield: Sentinel is designed to mitigate common client-side phishing risks, while explicitly avoiding behaviors that could introduce new threats.

Threats Explicitly Out of Scope

The extension does NOT:

Act as an antivirus or malware removal tool

Block or modify network traffic

Perform server-side scanning

Guarantee detection of all phishing attacks

🛡️ Threat Mitigation Summary
Threat Vector	Mitigation Strategy
Data exfiltration	No data transmission implemented
User tracking	No identifiers or analytics
Remote code execution	No dynamic code loading
Malicious update channels	Updates only via official browser stores
Third-party service abuse	Optional and limited DNS-over-HTTPS usage
🌐 Third-Party Services

The extension may optionally use public DNS-over-HTTPS resolvers (e.g., Google DNS) for domain resolution.

DNS queries are limited to A-record lookups

No query results are persisted

Resolver usage is non-mandatory and can be disabled in future versions

No other third-party services are used.

## ⚠️ Known Limitations

Indicator-based heuristics may produce false positives or false negatives

The extension does not validate website content authenticity

Risk indicators are advisory, not enforcement mechanisms

Results should be interpreted as security guidance, not absolute judgments

## 🔒 Secure Development Practices

The project follows these secure coding practices:

No use of eval(), dynamic script injection, or unsafe APIs

Explicit input validation where applicable

Defensive message handling between extension components

Conservative error handling to avoid information leakage

## 🧪 Security Testing

Current testing includes:

Manual code review

Static inspection of permissions and APIs

Functional testing in controlled browsing scenarios

Future improvements may include:

Automated static analysis

Indicator-based unit testing

Reproducible evaluation datasets

## 🚨 Reporting Security Vulnerabilities

We encourage responsible disclosure of security vulnerabilities.

How to Report

If you discover a security issue:

Do not open a public GitHub issue

Contact the author directly via the repository contact information

Provide:

Clear description of the issue

Steps to reproduce

Potential impact assessment (if available)

We aim to acknowledge reports in a timely manner and address confirmed issues responsibly.

## 🔓 Security Through Transparency

“Security is strengthened when systems are open to scrutiny.”

By open-sourcing SDN-FlexShield: Sentinel, we invite the community to:

Audit the code

Validate design decisions

Propose improvements

Use the project as a research or educational reference

## 📚 Compliance & References

This project is conceptually aligned with:

- **NIST SP 800-61** – Incident Handling & Indicators
- **NIST SP 800-92** – Security Monitoring
- **ENISA** Phishing Threat Landscape

MITRE ATT&CK – Initial Access (TA0001)

## 👤 Maintainer
- **Project Maintainer**: Kha Van Nguyen (Dzokha).
- **Author Team**: Quang Nhat Minh Truong, Phuong Hoang Nguyen, Thang Quyet Le.
License: MIT License

---

SDN-FlexShield: Sentinel is designed to reduce risk, not to replace professional security solutions.
Its primary goal is to improve user awareness through transparent and explainable security indicators.

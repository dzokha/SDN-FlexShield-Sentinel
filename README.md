# 🛡️ SDN-FlexShield: Sentinel

**Client-side, Indicator-based Phishing Awareness Browser Extension**

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Project Type](https://img.shields.io/badge/Project-Research%20Prototype-blueviolet)](https://dzokha.vn)
[![Platform](https://img.shields.io/badge/Platform-Chrome%20Extension-blue)](https://www.google.com/chrome/)

🌐 **Read this documentation in:** [🇻🇳 Tiếng Việt](README.vi.md)

---

## 📌 Overview

**SDN-FlexShield: Sentinel** is an open-source browser extension designed to enhance end-user cybersecurity awareness by performing **client-side, indicator-based analysis** of visited websites.

The extension focuses on **early phishing risk detection** and delivers interpretable security warnings (XAI - Explainable AI) to support safer online behavior. Unlike blacklist-based or opaque detection tools, Sentinel emphasizes transparency, explainability, and privacy-by-design.

### 🎯 Design Goals
| Goal | Description |
| :--- | :--- |
| **🔍 Explainable Security** | Provides clear, human-readable risk indicators so users understand *why* a site is risky. |
| **🔒 Privacy First** | No user data collection, tracking, or exfiltration. Analysis happens locally. |
| **🧠 Client-Side Analysis** | Zero dependency on backend servers for real-time analysis. |
| **🧪 Research-Oriented** | Built as a baseline system for academic study and AI-enhanced extension. |

---

## 🧠 Core Features & Detection Framework

Sentinel analyzes the currently visited website using a set of **seven technical risk indicators** derived from common phishing and web-based attack techniques (aligned with MITRE ATT&CK TA0001).

### The 7-Point Indicator System

1.  **🌐 Domain Integrity**
    * Analyzes domain name structures to detect typosquatting.
    * Flags the use of raw IP addresses (e.g., `192.168.x.x`) instead of legitimate domain names.

2.  **🔗 URL Analysis**
    * Identifies suspicious URL patterns and obfuscation techniques.
    * Detects special character misuse (e.g., `@` for credential hiding) and complex URL encoding.

3.  **🔐 SSL/TLS Verification**
    * Verifies digital certificates status.
    * Issues high-severity warnings for websites using unencrypted HTTP connections.

4.  **📝 Web Form Security**
    * Detects insecure data transmission in `<form>` elements.
    * Alerts when forms collecting sensitive data submit to cross-origin or untrusted domains.

5.  **🎨 Content Consistency**
    * Evaluates visual and textual elements (Logo, Page Title).
    * Detects unauthorized hotlinking or UI spoofing techniques.

6.  **⚡ DOM & Script Behavior**
    * Monitors client-side script anomalies.
    * Flags automatic redirections, deceptive pop-ups, or clickjacking attempts.

7.  **💬 Social Engineering Language**
    * Identifies psychological manipulation keywords commonly used in phishing.
    * *Keywords example:* "Account suspended", "Urgent action required", "Verify immediately".

---

## 🔐 Privacy & Data Protection

We adhere to the **Principle of Least Privilege**.

| ✅ What Sentinel DOES | ❌ What Sentinel DOES NOT Do |
| :--- | :--- |
| Analyzes URLs locally within the browser instance. | ❌ Collect browsing history. |
| Displays security indicators in real-time. | ❌ Store, transmit, or sell user data. |
| Optionally resolves DNS via public DoH (DNS-over-HTTPS). | ❌ Track user behavior or analytics. |
| | ❌ Communicate with proprietary backend servers. |

> **Security Note:** No user data ever leaves the browser environment. All logic is transparent and auditable.

---

## 🚀 Installation Guide

### Prerequisites
* Google Chrome (or Chromium-based browsers like Edge, Brave).
* Git (optional, for cloning).

### Step 1: Get the Source Code
Clone the repository or download the ZIP file:
```bash
git clone [https://github.com/dzokha/SDN-FlexShield-Sentinel.git](https://github.com/dzokha/SDN-FlexShield-Sentinel.git)







# 🛡️ SDN-FlexShield: Sentinel

Client-side, Indicator-based Phishing Awareness Browser Extension

🌐 Read this documentation in:
- 🇻🇳 [Tiếng Việt](README.vi.md)


📌 Overview

SDN-FlexShield: Sentinel is an open-source browser extension designed to enhance end-user cybersecurity awareness by performing client-side, indicator-based analysis of visited websites.
The extension focuses on early phishing risk detection and delivers interpretable security warnings to support safer online behavior.

Unlike blacklist-based or opaque detection tools, Sentinel emphasizes transparency, explainability, and privacy-by-design.

🎯 Design Goals

🔍 Explainable Security – clear, human-readable risk indicators

🔒 Privacy First – no user data collection or tracking

🧠 Client-Side Analysis – no server-side processing

🧪 Research-Oriented – suitable for academic study and extension

🌐 Open Source Transparency – auditable and extensible codebase

🧠 How It Works

SDN-FlexShield: Sentinel analyzes the currently visited website using a set of seven technical risk indicators derived from common phishing and web-based attack techniques.

Analysis Pipeline

URL & Domain Inspection

TLS/HTTPS Security Verification

DNS Resolution (Optional, via DNS-over-HTTPS)

Content-Based Heuristic Checks

Indicator Aggregation & Interpretation

User-Facing Risk Notification

All processing is performed locally within the browser.

⚠️ Security Indicators

The extension evaluates the following categories of indicators:

Use of direct IP address instead of domain names

URL obfuscation (e.g., @ character misuse)

Domain impersonation (e.g., .gov misuse)

Absence of HTTPS/TLS encryption

Suspicious page structure or hidden elements

DNS resolution anomalies

Additional heuristic-based signals

📌 Indicators are inspired by publicly documented phishing techniques referenced in ENISA reports, APWG analyses, and MITRE ATT&CK (Initial Access – TA0001).

🔐 Privacy & Data Protection
✅ What Sentinel DOES

Analyzes URLs locally

Displays security indicators in real time

Optionally resolves DNS records via public DNS-over-HTTPS

❌ What Sentinel DOES NOT Do

❌ Collect browsing history

❌ Store or transmit user data

❌ Track users or behavior

❌ Use analytics, ads, or telemetry

❌ Communicate with proprietary servers

No user data ever leaves the browser.

🛡️ Security by Design

Sentinel follows established secure design principles:

Principle of Least Privilege
Only accesses the active tab when explicitly invoked.

No Remote Code Execution
No dynamic code loading or execution.

No Persistent Storage of Sensitive Data

Open-Source Audibility
All logic is transparent and verifiable.

🔍 Threat Model (Summary)
Threat Vector Mitigation
Data exfiltration Not implemented
User tracking Not implemented
Malicious code injection  Not possible
Server-side abuse No backend exists
Third-party analytics None
🧪 Intended Use Cases

End-user phishing awareness

Educational demonstrations (cybersecurity courses)

Research prototypes for indicator-based detection

Baseline system for AI-enhanced phishing detection

SOC / Blue Team training tools

📚 Standards & References

This project aligns conceptually with:

NIST SP 800-61 – Incident Handling Indicators

NIST SP 800-92 – Security Monitoring Concepts

ENISA Phishing Threat Landscape

MITRE ATT&CK – Initial Access (TA0001)

Sentinel is a research-oriented tool and not a replacement for enterprise-grade security solutions.

🔓 Open Source & Transparency

We believe in security through transparency.

Researchers, developers, and practitioners are encouraged to:

Review the source code

Validate the detection logic

Extend indicators or scoring models

Adapt the tool for academic or training purposes

🚧 Limitations

Sentinel uses heuristic indicators, not machine learning

False positives are possible

The extension does not block websites automatically

Detection scope is intentionally conservative

🚀 Roadmap (Planned)

Risk scoring & confidence estimation

IDN homograph attack detection

MITRE ATT&CK mapping per indicator

Optional local ML-based enrichment

Academic evaluation datasets

👤 Author & License

Author: Dzokha
License: MIT License
Project Type: Research Prototype

This project is developed for educational and research purposes within the domain of network and web security.

🤝 Contributing

Contributions, reviews, and academic feedback are welcome.
Please ensure all contributions align with the project’s privacy-first and security-focused principles.

🔑 Final Note

SDN-FlexShield: Sentinel is designed to help users understand why a website may be risky, not just whether it is risky.
Transparency and explainability are core to building trust in security tools.






SDN-FlexShield: Sentinel is a browser extension aimed at enhancing end-user cybersecurity awareness through a client-side, indicator-based analysis framework for phishing detection, providing interpretable warnings that support safer online behavior.

# Core Features

### Seven-Indicator Detection Framework

* **1. Domain:** Analyzes domain name structures to detect typosquatting and the use of raw IP addresses instead of legitimate domain names.
* **2. URL:** Identifies suspicious URL patterns, including special characters (e.g., @), complex URL encoding, and inconsistencies between displayed text and actual links.
* **3. SSL/TLS:** Verifies digital certificates and issues warnings for websites that still use unencrypted HTTP connections.
* **4. Web Form:** Detects and alerts users when forms collecting sensitive information submit data to untrusted or unknown domains.
* **5. Content:** Evaluates the consistency of visual and textual elements such as logos and page titles, and detects unauthorized hotlinking techniques.
* **6. DOM Script:** Monitors client-side script behaviors, including automatic redirections and deceptive pop-up windows.
* **7. Language:** Identifies psychological manipulation keywords commonly used in phishing attacks (e.g., “account suspended”, “urgent action required”).

# Installation Guide

## 1. Source Code Preparation

Download or clone the project from GitHub:

https://github.com/dzokha/SDN-FlexShield-Sentinel

After downloading, extract the project directory named: SDN-FlexShield-Sentinel

## 2. Installing the Extension on Google Chrome

Install Sentinel as an unpacked Chrome extension by following these steps.

### Step 1: Open the Extensions Management Page
- Open Google Chrome
- Navigate to: chrome://extensions/

### Step 2: Enable Developer Mode

Enable Developer mode in the top-right corner of the page

### Step 3: Load the Unpacked Extension

- Click Load unpacked

- Select the folder: SDN-FlexShield-Sentinel

- Click Select Folder

### Step 4: Pin the Extension

-  Click the Extensions icon on the Chrome toolbar

- Pin SDN-FlexShield-Sentinel for quick access


## 3. Result

After successful installation, the extension interface will appear as shown below:

![SDN-FlexShield-Sentinel Interface](images/giaodien.png)

## Scientific Background

1. Nguyen Van Kha, Nguyen Hoang Phuong, Le Quyet Thang. "Cybersecurity awareness: from recognition to safe action in digital transformation”.

# SDN-FlexShield Defender Ecosystem Architecture

Sentinel is a component of the multi-layer security architecture of SDN-FlexShield Defender:

- **SDN-FlexShield Defender**
  - **SDN-FlexShield-Sentinel** – End-user monitoring and alerting plugin
  - **SDN-FlexShield-Console** – Desktop application for SOC operations and administration
  - **SDN-FlexShield-Enforcer** – Router / SDN Controller enforcement module
  - **SDN-FlexShield-Core** – Central server / backend system
  - **SDN-FlexShield-HoneyCore** – Honeynet and deception environment
  - **SDN-FlexShield-AegisAI** – AI engine for analysis and prediction
  - **SDN-FlexShield-Audit** – Forensic, Audit & Compliance
  
---

*© 2025 Dzokha*



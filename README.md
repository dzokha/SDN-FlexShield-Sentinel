
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

### Step 1: Get the Source Code
* Clone the repository or download the ZIP file: `git clone https://github.com/dzokha/SDN-FlexShield-Sentinel.git`
* After downloading, ensure you have the folder named `SDN-FlexShield-Sentinel`.

### Step 2: Load into Chrome
* Open **Google Chrome** and navigate to: `chrome://extensions/`
* Enable **Developer Mode** (Toggle the switch in the top-right corner).
* Click the **Load unpacked** button (Top-left).
* Select the `SDN-FlexShield-Sentinel` directory you just downloaded.

### Step 3: Pin & Run
* Click the **Extensions icon** (🧩) on the Chrome toolbar.
* Pin **SDN-FlexShield: Sentinel** for quick access.
* Visit any website to see the analysis in action.

### Screenshot

![SDN-FlexShield-Sentinel Interface](images/giaodien.png)

## 🏗️ Ecosystem Architecture
Sentinel is the proactive client-side layer of the SDN-FlexShield Defender ecosystem:

### System Components

| Component          | Role                                                                 |
|--------------------|----------------------------------------------------------------------|
| **Sentinel**       | User-side monitoring, alerting & awareness plugin.                   |
| **Console**        | Desktop application for SOC operations and administration.           |
| **Enforcer**       | Router / SDN Controller enforcement module.                          |
| **Core / AegisAI** | Central backend with AI-driven analysis and prediction.              |
| **HoneyCore**      | Honeynet and deception environment for threat intelligence.          |

---

## 📚 Scientific Background & Standards

This work is grounded in peer-reviewed research and global cybersecurity standards.

### Related Publication
- **Kha Van Nguyen, Phuong Hoang Nguyen, Thang Quyet Le**.  
  *“Cybersecurity Awareness: From Recognition to Safe Action in Digital Transformation.”*

### Standards Alignment
- **NIST SP 800-61**: Incident Handling Indicators.  
- **MITRE ATT&CK**: [Initial Access (TA0001)] – Phishing.

## 🚧 Roadmap

- [x] Heuristic-based static analysis.  
- [ ] **IDN Homograph** attack detection.  
- [ ] **Local Machine Learning** (TensorFlow.js) integration.  
- [ ] **Risk Scoring Confidence Estimation**.

## 👤 Author & License

- **Kha Van Nguyen (Dzokha)** – Lead Developer  
- **Quang Nhat Minh Truong**  
- **Phuong Hoang Nguyen**  
- **Thang Quyet Le**

**License:** Distributed under the **MIT License**.

---

*In a world of opaque threats, Sentinel chooses transparency. Education is the best firewall.*
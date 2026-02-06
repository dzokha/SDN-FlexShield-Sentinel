# SDN-FlexShield: Sentinel

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



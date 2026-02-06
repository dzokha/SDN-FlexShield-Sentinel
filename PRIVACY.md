🔐 Privacy Policy
SDN-FlexShield: Sentinel
📌 Overview

This document explains how SDN-FlexShield: Sentinel handles user data and protects privacy.

SDN-FlexShield: Sentinel is a client-side browser extension designed to improve end-user cybersecurity awareness through indicator-based phishing risk analysis.
The extension is built with a privacy-first and data-minimization approach.

🧠 Core Privacy Principles

SDN-FlexShield: Sentinel follows these foundational privacy principles:

Local Processing Only

No Data Collection

No Data Storage

No User Tracking

Full Transparency through Open Source

📊 Data Collection
❌ Data We Do NOT Collect

The extension does not collect, store, or transmit:

Browsing history

Full URLs beyond the active tab context

IP addresses of users

Personally identifiable information (PII)

Authentication credentials

Form inputs or keystrokes

Cookies or session data

Analytics or telemetry data

No personal or sensitive user data is ever collected.

🔍 Data Processing
What Is Processed

The extension temporarily processes the following in memory only:

Domain name of the currently active tab

URL structure (for heuristic inspection)

Connection protocol (HTTP / HTTPS)

Public DNS response (optional, non-persistent)

How Processing Is Performed

All analysis is executed locally within the browser

No data is written to disk

No data is cached or logged

No background monitoring is performed

Once the popup is closed, all processed data is discarded.

🌐 Third-Party Services
DNS-over-HTTPS (Optional)

SDN-FlexShield: Sentinel may optionally perform DNS resolution using public DNS-over-HTTPS resolvers (e.g., Google DNS).

Only A-record lookups are performed

Queries are not associated with user identity

DNS results are not stored or transmitted further

No other third-party services, APIs, or analytics platforms are used.

🚫 Data Sharing

The extension:

❌ Does not share data with third parties

❌ Does not transmit data to external servers

❌ Does not embed advertising or tracking components

❌ Does not monetize user data

🔒 Permissions & Justification

SDN-FlexShield: Sentinel requests minimal permissions, strictly required for its functionality:

Active Tab Access
Used only to analyze the currently viewed webpage when the user opens the extension.

The extension does not access background tabs or monitor browsing behavior continuously.

🧪 Research & Educational Use

This project is developed as a research prototype and educational tool in the domain of cybersecurity.

No experimental data is collected from users

No user behavior is logged for research purposes

Any future research extensions will require explicit user consent

🔓 Open Source Transparency

The full source code of SDN-FlexShield: Sentinel is publicly available.

Users and researchers are encouraged to:

Inspect the codebase

Verify privacy claims

Audit data handling logic

Propose privacy improvements

Privacy claims are verifiable through source code inspection.

⚠️ Limitations

The extension provides advisory security indicators, not guarantees

False positives or false negatives may occur

Privacy protection does not imply complete protection from online threats

🔄 Policy Updates

Any changes to this privacy policy will be:

Documented in the repository

Version-controlled

Clearly explained in release notes

No changes will introduce data collection without explicit user awareness.

👤 Maintainer & Contact

Maintainer: Dzokha
Project Type: Open-source research prototype
License: MIT License

🔑 Final Statement

SDN-FlexShield: Sentinel respects user privacy by design.
The extension exists to improve security awareness—not to observe, track, or profile users.
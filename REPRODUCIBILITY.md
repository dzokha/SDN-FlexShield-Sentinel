# Reproducibility Statement

## Code Availability
The source code of the SDN-FlexShield-Sentinel browser extension is publicly available at:
https://github.com/yourname/SDN-FlexShield-Sentinel

## Environment
- Operating System: Windows 10+, Ubuntu 22.04+, macOS
- Browser: Google Chrome 120+
- Extension Standard: Chrome Manifest V3
- Programming Language: JavaScript (ES6)

## Dependencies
- TensorFlow.js v4.x (optional, for local ML-based detection)
- punycode.js for IDN homograph analysis
No external server or cloud-based service is required.

## Data and Configuration
All heuristic rules, detection logic, and risk scoring parameters are embedded in the source code.
No external datasets or user data are collected or transmitted.

## Execution Instructions
1. Clone the repository.
2. Open Chrome and navigate to `chrome://extensions`.
3. Enable Developer Mode.
4. Click "Load unpacked" and select the project directory.
5. Navigate to a webpage containing suspicious or IDN-based URLs.
6. View detection results and risk scores via the extension popup.

## Expected Results
- IDN homograph attacks are detected with high confidence.
- Legitimate domains show low risk scores.
- Detection results are reproducible across different systems.

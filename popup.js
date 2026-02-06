async function analyzeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  const url = new URL(tab.url);
  const domain = url.hostname;

  try {
    const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await response.json();
    
    if (data.Answer && data.Answer.length > 0) {
      // Retrieve the first resolved IPv4 address from the DNS response
      const ipAddress = data.Answer[0].data;
      document.getElementById('ip').textContent = ipAddress;
    } else {
      document.getElementById('ip').textContent = 'No IP address resolved';
    }
  } catch (error) {
    document.getElementById('ip').textContent = 'DNS resolution error';
    console.error(error);
  }

  // (1) & (2) Domain and URL Analysis
  let domainRisk = "No anomaly detected";

  // Direct IP address usage instead of domain name
  if (domain.match(/\d+\.\d+\.\d+\.\d+/)) {
    domainRisk = "Direct IP address used instead of a domain name (High Risk)";
  }

  // Obfuscated URL using '@' character
  if (url.href.includes("@")) {
    domainRisk = "URL contains obfuscation character '@'";
  }

  // Government domain impersonation detection
  // (e.g., misuse of '.gov.vn' within URL path but not in the actual domain)
  if (url.pathname.includes("gov.vn") && !domain.endsWith(".gov.vn")) {
    domainRisk = "Government domain impersonation detected (.gov.vn in URL path)";
  }

  // Update domain information in the UI
  document.getElementById('domain').textContent = domain;
  
  // (3) SSL/TLS Security Assessment
  const statusDiv = document.getElementById('status');
  const isSecure = url.protocol === 'https:';

  statusDiv.textContent = isSecure
    ? '✓ Secure connection (HTTPS with TLS)'
    : '⚠ Insecure connection (HTTP without encryption)';

  statusDiv.className = isSecure ? 'secure' : 'insecure';

  // Invoke content script for remaining indicators (4, 5, 6, 7)
  chrome.tabs.sendMessage(
    tab.id,
    { action: "analyze_content" },
    (response) => {
      const list = document.getElementById('risk-list');
      list.innerHTML = ""; // Clear previous results
      
      const allIndicators = [domainRisk, ...(response?.results || [])];

      allIndicators.forEach(indicator => {
        if (indicator !== "No anomaly detected") {
          const li = document.createElement('li');
          li.textContent = indicator;
          list.appendChild(li);
        }
      });
    }
  );
}

// Execute analysis immediately when the popup is opened
analyzeTab();

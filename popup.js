async function analyzeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab || !tab.url.startsWith('http')) {
    document.getElementById('severity-label').textContent = "INACTIVE";
    return;
  }

  const url = new URL(tab.url);
  const domain = url.hostname;
  document.getElementById('domain').textContent = domain.length > 20 ? domain.substring(0, 18) + '..' : domain;

  let triggeredIndicators = [];
  let score = 0;

  // 1. DNS Resolution
  try {
    const dnsRes = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const dnsData = await dnsRes.json();
    document.getElementById('ip').textContent = dnsData.Answer ? dnsData.Answer[0].data : 'Not Resolved';
  } catch (e) {
    document.getElementById('ip').textContent = 'Error';
  }

  // 2. Protocol Check (Base weight: 40)
  const statusBadge = document.getElementById('status-badge');
  if (url.protocol !== 'https:') {
    triggeredIndicators.push("Unencrypted HTTP protocol in use");
    score += 40;
    statusBadge.textContent = "⚠ Insecure HTTP";
    statusBadge.className = "status-danger";
  } else {
    statusBadge.textContent = "✓ Secure HTTPS";
    statusBadge.className = "status-safe";
  }

  // 3. Domain Logic (Weights: 20-30)
  if (domain.match(/\d+\.\d+\.\d+\.\d+/)) {
    triggeredIndicators.push("Direct IP access (No domain name)");
    score += 30;
  }
  if (url.href.includes("@")) {
    triggeredIndicators.push("URL obfuscation (@ character)");
    score += 20;
  }
  if (url.pathname.includes("gov.vn") && !domain.endsWith(".gov.vn")) {
    triggeredIndicators.push("Government spoofing attempt");
    score += 30;
  }

  // 4. Content Analysis via Content Script
  chrome.tabs.sendMessage(tab.id, { action: "analyze_content" }, (response) => {
    // Xử lý lỗi nếu content script không tồn tại trên trang (ví dụ trang cài đặt Chrome)
    if (chrome.runtime.lastError) {
      updateUI(triggeredIndicators, score);
      return;
    }

    const contentResults = response?.results || [];
    contentResults.forEach(res => {
      if (res && res !== "No anomaly detected") {
        triggeredIndicators.push(res);
        score += 15;
      }
    });

    updateUI(triggeredIndicators, score);
  });
}

function updateUI(indicators, score) {
  const finalScore = Math.min(score, 100);
  const scoreText = document.getElementById('score-text');
  const barFill = document.getElementById('risk-bar-fill');
  const severityLabel = document.getElementById('severity-label');
  const list = document.getElementById('risk-list');
  const countDisplay = document.getElementById('indicator-count');

  // Animation cho con số
  scoreText.textContent = finalScore;
  barFill.style.width = `${finalScore}%`;
  
  // Xử lý Severity Level
  if (finalScore < 30) {
    barFill.className = 'bg-safe';
    severityLabel.textContent = "LOW RISK";
    severityLabel.style.color = "var(--success)";
    scoreText.style.color = "var(--success)";
  } else if (finalScore < 60) {
    barFill.className = 'bg-warn';
    severityLabel.textContent = "MEDIUM RISK";
    severityLabel.style.color = "var(--warning)";
    scoreText.style.color = "var(--warning)";
  } else {
    barFill.className = 'bg-danger';
    severityLabel.textContent = "HIGH RISK";
    severityLabel.style.color = "var(--danger)";
    scoreText.style.color = "var(--danger)";
  }

  // Render danh sách lỗi
  list.innerHTML = "";
  if (indicators.length === 0) {
    list.innerHTML = '<div style="font-size:11px; color:var(--success); text-align:center; padding:10px;">✓ Environment looks clean.</div>';
  } else {
    indicators.forEach(text => {
      const item = document.createElement('div');
      item.className = 'risk-item';
      item.textContent = text;
      list.appendChild(item);
    });
  }
  countDisplay.textContent = `${indicators.length}/7`;
}

// Khởi chạy khi popup mở
document.addEventListener('DOMContentLoaded', analyzeTab);
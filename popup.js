document.addEventListener('DOMContentLoaded', () => {
  // Chạy lần đầu
  analyzeTab();

  // Xử lý nút Refresh
  const refreshBtn = document.getElementById('refresh-btn');
  refreshBtn.addEventListener('click', () => {
    // 1. Hiệu ứng xoay icon
    const icon = refreshBtn.querySelector('svg');
    icon.classList.add('spinning');

    // 2. Reset UI về trạng thái chờ
    document.getElementById('score-text').textContent = "0";
    document.getElementById('risk-label').textContent = "RE-SCANNING";
    document.getElementById('progress-circle').style.strokeDashoffset = 377; // Reset vòng tròn
    document.getElementById('risk-list').innerHTML = "";
    document.getElementById('ip').textContent = "Refreshing...";
    
    // 3. Thực hiện quét lại
    analyzeTab().then(() => {
        // Tắt xoay sau khi xong (thêm timeout nhỏ để mượt mắt)
        setTimeout(() => {
            icon.classList.remove('spinning');
        }, 800);
    });
  });
});

async function analyzeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  
  if (!tab || !tab.url.startsWith('http')) {
    updateUI([], 0, "SYSTEM PAGE");
    document.getElementById('domain').textContent = "System Page";
    return;
  }

  const url = new URL(tab.url);
  const domain = url.hostname;
  document.getElementById('domain').textContent = domain.length > 22 ? domain.substring(0, 20) + '...' : domain;

  let triggeredIndicators = [];
  let score = 0;

  // --- ANALYSIS LOGIC ---

  // 1. Check Protocol
  const statusBadge = document.getElementById('status-badge');
  if (url.protocol !== 'https:') {
    triggeredIndicators.push("Unencrypted HTTP protocol");
    score += 40;
    statusBadge.className = "status-badge bg-danger";
    statusBadge.innerHTML = `<span class="main-text">⚠ INSECURE</span><span class="sub-text">(Kết nối không mã hóa)</span>`;
  } else {
    statusBadge.className = "status-badge bg-safe";
    statusBadge.innerHTML = `<span class="main-text">✓ SECURE</span><span class="sub-text">(Kết nối an toàn)</span>`;
  }

  // 2. Check IP/Domain Heuristics
  if (domain.match(/\d+\.\d+\.\d+\.\d+/)) {
    triggeredIndicators.push("Direct IP Access");
    score += 30;
  }
  if (url.href.includes("@")) {
    triggeredIndicators.push("URL Obfuscation (@)");
    score += 20;
  }

  // 3. Fetch DNS (Async)
  try {
    const res = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await res.json();
    document.getElementById('ip').textContent = data.Answer ? data.Answer[0].data : 'No Record';
  } catch (e) {
    document.getElementById('ip').textContent = 'Error';
  }

  // 4. Content Script (Wrap in Promise để await được cho nút Refresh)
  return new Promise((resolve) => {
    chrome.tabs.sendMessage(tab.id, { action: "analyze_content" }, (response) => {
        // Bỏ qua lỗi runtime nếu không inject được script
        if (!chrome.runtime.lastError && response?.results) {
           response.results.forEach(res => {
             if(res !== "No anomaly detected") {
                 triggeredIndicators.push(res);
                 score += 15;
             }
           });
        }
        
        updateUI(triggeredIndicators, Math.min(score, 100));
        resolve(); // Báo hiệu đã xong
    });
  });
}

function updateUI(indicators, score, statusOverride = null) {
  const scoreText = document.getElementById('score-text');
  const riskLabel = document.getElementById('risk-label');
  const circle = document.getElementById('progress-circle');
  const list = document.getElementById('risk-list');
  const countDisplay = document.getElementById('indicator-count');

  let colorVar = '#10b981'; // Green
  let label = "SAFE";
  
  if (score >= 60) { colorVar = '#ef4444'; label = "HIGH RISK"; }
  else if (score >= 30) { colorVar = '#f59e0b'; label = "MEDIUM RISK"; }

  if (statusOverride) label = statusOverride;

  // Draw Circle
  const circumference = 377; 
  const offset = circumference - ((score / 100) * circumference);
  circle.style.stroke = colorVar;
  circle.style.strokeDashoffset = offset;
  
  // Update Text
  scoreText.textContent = score;
  scoreText.style.color = colorVar;
  riskLabel.textContent = label;
  riskLabel.style.color = colorVar;

  // Render List
  list.innerHTML = "";
  if (indicators.length === 0) {
    list.innerHTML = `<div class="clean-env"><div style="font-weight:700">✓ SYSTEM CLEAN</div></div>`;
  } else {
    indicators.forEach(text => {
      const item = document.createElement('div');
      item.className = 'risk-item';
      item.innerHTML = `• ${text}`;
      list.appendChild(item);
    });
  }
  countDisplay.textContent = `${indicators.length}/7`;
}
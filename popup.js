async function analyzeTab() {
  // 1. Lấy thông tin tab hiện tại
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  if (!tab) return;

  const url = new URL(tab.url);
  const domain = url.hostname;
  document.getElementById('domain').textContent = domain;

  // 2. Kiểm tra giao thức an toàn
  const statusDiv = document.getElementById('status');
  if (url.protocol === 'https:') {
    statusDiv.textContent = '✓ Kết nối an toàn (HTTPS)';
    statusDiv.className = 'secure';
  } else {
    statusDiv.textContent = '⚠ Kết nối không an toàn (HTTP)';
    statusDiv.className = 'insecure';
  }

  // 3. Tra cứu IP bằng Google DNS API (không cần cài đặt thêm)
  try {
    const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
    const data = await response.json();
    
    if (data.Answer && data.Answer.length > 0) {
      // Lấy địa chỉ IP đầu tiên trong danh sách kết quả
      const ip = data.Answer[0].data;
      document.getElementById('ip').textContent = ip;
    } else {
      document.getElementById('ip').textContent = 'Không tìm thấy IP';
    }
  } catch (error) {
    document.getElementById('ip').textContent = 'Lỗi tra cứu';
    console.error(error);
  }
}

// Chạy hàm ngay khi mở popup
analyzeTab();
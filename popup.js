// async function analyzeTab() {
//   // 1. Lấy thông tin tab hiện tại
//   const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
//   if (!tab) return;

//   const url = new URL(tab.url);
//   const domain = url.hostname;
//   document.getElementById('domain').textContent = domain;

//   // 2. Kiểm tra giao thức an toàn
//   const statusDiv = document.getElementById('status');
//   if (url.protocol === 'https:') {
//     statusDiv.textContent = '✓ Kết nối an toàn (HTTPS)';
//     statusDiv.className = 'secure';
//   } else {
//     statusDiv.textContent = '⚠ Kết nối không an toàn (HTTP)';
//     statusDiv.className = 'insecure';
//   }

//   // 3. Tra cứu IP bằng Google DNS API (không cần cài đặt thêm)
//   try {
//     const response = await fetch(`https://dns.google/resolve?name=${domain}&type=A`);
//     const data = await response.json();
    
//     if (data.Answer && data.Answer.length > 0) {
//       // Lấy địa chỉ IP đầu tiên trong danh sách kết quả
//       const ip = data.Answer[0].data;
//       document.getElementById('ip').textContent = ip;
//     } else {
//       document.getElementById('ip').textContent = 'Không tìm thấy IP';
//     }
//   } catch (error) {
//     document.getElementById('ip').textContent = 'Lỗi tra cứu';
//     console.error(error);
//   }
// }

// // Chạy hàm ngay khi mở popup
// analyzeTab();


async function analyzeTab() {
  const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
  const url = new URL(tab.url);
  const domain = url.hostname;

  // (1) & (2) Phân tích Domain/URL
  let domainRisk = "An toàn";
  if (domain.match(/\d+\.\d+\.\d+\.\d+/)) domainRisk = "Sử dụng IP thay tên miền (Rủi ro cao)";
  if (url.href.includes("@")) domainRisk = "URL chứa ký tự gây nhiễu @";
  // Kiểm tra giả mạo gov.vn (như ví dụ trong bài báo [cite: 353])
  if (url.pathname.includes("gov.vn") && !domain.endsWith(".gov.vn")) {
    domainRisk = "Giả mạo cơ quan nhà nước (.gov.vn trong đường dẫn)";
  }

  // Gửi thông tin lên UI
  document.getElementById('domain').textContent = domain;
  
  // (3) SSL/TLS
  const statusDiv = document.getElementById('status');
  statusDiv.textContent = url.protocol === 'https:' ? '✓ HTTPS Bảo mật' : '⚠ HTTP Không an toàn';
  statusDiv.className = url.protocol === 'https:' ? 'secure' : 'insecure';

  // Gọi content script cho các dấu hiệu còn lại (4,5,6,7)
  chrome.tabs.sendMessage(tab.id, {action: "analyze_content"}, (response) => {
    const list = document.getElementById('risk-list');
    list.innerHTML = ""; // Xóa danh sách cũ
    
    const allSigns = [domainRisk, ...(response?.results || [])];
    allSigns.forEach(sign => {
      if (sign !== "An toàn") {
        const li = document.createElement('li');
        li.textContent = sign;
        list.appendChild(li);
      }
    });
  });
}
// Chạy hàm ngay khi mở popup
analyzeTab();
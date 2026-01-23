// Sự kiện xảy ra khi trình duyệt hoàn tất việc tải một trang web
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  // Chỉ kiểm tra khi trang đã tải xong hoàn toàn
  if (changeInfo.status === 'complete' && tab.url) {
    
    const url = new URL(tab.url);

    // Kiểm tra nếu giao thức là HTTP (không an toàn)
    if (url.protocol === 'http:') {
      console.warn(`Cảnh báo bảo mật: Trang web ${url.hostname} đang dùng HTTP!`);

      // Thay đổi màu nền của Badge (thông báo nhỏ trên icon) thành màu đỏ
      chrome.action.setBadgeBackgroundColor({ color: '#FF0000' });
      chrome.action.setBadgeText({ text: '!', tabId: tabId });
      
      // Bạn có thể gửi thông báo (Notification) đến người dùng
      /*
      chrome.notifications.create({
        type: 'basic',
        iconUrl: 'images/icon48.png',
        title: 'Kết nối không an toàn',
        message: `Trang web ${url.hostname} không sử dụng mã hóa HTTPS.`,
        priority: 2
      });
      */
    } else if (url.protocol === 'https:') {
      // Nếu là HTTPS, xóa Badge cảnh báo (nếu có)
      chrome.action.setBadgeText({ text: '', tabId: tabId });
    }
  }
});

// Lắng nghe khi người dùng nhấn vào biểu tượng tiện ích
chrome.action.onClicked.addListener((tab) => {
  console.log('Bạn vừa nhấn vào tiện ích trên trang:', tab.url);
});
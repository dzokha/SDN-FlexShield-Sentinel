# 🛡️ SDN-FlexShield: Sentinel

**Tiện ích trình duyệt phân tích chỉ số nhận diện tấn công giả mạo (Phishing) phía máy khách**

🌐 **Xem tài liệu bằng ngôn ngữ khác:** [🇺🇸 English](README.md)

## 📌 Tổng quan

SDN-FlexShield: Sentinel là một tiện ích trình duyệt mã nguồn mở được thiết kế để nâng cao nhận thức về an ninh mạng cho người dùng cuối. Công cụ này thực hiện phân tích dựa trên các chỉ số rủi ro trực tiếp phía máy khách đối với các trang web đang truy cập.

Tiện ích tập trung vào việc phát hiện sớm rủi ro lừa đảo và đưa ra các cảnh báo bảo mật có thể giải thích được nhằm hỗ trợ hành vi trực tuyến an toàn hơn. Khác với các công cụ sử dụng danh sách đen (blacklist) hoặc các thuật toán đóng, Sentinel nhấn mạnh vào tính minh bạch, khả năng giải thích và quyền riêng tư ngay từ khâu thiết kế (Privacy-by-design).

## 🧠 Tính năng cốt lõi & Khung phát hiện
Sentinel phân tích trang web hiện tại thông qua bộ bảy chỉ số rủi ro kỹ thuật được đúc kết từ các kỹ thuật tấn công lừa đảo phổ biến (tương ứng với khung MITRE ATT&CK TA0001).

### Hệ thống 7 Chỉ số Nhận diện
1. **🌐 Tính toàn vẹn của tên miền (Domain Integrity)**
2. **🔗 Phân tích URL**
3. **🔐 Xác thực SSL/TLS**
4. **📝 Bảo mật biểu mẫu web (Web Form Security)**
5. **🎨 Tính nhất quán của nội dung**
6. **⚡ Hành vi DOM & Script**
7. **💬 Ngôn ngữ thao túng tâm lý (Social Engineering)**

## 🚀 Hướng dẫn cài đặt

### Bước 1: Tải mã nguồn
* Sao chép kho lưu trữ hoặc tải xuống tệp ZIP: `git clone https://github.com/dzokha/SDN-FlexShield-Sentinel.git`
* Sau khi tải về, hãy đảm bảo bạn có thư mục tên là `SDN-FlexShield-Sentinel`.

### Bước 2: Tải lên Chrome
* Mở Google Chrome và truy cập: `chrome://extensions/`
* Bật Chế độ dành cho nhà phát triển (Developer Mode) ở góc trên bên phải.
* Nhấp vào nút Tải tiện ích đã giải nén (Load unpacked) ở góc trên bên trái.
* Chọn thư mục SDN-FlexShield-Sentinel mà bạn vừa tải về.

### Bước 3: Ghim & Sử dụng
* Nhấp vào biểu tượng Tiện ích (🧩) trên thanh công cụ Chrome.
* Ghim SDN-FlexShield: Sentinel để truy cập nhanh.
* Truy cập bất kỳ trang web nào để xem hệ thống phân tích theo thời gian thực.


## 📚 Cơ sở khoa học & Tiêu chuẩn
Dự án này được xây dựng dựa trên các nghiên cứu đã được bình duyệt và các tiêu chuẩn an ninh mạng quốc tế.

### Công bố liên quan
- **Nguyễn Văn Kha, Nguyễn Hoàng Phương, Lê Quyết Thắng**. *“Nâng cao nhận thức an toàn thông tin: Từ nhận diện đến hành động an toàn trong chuyển đổi số.”*

### Tuân thủ tiêu chuẩn
- **NIST SP 800-61:** Các chỉ số xử lý sự cố.
- **MITRE ATT&CK:** [Initial Access (TA0001)] – Phishing.


## 👤 Tác giả & Giấy phép
- **Nguyễn Văn Kha (Dzokha)**
- **Trương Quang Nhật Minh**
- **Nguyễn Hoàng Phương**
- **Lê Quyết Thắng**
**Giấy phép:** Được phân phối theo **Giấy phép MIT.**

---

Trong một thế giới đầy rẫy các mối đe dọa mơ hồ, Sentinel ưu tiên sự minh bạch và hiểu biết. Người dùng được trang bị kiến thức là lớp bảo vệ quan trọng nhất của an ninh mạng hiện đại.
# 🛡️ SDN-FlexShield: Sentinel

**Tiện ích trình duyệt phân tích chỉ số nhận diện tấn công giả mạo (Phishing) phía máy khách**

🌐 **Xem tài liệu bằng ngôn ngữ khác:** [🇺🇸 English](README.md)

## 📌 Tổng quan

**SDN-FlexShield: Sentinel** là một tiện ích trình duyệt mã nguồn mở, được thiết kế nhằm nâng cao nhận thức về an ninh mạng cho người dùng cuối thông qua cơ chế phân tích rủi ro trực tiếp phía máy khách. Hệ thống thực hiện đánh giá các trang web đang truy cập dựa trên tập hợp các chỉ số kỹ thuật và hành vi, không phụ thuộc vào máy chủ trung tâm hay các dịch vụ danh sách đen tập trung.

Tiện ích tập trung vào việc **phát hiện sớm nguy cơ lừa đảo (phishing)** và cung cấp **cảnh báo bảo mật có khả năng giải thích**, từ đó hỗ trợ người dùng đưa ra quyết định trực tuyến an toàn hơn. Khác với các giải pháp dựa trên blacklist hoặc các mô hình học máy dạng “hộp đen”, Sentinel nhấn mạnh vào **tính minh bạch, khả năng diễn giải và bảo vệ quyền riêng tư ngay từ khâu thiết kế (privacy-by-design)**.

---

## 🎯 Mục tiêu & Phạm vi

SDN-FlexShield: Sentinel hướng tới việc cung cấp một công cụ **phân tích rủi ro phishing phía máy khách**, có khả năng giải thích, nhằm hỗ trợ nâng cao nhận thức an ninh mạng cho người dùng cá nhân, sinh viên và nhà nghiên cứu.

Hệ thống được thiết kế để hoạt động **hoàn toàn trong môi trường trình duyệt**, không yêu cầu kiểm tra phía máy chủ, không thu thập dữ liệu người dùng và không phụ thuộc vào các dịch vụ blacklist tập trung.

---

## 🧪 Phương pháp & Cách tiếp cận

Hệ thống áp dụng phương pháp **phân tích tĩnh dựa trên heuristic**, kết hợp nhiều chỉ số kỹ thuật và hành vi để xây dựng **cơ chế chấm điểm rủi ro minh bạch**. Toàn bộ quá trình phân tích và suy luận được thực hiện trực tiếp trong trình duyệt, cho phép người dùng quan sát và hiểu rõ nguyên nhân dẫn đến các cảnh báo bảo mật.

Cách tiếp cận này đặc biệt phù hợp cho các mục tiêu **giáo dục, đào tạo và nghiên cứu trong lĩnh vực an ninh mạng và an ninh web**.

---

## 🧠 Tính năng cốt lõi & Khung phát hiện

SDN-FlexShield: Sentinel phân tích trang web đang truy cập dựa trên **bảy chỉ số nhận diện rủi ro**, được xây dựng từ các kỹ thuật tấn công phishing phổ biến và ánh xạ với giai đoạn **Initial Access (TA0001)** trong khung **MITRE ATT&CK**.

### Hệ thống 7 Chỉ số Nhận diện

1. **🌐 Tính toàn vẹn của tên miền (Domain Integrity)**  
2. **🔗 Phân tích cấu trúc URL**  
3. **🔐 Trạng thái xác thực SSL/TLS**  
4. **📝 Mức độ an toàn của biểu mẫu web (Web Form Security)**  
5. **🎨 Tính nhất quán của nội dung và giao diện**  
6. **⚡ Hành vi DOM và mã kịch bản (Script Behavior)**  
7. **💬 Dấu hiệu ngôn ngữ thao túng tâm lý (Social Engineering Indicators)** 


## 🚀 Hướng dẫn cài đặt

### Bước 1: Tải mã nguồn
* Sao chép kho lưu trữ hoặc tải xuống tệp ZIP: `git clone https://github.com/dzokha/SDN-FlexShield-Sentinel.git`
* Sau khi tải về, hãy đảm bảo bạn có thư mục tên là `SDN-FlexShield-Sentinel`.

### Bước 2: Tải lên Chrome
* Mở Google Chrome và truy cập: `chrome://extensions/`
* Bật **Chế độ dành cho nhà phát triển (Developer Mode)** ở góc trên bên phải.
* Nhấp vào nút **Tải tiện ích đã giải nén (Load unpacked)** ở góc trên bên trái.
* Chọn thư mục `SDN-FlexShield-Sentinel` mà bạn vừa tải về.

### Bước 3: Ghim & Sử dụng
* Nhấp vào biểu tượng Tiện ích (🧩) trên thanh công cụ Chrome.
* Ghim **SDN-FlexShield: Sentinel** để truy cập nhanh.
* Truy cập bất kỳ trang web nào để xem hệ thống phân tích theo thời gian thực.


## 📚 Cơ sở khoa học & Tiêu chuẩn
Dự án này được xây dựng dựa trên các nghiên cứu đã được bình duyệt và các tiêu chuẩn an ninh mạng quốc tế.

### Công bố liên quan
- **Kha Van Nguyen, Phuong Hoang Nguyen, Thang Quyet Le**. *“Cybersecurity awareness: from recognition to safe action in digital transformation.”*

### Tuân thủ tiêu chuẩn
- **NIST SP 800-61:** Các chỉ số xử lý sự cố.
- **MITRE ATT&CK:** [Initial Access (TA0001)] – Phishing.


## 👤 Tác giả

- **Nguyễn Văn Kha (Dzokha)**
- **Trương Quang Nhật Minh**
- **Nguyễn Hoàng Phương**
- **Lê Quyết Thắng**

**Giấy phép:** Được phân phối theo **MIT License.**

---

*Trong bối cảnh các mối đe dọa an ninh mạng ngày càng tinh vi và khó nhận diện, SDN-FlexShield: Sentinel đề cao sự minh bạch và hiểu biết. Người dùng được trang bị kiến thức chính là tuyến phòng thủ quan trọng nhất của an ninh mạng hiện đại.*
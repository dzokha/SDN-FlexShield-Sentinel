# SDN-FlexShield-Sentinel

SDN-FlexShield-Sentinel là một tiện ích trình duyệt (Chrome Extension) phục vụ cho mục đích nghiên cứu, giám sát và hỗ trợ bảo vệ an ninh trong môi trường mạng SDN.

---

## 1. Tải mã nguồn

Tải hoặc clone dự án từ GitHub:

https://github.com/dzokha/SDN-FlexShield-Sentinel

Sau khi tải về, giải nén thư mục dự án với tên: SDN-FlexShield-Sentinel


---

## 2. Cài đặt tiện ích trên Google Chrome

Thực hiện các bước sau để cài đặt tiện ích dưới dạng **Extension không đóng gói**:

### Bước 1: Mở trang quản lý tiện ích
- Mở trình duyệt Google Chrome
- Truy cập địa chỉ: chrome://extensions/


### Bước 2: Bật chế độ nhà phát triển
- Kích hoạt **Developer mode (Chế độ dành cho nhà phát triển)** ở góc trên bên phải

### Bước 3: Tải tiện ích đã giải nén
- Nhấn **Load unpacked (Tải tiện ích đã giải nén)**
- Chọn thư mục: SDN-FlexShield-Sentinel

- Nhấn **Select Folder**

### Bước 4: Ghim tiện ích
- Nhấn vào biểu tượng **Extensions** trên thanh công cụ
- Ghim (**Pin**) tiện ích **SDN-FlexShield-Sentinel** để dễ sử dụng

---


## 3. Kết quả

Sau khi cài đặt thành công, giao diện tiện ích sẽ hiển thị như hình bên dưới:

![Giao diện SDN-FlexShield-Sentinel](images/giaodien.png)


---

## 4. Ghi chú
- Tiện ích hoạt động tốt nhất trên các phiên bản Google Chrome mới
- Phù hợp cho mục đích học tập, nghiên cứu và thử nghiệm các mô hình an ninh SDN

---

## 5. Thông tin dự án
- Tên dự án: **SDN-FlexShield-Sentinel**
- Nền tảng: **Google Chrome Extension**
- Mục tiêu: Nghiên cứu và triển khai giải pháp giám sát, hỗ trợ bảo mật trong SDN


## 🧭 Kiến trúc hệ sinh thái SDN-FlexShield Defender

- **SDN-FlexShield Defender**
  - **SDN-FlexShield-Sentinel** – Plugin giám sát & cảnh báo phía người dùng
  - **SDN-FlexShield-Console** – Ứng dụng Desktop cho SOC & quản trị
  - **SDN-FlexShield-Enforcer** – Module Router / SDN Controller
  - **SDN-FlexShield-Core** – Server / Backend trung tâm
  - **SDN-FlexShield-HoneyCore** – Honeynet & Deception
  - **SDN-FlexShield-AegisAI** – AI Engine phân tích & dự đoán
  - **SDN-FlexShield-Audit** – Forensic, Audit & Compliance
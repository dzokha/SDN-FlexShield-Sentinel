# ARCHITECTURE

**System Architecture of SDN-FlexShield Sentinel**

## Mục tiêu của tài liệu này

Tài liệu này mô tả kiến trúc tổng thể của SDN-FlexShield Sentinel, tập trung vào:

cách hệ thống hoạt động ở phía máy khách (client-side),

cách các chỉ báo an ninh được trích xuất và phân tích,

cách cảnh báo có diễn giải được tạo ra cho người dùng.

📌 Tài liệu này dành cho reviewer, researcher và người có nền tảng kỹ thuật, không dành cho end-user.

## Tổng quan kiến trúc hệ thống

SDN-FlexShield Sentinel được thiết kế theo mô hình client-side, self-contained, trong đó toàn bộ quá trình phân tích và sinh cảnh báo được thực hiện ngay trong trình duyệt của người dùng.

🔹 Các thành phần chính

Browser Extension Core

Indicator Extraction Module

Risk Evaluation & Decision Logic

Explanation & Warning Interface

📌 Không có máy chủ trung tâm tham gia vào quá trình phân tích.

## Sơ đồ kiến trúc tổng thể

(Hình minh họa nên đặt tại đây)

+------------------------+
|      Web Content       |
+-----------+------------+
            |
            v
+------------------------+
| Browser Extension Core |
+-----------+------------+
            |
            v
+-------------------------------+
| Indicator Extraction Module   |
+-----------+-------------------+
            |
            v
+-------------------------------+
| Risk Evaluation & Decision    |
+-----------+-------------------+
            |
            v
+-------------------------------+
| Explanation & Warning UI      |
+-------------------------------+

## Luồng xử lý (Processing Flow)

Người dùng truy cập một trang web.

Sentinel thu thập các thuộc tính quan sát được của trang web.

Các chỉ báo an ninh được trích xuất từ các thuộc tính này.

Hệ thống đánh giá mức độ rủi ro dựa trên logic dựa trên chỉ báo.

Nếu cần, một cảnh báo bảo mật kèm diễn giải được hiển thị cho người dùng.

## Vị trí phân tích client-side

Toàn bộ quá trình sau đều diễn ra trong trình duyệt:

trích xuất chỉ báo,

đánh giá rủi ro,

tạo nội dung diễn giải.

👉 Sentinel không gửi dữ liệu duyệt web ra bên ngoài để phân tích.


## Indicator Extraction Pipeline
🔹 Nguồn dữ liệu chỉ báo

URL và cấu trúc tên miền

Metadata liên quan đến chứng chỉ bảo mật

Các đặc điểm tĩnh có thể quan sát khi tải trang

🔹 Đặc điểm thiết kế

không yêu cầu dữ liệu cá nhân,

không theo dõi hành vi người dùng,

tập trung vào dấu hiệu rủi ro phổ biến.

📌 Danh sách chi tiết được mô tả trong INDICATORS_EXPLAINED.md.

## Decision Logic

Sentinel sử dụng logic ra quyết định dựa trên chỉ báo, thay vì:

mô hình học máy phức tạp,

hoặc danh sách đen tập trung.

🔹 Đặc điểm:

dễ kiểm tra,

dễ diễn giải,

phù hợp cho mục tiêu nâng cao nhận thức.

📌 Mục tiêu là đánh giá rủi ro, không phải phân loại tuyệt đối.

## Cơ chế diễn giải cảnh báo

Mỗi cảnh báo bao gồm:

danh sách các chỉ báo được kích hoạt,

phần giải thích ngắn gọn cho từng chỉ báo,

thông điệp tổng hợp hướng đến người dùng.

👉 Nội dung diễn giải được sinh trực tiếp từ kết quả phân tích chỉ báo.


## Ranh giới quyền riêng tư (Privacy Boundaries)

Thiết kế của Sentinel tuân theo nguyên tắc privacy-by-design:

không thu thập dữ liệu cá nhân,

không gửi dữ liệu duyệt web ra ngoài,

không phụ thuộc vào dịch vụ bên thứ ba.

📌 Mọi xử lý đều diễn ra cục bộ trên thiết bị người dùng.

## Giới hạn kiến trúc

Không xử lý các kịch bản tấn công phức tạp phía máy chủ

Không phân tích nội dung động chuyên sâu

Không thay thế các giải pháp phát hiện tập trung

👉 Sentinel được thiết kế như nguyên mẫu nghiên cứu, không phải hệ thống phòng thủ toàn diện.


## Kết luận

Kiến trúc của SDN-FlexShield Sentinel phản ánh triết lý client-side, explainable, awareness-first security.
Cách tiếp cận này ưu tiên tính minh bạch, quyền riêng tư và khả năng diễn giải, nhằm hỗ trợ người dùng hiểu và đánh giá rủi ro khi duyệt web.
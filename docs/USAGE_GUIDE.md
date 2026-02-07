## USAGE GUIDE

**How to Use and Understand Security Warnings in SDN-FlexShield Sentinel**

## Mục đích của tài liệu này

Tài liệu này hướng dẫn người dùng cách sử dụng SDN-FlexShield Sentinel và quan trọng hơn là cách hiểu và phản ứng với các cảnh báo bảo mật mà hệ thống cung cấp.

Sentinel không chỉ cảnh báo rủi ro, mà còn giúp người dùng học cách nhận diện các dấu hiệu lừa đảo trong quá trình duyệt web.


## Cài đặt tiện ích (Installation)

(Phần này nên ngắn gọn, không chiếm trọng tâm)

Các bước cơ bản:

Tải mã nguồn hoặc tiện ích từ kho lưu trữ chính thức.

Mở trình duyệt và bật chế độ cài đặt tiện ích từ nguồn bên ngoài (Developer mode).

Nạp tiện ích và kích hoạt Sentinel.

👉 Sau khi cài đặt thành công, Sentinel sẽ hoạt động tự động khi người dùng truy cập các trang web.


## Khi nào Sentinel hiển thị cảnh báo?

Sentinel hiển thị cảnh báo khi phát hiện một hoặc nhiều dấu hiệu rủi ro thường xuất hiện trong các cuộc tấn công phishing.

Cảnh báo có thể xuất hiện khi:

truy cập một trang web mới,

nhấp vào liên kết từ email hoặc mạng xã hội,

trang web có đặc điểm bất thường về tên miền hoặc cấu trúc URL.

📌 Cảnh báo không xuất hiện liên tục, mà chỉ khi có dấu hiệu cần người dùng chú ý.



## Cách đọc một cảnh báo bảo mật

Một cảnh báo từ Sentinel thường bao gồm:

Thông báo rủi ro tổng quát
Ví dụ: “Trang web này có một số dấu hiệu thường xuất hiện trong các trang lừa đảo.”

Danh sách các chỉ báo được phát hiện
Ví dụ:

Tên miền mới đăng ký

Tên miền chứa từ khóa thương hiệu

Phần giải thích ngắn gọn cho từng chỉ báo
Giải thích được viết bằng ngôn ngữ dễ hiểu, tránh thuật ngữ kỹ thuật.

👉 Người dùng nên đọc toàn bộ cảnh báo, không chỉ dòng tiêu đề.

## Hiểu ý nghĩa của các chỉ báo

Các chỉ báo không mang ý nghĩa “đúng/sai” tuyệt đối.

Một chỉ báo đơn lẻ → chưa đủ để kết luận

Nhiều chỉ báo cùng lúc → mức độ rủi ro cao hơn

Sentinel cung cấp thông tin để người dùng:

nhận biết rủi ro

tự đánh giá mức độ tin cậy của trang web

📌 Xem thêm: INDICATORS_EXPLAINED.md




## Người dùng nên làm gì sau khi thấy cảnh báo?

Khi nhận được cảnh báo, người dùng được khuyến nghị:

tạm dừng và đọc kỹ nội dung cảnh báo,

kiểm tra lại tên miền và địa chỉ trang web,

tránh nhập thông tin nhạy cảm (mật khẩu, OTP, thông tin cá nhân),

chỉ tiếp tục nếu bạn hiểu rõ và chấp nhận rủi ro.

👉 Sentinel không tự động chặn, mà hỗ trợ ra quyết định có hiểu biết.



## Ví dụ tình huống sử dụng (Usage Scenarios)
🔹 Trường hợp 1: Trang web yêu cầu đăng nhập

Sentinel cảnh báo tên miền mới đăng ký

Người dùng kiểm tra lại nguồn liên kết

Quyết định không đăng nhập và thoát trang

🔹 Trường hợp 2: Trang web quen thuộc nhưng có dấu hiệu bất thường

Tên miền chứa thương hiệu nhưng khác tên chính thức

Người dùng kiểm tra URL

Truy cập trang chính thức thay vì tiếp tục

## Sentinel trong giảng dạy và đào tạo

Sentinel có thể được sử dụng như:

công cụ minh họa trong các buổi học về an ninh mạng,

ví dụ thực tế cho phishing awareness,

nền tảng demo cho nghiên cứu về usable security.

Giảng viên có thể sử dụng các cảnh báo để:

thảo luận tình huống

phân tích hành vi người dùng

đánh giá mức độ nhận thức an ninh mạng


## Giới hạn của hệ thống

Sentinel không phát hiện mọi hình thức phishing

Có thể xảy ra cảnh báo giả

Kẻ tấn công có thể thay đổi chiến thuật

👉 Người dùng không nên phụ thuộc hoàn toàn vào công cụ.


## Kết luận

SDN-FlexShield Sentinel được thiết kế để đồng hành cùng người dùng trong quá trình duyệt web, bằng cách cung cấp các cảnh báo dễ hiểu và mang tính giáo dục.
Việc sử dụng Sentinel đúng cách sẽ giúp người dùng nâng cao nhận thức an ninh mạng và đưa ra quyết định trực tuyến an toàn hơn.

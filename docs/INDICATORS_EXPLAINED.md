# INDICATORS EXPLAINED

*Understanding Security Warnings in SDN-FlexShield Sentinel*

## Mục tiêu của tài liệu này

Tài liệu này giúp người dùng hiểu vì sao một cảnh báo bảo mật được hiển thị, thông qua việc giải thích các chỉ báo an ninh (security indicators) mà hệ thống sử dụng.
Các chỉ báo này không khẳng định một trang web là độc hại, mà phản ánh các dấu hiệu rủi ro thường xuất hiện trong các cuộc tấn công lừa đảo (phishing).

## Cách đọc cảnh báo trong Sentinel

Khi Sentinel hiển thị cảnh báo, người dùng có thể thấy:
* một hoặc nhiều chỉ báo được kích hoạt,
* kèm theo phần giải thích ngắn gọn, dễ hiểu.

👉 Cảnh báo nhằm hỗ trợ ra quyết định, không thay thế đánh giá của người dùng.

## Nguyên tắc thiết kế chỉ báo (Design Principles)

Các chỉ báo trong Sentinel được lựa chọn dựa trên các nguyên tắc sau:
* Dễ hiểu: Có thể giải thích bằng ngôn ngữ phổ thông
* Quan sát được: Gắn với đặc điểm có thể nhận biết khi duyệt web
* Giáo dục: Giúp người dùng học được dấu hiệu lừa đảo phổ biến
* Không xâm phạm quyền riêng tư: Không thu thập dữ liệu cá nhân

## Bảng tổng hợp các chỉ báo an ninh


| Indicator          | Người dùng thấy gì               | Vì sao nguy hiểm                     | Gợi ý cho người dùng                                          |
|--------------------|----------------------------------|--------------------------------------|---------------------------------------------------------------|
| **Domain age**     | Tên miền mới đăng ký.            | Phishing thường dùng domain ngắn hạn | Kiểm tra kỹ nội dung trang và tránh nhập thông tin nhạy cảm   |
| **Brand keyword**  | Tên miền chứa thương hiệu        | Dễ gây nhầm lẫn.                     | So sánh tên miền với trang chính thức của thương hiệu.        |
| **URL length**     | URL quá dài                      | Che giấu đường dẫn thật.             | Chú ý phần tên miền chính và tránh nhấp các liên kết đáng ngờ |

Lưu ý: Một chỉ báo riêng lẻ không đủ để kết luận trang web là lừa đảo.

## Ví dụ minh họa cảnh báo

> ⚠️ Trang web này có một số dấu hiệu thường xuất hiện trong các trang lừa đảo.

Các chỉ báo được phát hiện:

* Tên miền mới đăng ký

* Tên miền chứa từ khóa thương hiệu

👉 Điều này không có nghĩa trang web chắc chắn độc hại, nhưng bạn nên thận trọng trước khi tiếp tục.

## Giá trị nhận thức an ninh mạng

Thông qua việc hiển thị và giải thích các chỉ báo:

Người dùng học cách nhận diện rủi ro

Hiểu rõ chiến thuật phổ biến của phishing

Dần hình thành thói quen kiểm tra trước khi tin tưởng

Sentinel được thiết kế như một công cụ hỗ trợ nhận thức, không phải hệ thống chặn tự động.


## Kết luận

Các chỉ báo an ninh trong SDN-FlexShield Sentinel đóng vai trò như tín hiệu cảnh báo sớm, giúp người dùng hiểu và đánh giá rủi ro khi duyệt web.
Cách tiếp cận này hướng đến việc nâng cao nhận thức an ninh mạng lâu dài, thay vì chỉ dựa vào cơ chế phát hiện tự động.
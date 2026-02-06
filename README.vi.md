# SDN-FlexShield: Sentinel

🌐 Tài liệu này có bản tiếng Anh:
- 🇬🇧 [English](README.md)


II. Phân tích chi tiết theo từng lớp an ninh
1️⃣ Quyền truy cập (Permissions – Chrome Extension)
Hiện tại

Truy cập:

Tab đang hoạt động

URL

Nội dung trang (content script)

✅ Hợp lý cho mục đích phân tích phishing
❌ Nhưng chưa được giải thích rõ với người dùng

2️⃣ Xử lý dữ liệu người dùng (Privacy & Data Protection)
Hiện tại

❌ Không gửi URL/IP về server riêng

❌ Không lưu log

❌ Không tracking người dùng

✅ RẤT TỐT – Privacy-by-Design

🔧 Đề xuất nâng cấp

Privacy Statement ngay trong README

Cam kết:

Không thu thập

Không lưu trữ

Không chia sẻ dữ liệu

📌 Câu tuyên bố mạnh (khuyên dùng):

“SDN-FlexShield: Sentinel performs all analyses locally on the client side and does not collect, store, or transmit any user browsing data.”


3️⃣ Phân tích kỹ thuật (Code Security Review)
🔍 a. URL & Domain Analysis

✅ An toàn:

Không eval

Không parse HTML nguy hiểm

Không inject code

🔧 Có thể bổ sung:

Normalize URL (punycode, IDN)

Detect homograph attacks

📌 Gợi ý thêm kỹ thuật:

IDN Homograph Detection (Unicode → ASCII)

b. DNS Resolution (Google DoH)

✅ Ưu điểm:

Dùng DNS over HTTPS

Không tự xây resolver

⚠️ Rủi ro tiềm ẩn:

Phụ thuộc bên thứ ba (Google DNS)

🔧 Gợi ý nâng cấp:

Cho phép tắt DNS lookup

Hoặc chọn resolver (Google / Cloudflare)

📌 Viết trong README:

“DNS resolution is optional and performed via public DNS-over-HTTPS resolvers.”


c. Message Passing (popup ↔ content script)

✅ An toàn:

Không thực thi dữ liệu nhận được

Chỉ đọc indicator strings

🔧 Nâng cao:

Validate response schema

Whitelist indicator types



4️⃣ Threat Model (rất quan trọng khi công bố mã nguồn)

Anh nên công bố rõ plugin KHÔNG làm gì, tránh hiểu nhầm.

📌 Gợi ý Threat Model (ngắn):

Threat	Status
Data exfiltration	❌ Not performed
User tracking	❌ Not implemented
Remote code execution	❌ Not possible
Server-side logging	❌ Not used
Third-party analytics	❌ None


III. Các chuẩn & kỹ thuật nên bổ sung (để “nâng hạng”)
🔒 1. Chuẩn nên viện dẫn (rất thuyết phục)

Anh KHÔNG cần triển khai đầy đủ, chỉ cần tuân thủ tinh thần:

NIST SP 800-61 – Incident indicators

NIST SP 800-92 – Log & monitoring concepts

ENISA Phishing Detection Guidelines

MITRE ATT&CK (TA0001 – Initial Access)

📌 Ví dụ câu viết:

“The selected indicators are inspired by common phishing techniques described in ENISA reports and MITRE ATT&CK Initial Access tactics.”

🔒 2. Kỹ thuật nên bổ sung vào code (có thể từ từ)
Nhóm	Kỹ thuật
URL	IDN homograph detection
DNS	NXDOMAIN / fast-flux heuristic
Content	Hidden form detection
Risk	Risk score aggregation
UX	Explainable alerts
IV. Cách viết README để người dùng TIN & DÙNG
🧠 Cấu trúc README khuyên dùng
1️⃣ Why this extension exists

Phishing vẫn là nguyên nhân hàng đầu gây sự cố an ninh…

2️⃣ What it does (and does NOT do)

✔️ Client-side analysis

❌ No tracking

❌ No data collection

3️⃣ Security by Design

Least privilege

No remote execution

Open-source transparency

4️⃣ Indicators Explained

Mỗi indicator → giải thích ngắn, có nguồn

5️⃣ Open-source trust

“Security through transparency.”

🔑 Câu “đinh” tạo niềm tin (rất nên dùng)

“SDN-FlexShield: Sentinel is designed with a privacy-first and transparency-driven approach, allowing users and researchers to audit, verify, and extend its security logic.”
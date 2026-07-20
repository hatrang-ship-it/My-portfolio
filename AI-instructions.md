# Yêu cầu Xây dựng Website Portfolio Cầm tay (AI Instructions)

Bạn là một chuyên gia phát triển web (Front-end Developer & UI/UX Designer). Nhiệm vụ của bạn là xây dựng một trang web Portfolio cá nhân dựa trên các thông tin, nội dung và quy tắc thiết kế được cung cấp dưới đây.

---

## 1. Phong cách Thiết kế (Design Style)
* **Design Reference:** Giao diện website phải được thiết kế và tuân thủ nghiêm ngặt theo style của file thiết kế gốc tại đường dẫn sau: `D:\User\Antigravity\My_portfolio\insprite web.jpg`.
* **Mobile-friendly:** Website bắt buộc phải hiển thị tốt và tối ưu trải nghiệm trên các thiết bị di động (Responsive design).
* **Trải nghiệm cuộn (Scrolling Experience):** Bắt buộc tích hợp cuộn mượt (Smooth Scrolling) trên toàn bộ trang (sử dụng CSS `scroll-behavior: smooth` hoặc thư viện cuộn nhẹ phù hợp). Tốc độ cuộn phải được kiểm soát ổn định, đồng đều và tuyệt đối không bị giật/khựng (jank) khi các hiệu ứng animation được kích hoạt (trigger) lúc cuộn trang.
* **Tự động căn chỉnh & Khoảng cách (Spacing & Layout):** * Tuyệt đối không fix cứng kích thước hoặc khoảng cách bằng pixel (`px`) để tránh vỡ giao diện.
  * Bắt buộc sử dụng các hệ thống bố cục hiện đại như CSS Flexbox hoặc CSS Grid, kết hợp với thuộc tính `gap` để các phần tử tự động căn đều khoảng cách một cách thông minh.
  * Khoảng cách (Margin/Padding) giữa các section và các element phải sử dụng hàm `clamp()` hoặc các đơn vị tương đối (`rem`, `vh`, `vw`, `%`) để chúng có thể tự động co giãn tỷ lệ thuận, tạo ra khoảng trống (white-space) thoáng mắt và hợp lý trên mọi kích thước màn hình (từ Mobile đến màn hình rộng).
## 2. Quy tắc Phát triển Toàn cục (Global Rules)
* **Animation:** Mọi section trên website đều phải có hiệu ứng chuyển động (animation) mượt mà khi người dùng cuộn trang (scroll).
* **Kiểm soát chất lượng:** Sau mỗi thay đổi lớn, tự động chụp screenshot và so sánh đối chiếu với design gốc để đảm bảo tính nhất quán.

## 3. Quy tắc Hiển thị Từng Thành phần (Component Rules)

### 3.1. Phần Dự Án (Projects)
* **Nguồn dữ liệu:** Nội dung chi tiết của dự án nằm trong phần `content` tại mỗi file `.md` tương ứng.
* **Giao diện chính (UI):** Chỉ thiết kế các thẻ (card) dự án nhỏ gọn. Mỗi thẻ chỉ hiển thị 3 thông tin chính: 
  1. Ảnh minh họa (lấy `src` từ file nội dung).
  2. Tên dự án.
  3. Công cụ / Công nghệ sử dụng.
* **Tương tác (UX):** Tạo hiệu ứng khi người dùng click vào thẻ dự án. Giao diện sẽ mở ra một Modal (hộp thoại nổi) hoặc một section mở rộng (Accordion/Expand) để hiển thị toàn bộ nội dung chi tiết của dự án đó.

### 3.2. Phần Chứng chỉ và Giải thưởng (Certificates & Awards)
* **Nguồn dữ liệu:** Cấu trúc và nội dung nằm trong file `.md` ở phần `content`.
* **Phân bố:** Bắt buộc tách làm 2 phần riêng biệt theo thứ tự: **Chứng chỉ** hiển thị trước, sau đó mới đến **Giải thưởng**.
* **Giao diện chính (UI):** Hiển thị theo dạng biểu đồ xương cá (Fishbone timeline/diagram). Mỗi mục chỉ hiện Tên và Thời gian.
* **Tương tác (UX):** Khi người dùng di chuột (hover) vào một mục, sẽ hiện ra hình ảnh minh họa (nếu có) và đường link dẫn đến bài minh chứng (nếu có).

---

## 4. Nội dung Website (Website Content)

Dưới đây là toàn bộ thông tin nội dung cần đưa vào Portfolio:

### Thông tin hồ sơ (Profile)
* **Tên:** LÊ HÀ TRANG
* **Địa chỉ:** Bình Minh - Thanh Oai - Hà Nội
* **Số điện thoại:** 0337057530
* **Email:** lehatrang21102004@gmail.com
* **Github:** hatrang-ship-it

### Giới thiệu bản thân (About Me)
Em là một người ham học hỏi, có trách nhiệm trong công việc và đam mê phân tích dữ liệu đặc biệt trong lĩnh vực tài chính. Qua các môn học trên trường, em có kinh nghiệm phân tích báo cáo tài chính và có nền tảng tốt về phân tích và trực quan hóa dữ liệu, xây dựng mô hình học máy, học sâu. Em luôn sẵn sàng đón nhận những thử thách mới để không ngừng trau dồi chuyên môn thông qua các dự án thực tế và đóng góp trực tiếp vào sự phát triển của doanh nghiệp.

### Học vấn (Education)
* **Trường:** Quốc Tế - ĐHQG Hà Nội (VNU-IS) (2022 - 2026)
* **Ngành:** Phân tích dữ liệu kinh doanh chuyên sâu tài chính
* **GPA tích lũy:** 3.66/4.

### Kỹ năng (Skills)
* **Kỹ năng mềm:** Thuyết trình, làm việc nhóm, quản lý thời gian.
* **Ngoại ngữ:** Giao tiếp tiếng Anh ở mức cơ bản, đọc hiểu tài liệu tiếng Anh tốt.
* **Lập trình:** Sử dụng thành thạo Python, SQL, R.
* **Công cụ phân tích:** Sử dụng được Tableau và Power BI.

### Kinh nghiệm làm việc (Experience)

**1. Công ty TNHH Đầu tư và Phát triển FINTOP**
* **Vị trí:** Thực tập sinh phân tích đầu tư
* **Thời gian:** Tháng 12/2025 - tháng 3/2026
* **Mô tả công việc:**
  * Sử dụng phân tích TA để đánh giá và lọc các cổ phiếu tiềm năng.
  * Làm báo cáo phân tích cơ bản và kỹ thuật một doanh nghiệp. [Link sản phẩm](https://docs.google.com/document/d/1iCmM-dSSmOnjXOBiFnhH1BcVNieru00kzaTlZndlfkE/edit?usp=sharing)
  * Triển khai làm kênh phân tích đầu tư: đạt được 21 người đăng ký trong vòng một tháng. [Link sản phẩm](https://www.youtube.com/@TLinvest-tl21)

**2. Công ty Cổ phần Chứng khoán SSI**
* **Vị trí:** Thực tập sinh phân tích dữ liệu và nghiên cứu sản phẩm
* **Thời gian:** Tháng 4/2026 - tháng 5/2026
* **Mô tả công việc:**
  * Nghiên cứu và phát triển chatbot về mô hình kinh doanh của doanh nghiệp. [Link sản phẩm](https://fpt-ai-chat-client.pages.dev/)
# Exploring Perceived Value in Vietnamese Tourism: A BERTopic & PLS-SEM Approach

Kho lưu trữ này chứa mã nguồn và kết quả nghiên cứu về tác động của các khía cạnh "Giá trị cảm nhận" (Perceived Value) đối với sự hài lòng và ý định quay lại của du khách tại các điểm đến ở Việt Nam. Dự án áp dụng phương pháp tiếp cận dữ liệu lớn thông qua khai phá văn bản (Text Mining) và mô hình hóa cấu trúc tuyến tính (SEM).

## 📝 Tóm tắt dự án

Nghiên cứu đánh giá tác động của 4 khía cạnh giá trị cảm nhận: **Giá trị chức năng (Functional)**, **Giá trị trải nghiệm/cảm xúc (Hedonic)**, **Giá trị nhận thức (Epistemic)**, và **Giá trị quan hệ xã hội (Social Relationship)**.

**Điểm nhấn phương pháp luận:**

* **Thu thập dữ liệu:** Sử dụng `Selenium` để tự động khai thác hơn 1300 địa điểm (68.503 dữ liệu thô) từ TripAdvisor và Google Maps.
* **Xử lý dữ liệu:** Sử dụng `BERTopic` để tự động trích xuất 13 chủ đề trải nghiệm từ các đoạn văn bản (clauses).
* **Phân tích mô hình:** Sử dụng `PLS-SEM` (SmartPLS) để kiểm định các giả thuyết về mối quan hệ nhân quả.
* **Kết quả:** Giá trị trải nghiệm (Hedonic) là yếu tố tác động mạnh nhất đến sự hài lòng và ý định quay lại của du khách.

## 🛠 Công nghệ & Công cụ

* **Ngôn ngữ:** Python
* **Khai thác dữ liệu:** `Selenium`, `Pandas`
* **Xử lý ngôn ngữ tự nhiên (NLP):**
* `BERTopic`: Phân cụm chủ đề.
* `RoBERTa`: Phân tích sắc thái (Sentiment Analysis).
* `Helsinki-NLP`: Dịch thuật đa ngôn ngữ.
* `Large Language Model (LLM)`: Đánh giá điểm hài lòng.


* **Phân tích định lượng:** `SmartPLS` (PLS-SEM).

## 📊 Mô hình nghiên cứu
.assets\projects\Exploring Perceived Value in Vietnamese Tourism A BERTopic & PLS-SEM Approach\hinh1.png
Mô hình kiểm định 13 giả thuyết về tác động trực tiếp và gián tiếp (qua vai trò trung gian của sự hài lòng)
## 📈 Kết quả chính

* **Mô hình có tính giải thích cao:** $R^2 = 0.874$ đối với cả sự hài lòng và ý định quay lại.
* **Tầm quan trọng của cảm xúc:** Giá trị trải nghiệm (Hedonic) giữ vai trò chủ đạo, củng cố tầm quan trọng của trải nghiệm trong du lịch Việt Nam.
* **Vai trò trung gian:** Sự hài lòng là cầu nối quan trọng chuyển hóa các giá trị cảm nhận thành hành vi quay lại (revisit intention).
Link github: https://github.com/hatrang-ship-it/Exploring-Perceived-Value-in-Vietnamese-Tourism-A-BERTopic-PLS-SEM-Approach
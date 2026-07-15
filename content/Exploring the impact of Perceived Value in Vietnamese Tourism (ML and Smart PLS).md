## 📄 Tên dự án

**Exploring the Impact of Perceived Value on Tourists’ Intention to Return to Vietnamese Tourist Destinations: A Big Data Mining and Linear Structural Modeling Approach**

## 📝 Tóm tắt dự án

Trong bối cảnh ngành du lịch Việt Nam hậu đại dịch cạnh tranh gay gắt, việc giữ chân du khách là yếu tố sống còn. Nghiên cứu này khám phá tác động của bốn chiều giá trị cảm nhận (Chức năng, Cảm xúc, Tri thức, Xã hội) đến ý định quay lại của du khách thông qua dữ liệu đánh giá trực tuyến (TripAdvisor và Google Maps). Kết quả cho thấy các yếu tố giá trị cảm nhận giải thích tới **65.6%** sự biến động của ý định quay lại, trong đó **Giá trị cảm xúc (Hedonic value)** là nhân tố quan trọng nhất. Nghiên cứu cung cấp cơ sở thực nghiệm giúp các nhà quản trị tối ưu hóa trải nghiệm du khách và xây dựng chiến lược giữ chân khách hiệu quả hơn.

## 🛠 Công nghệ và công cụ

* **Thu thập dữ liệu:** Python (Selenium, Pandas) để cào dữ liệu từ TripAdvisor và Google Maps.
* **Tiền xử lý:** Helsinki-NLP (dịch máy đa ngôn ngữ), tách câu tự động.
* **Khai phá dữ liệu:**
* **LDA (Latent Dirichlet Allocation):** Trích xuất chủ đề ẩn từ văn bản.
* **Logistic Regression:** Phân loại chủ đề cho các mệnh đề đánh giá.


* **Phân tích cảm xúc:** **RoBERTa** (Transformer-based model) để chấm điểm cảm xúc.
* **Phân tích mô hình:** **SmartPLS (PLS-SEM)** để kiểm định giả thuyết và mô hình cấu trúc.

## 📊 Mô hình nghiên cứu

.assets\projects\Exploring the impact of Perceived Value in Vietnamese Tourism ML and Smart PLS\hinh1.jpg 
Nghiên cứu xây dựng mô hình dựa trên bốn chiều giá trị cảm nhận (biến độc lập) tác động đến ý định quay lại (biến phụ thuộc):

1. **Giá trị chức năng (Functional Value):** Chi phí, chất lượng dịch vụ, môi trường.
2. **Giá trị cảm xúc (Hedonic Value):** Sự vui thích, thư giãn, trải nghiệm đáng nhớ.
3. **Giá trị tri thức (Epistemic Value):** Học hỏi, khám phá văn hóa, di sản.
4. **Giá trị quan hệ xã hội (Social Relationship Value):** Sự kết nối và cảm nhận về mật độ đông đúc (Tourist Crowding).

## 💡 Kết quả chính

* **Khả năng giải thích:** Mô hình đạt $R^{2} = 0.656$, chứng tỏ mức độ giải thích tốt đối với ý định quay lại của du khách.
* **Xếp hạng tác động:**
1. **Giá trị cảm xúc (Hedonic value):** $\beta = 0.352$ (Tác động mạnh nhất).
2. **Giá trị chức năng (Functional value):** $\beta = 0.332$.
3. **Giá trị quan hệ xã hội (Social relationship value):** $\beta = 0.154$.
4. **Giá trị tri thức (Epistemic value):** $\beta = 0.104$.


* **Hàm ý quản trị:** Cần ưu tiên nâng cao các hoạt động giàu tính trải nghiệm cảm xúc (lễ hội, du lịch đêm) song song với việc kiểm soát mật độ du khách và cải thiện chất lượng hạ tầng cơ bản để nâng cao sức cạnh tranh.
Link git của dự án:https://github.com/hatrang-ship-it/The-Impact-of-Perceived-Value-on-Tourists-Intention-to-Vietnamese-Tourist-Destinations-LDA-and-ML/tree/main
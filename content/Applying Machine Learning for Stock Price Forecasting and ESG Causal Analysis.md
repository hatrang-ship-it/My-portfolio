# Applying Machine Learning for Stock Price Forecasting and ESG Causal Analysis

Đây là toàn bộ dự án nghiên cứu về ứng dụng các thuật toán Machine Learning để dự báo giá cổ phiếu hàng ngày và sử dụng kỹ thuật Double Machine Learning (DML) để phân tích tác động nhân quả của các yếu tố ESG (Môi trường, Xã hội, Quản trị) đến lợi nhuận doanh nghiệp. Dữ liệu dùng trong dự án được lấy từ [ESG and Financial Performance Dataset](https://www.kaggle.com/datasets/shriyashjagtap/esg-and-financial-performance-dataset)

## 📝 Tóm tắt dự án

Nghiên cứu này tập trung vào hai mục tiêu chính:

1. **Dự báo giá cổ phiếu:** So sánh hiệu suất của các mô hình Machine Learning (Linear Regression, Ridge, Random Forest, Gradient Boosting, XGBoost) trong việc dự báo giá đóng cửa đã điều chỉnh.
2. **Phân tích nhân quả (Causal Inference):** Sử dụng Double Machine Learning (DML) để làm sáng tỏ mối quan hệ giữa các chỉ số ESG/Rủi ro ESG và lợi nhuận của doanh nghiệp (hàng tháng/hàng năm).

**Kết quả chính:**

* Các mô hình **Linear/Ridge Regression** cho thấy hiệu suất dự báo ổn định nhất ($R^2 \approx 0.999$).
* Dữ liệu lịch sử giá (đặc biệt là giá trễ và đường trung bình động - MA) đóng vai trò chủ đạo trong dự báo ngắn hạn, trong khi các yếu tố ESG có đóng góp không đáng kể trong khung dự báo giá hàng ngày.
* Tuy nhiên, các yếu tố ESG có tác động đáng kể đến **lợi nhuận dài hạn** của doanh nghiệp.

## 🛠 Công nghệ sử dụng

* **Ngôn ngữ:** Python
* **Nền tảng:** Google Colab
* **Thư viện chính:**
* `scikit-learn`: Triển khai các mô hình Linear, Ridge, Random Forest, Gradient Boosting.
* `xgboost`: Triển khai XGBoost.
* `shap`: Giải thích tầm quan trọng của các tính năng (Feature Importance).
* `DoubleML`: Thực hiện phân tích nhân quả.



## 📂 Cấu trúc dự án

```text
├── data/               # Dữ liệu tài chính & ESG (cần cấu hình)
├── models/             # Script huấn luyện và đánh giá mô hình
├── notebooks/          # Các file Jupyter Notebook (quy trình EDA, Modeling, Causal Inference)
├── README.md           # Tài liệu dự án
└── requirements.txt    # Các thư viện phụ thuộc

```

## 📊 Kết quả đánh giá mô hình (Tập kiểm thử)

| Mô hình | MAE | MSE | $R^2$ |
| --- | --- | --- | --- |
| Linear Regression | 1.93 | 15.46 | 0.9993 |
| Ridge Regression | 1.93 | 15.46 | 0.9993 |
| Random Forest | 6.27 | 583.35 | 0.9718 |
| Gradient Boosting | 6.09 | 528.93 | 0.9745 |
| XGBoost | 19.21 | 10781.21 | 0.4794 |

## Đánh giá tác động ESG và Nghiên cứu nhân quả

Nghiên cứu này phân tích sự tích hợp của điểm số và rủi ro ESG vào các mô hình dự báo giá cổ phiếu, đồng thời sử dụng phương pháp nhân quả để đánh giá tác động của ESG đến lợi nhuận doanh nghiệp.

### Dự báo giá cổ phiếu


* **Yếu tố tác động:** Sử dụng SHAP cho thấy giá cổ phiếu dự báo chủ yếu bị chi phối bởi dữ liệu giá trong quá khứ (đặc biệt là giá trễ 1 ngày và đường trung bình trượt). Các biến số ESG chỉ đóng góp rất nhỏ vào khả năng dự báo giá ngắn hạn.



### Nghiên cứu nhân quả (Causal Inference)

Sử dụng phương pháp **Double Machine Learning (DML)** để xử lý vấn đề nội sinh, nghiên cứu đã rút ra các kết luận về mối quan hệ nhân quả giữa ESG và lợi nhuận:

* **Tác động của ESG Risk:**
* **Môi trường (E):** Rủi ro môi trường cao có xu hướng tạo ra lợi nhuận cao hơn (lợi nhuận bù đắp cho rủi ro).
* **Xã hội (S):** Rủi ro xã hội có tác động tiêu cực rõ rệt đến hiệu quả kinh doanh.
* **Quản trị (G):** Rủi ro quản trị có tác động tiêu cực nhưng không đáng kể.

* **Tác động của ESG Score:**
* Cải thiện điểm số ở cả 3 trụ cột (E, S, G) đều dẫn đến sự gia tăng trực tiếp trong lợi nhuận trung bình của doanh nghiệp.
* **Ngắn hạn (Tháng):** Điểm quản trị (G) có ảnh hưởng mạnh nhất do thị trường phản ứng nhanh với các thay đổi về quyền lực cổ đông.
* **Dài hạn (Năm):** Điểm môi trường (E) và xã hội (S) thể hiện tác động lớn hơn và rõ rệt hơn, cho thấy các chiến lược phát triển bền vững cần thời gian để tạo ra giá trị kinh tế cụ thể.


### Kết luận chung

* Các chỉ số ESG **không phù hợp** để dự báo giá cổ phiếu hàng ngày (ngắn hạn) vì giá cổ phiếu ngắn hạn bị chi phối mạnh bởi các biến kỹ thuật.


* ESG có tác động **đáng kể và tích cực đến lợi nhuận dài hạn** (lợi nhuận tháng/năm), là yếu tố then chốt cho các quyết định đầu tư bền vững.


## 🌐 Demo

Bạn có thể trải nghiệm thử các mô hình tại đây: [Stock Prediction Demo - Hugging Face Space](https://www.google.com/search?q=https://huggingface.co/spaces/changle-2110/Stock-Prediction-Demo)
Đây là link github của dự án: https://github.com/hatrang-ship-it/Applying-Machine-Learning-Algorithms-to-Stock-Price-and-Causal-Analysis-of-ESG-Effects-on-Returns/tree/main

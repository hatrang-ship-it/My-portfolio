**Tên chủ đề báo cáo:** Phân tích dữ liệu bán hàng của một doanh nghiệp thương mại Điện tử tại Anh: Phân khúc Khách hàng và Hành vi Bán hàng.
Link chi tiết dự án: https://drive.google.com/drive/folders/1t6YxPKomd0TtmaGytKWNL0yl_QtDrmCU?usp=drive_link
# **I. Tổng quan**

**Bối cảnh dữ liệu :** Các tập dữ liệu thương mại điện tử thường thuộc quyền sở hữu nội bộ của doanh nghiệp và rất khó để tiếp cận trên các nền tảng công cộng. Vậy nên trong bài phân tích này tôi sử dụng sử dụng tập dữ liệu **"Online Retail"** do Kho lưu trữ Học máy UCI (UCI Machine Learning Repository) cung cấp để làm 1 case phân tích. Đây là một tập dữ liệu giao dịch xuyên quốc gia, ghi nhận toàn bộ các đơn hàng thực tế diễn ra từ ngày **01/12/2010 đến 09/12/2011** của một công ty bán lẻ trực tuyến chuyên cung cấp các sản phẩm quà tặng độc đáo cho mọi dịp, với tệp khách hàng chủ yếu là các nhà bán buôn, không có cửa hàng vật lý có trụ sở tại Vương quốc Anh.  
Link dữ liệu gốc: [E-Commerce Data](https://www.kaggle.com/datasets/carrie1/ecommerce-data)   
**Mục tiêu thực hiện:** Dự án này được thực hiện với mục đích chính là **thực hành sử dụng công cụ Tableau**. Thông qua việc thao tác với dữ liệu thực tế, bài viết hướng đến việc rèn luyện kỹ năng trực quan hóa dữ liệu và trích xuất insights về hành vi khách hàng, từ đó đưa ra những chiến lược phát triển hợp lý.  
**Các bước chuẩn bị dữ liệu:** Để đảm bảo tính chính xác và hiệu quả cho các biểu đồ, dữ liệu thô đã trải qua bước tiền xử lý cẩn thận. Cụ thể, toàn bộ dữ liệu đã được làm sạch, chuẩn hóa và định dạng lại về cấu trúc chuẩn bằng **Excel** trước khi được đưa vào Tableau để xây dựng hệ thống dashboard phân tích.

# **II. Phân tích** 

# **1\. Đặc điểm khách hàng**

Tôi **phân tích hành vi mua sắm của khách hàng dựa trên ba chỉ số cốt lõi của mô hình RFM \- Recency (thời gian kể từ lần gần nhất mua hàng của khách hàng tính từ ngày quan sát cuối cùng của bộ dữ liệu), Frequency (tần suất mua hàng của khách hàng), Monetary (giá trị chi tiêu trung bình của khách hàng).**  
.assets\projects\Unpacking UK E-commerce\hinh1.jpg  
Chi tiêu trung bình của khách hàng ở mức $1,685 cho thấy mỗi khách hàng trung bình mang lại một mức doanh thu tương đối ổn định và giá trị cho doanh nghiệp. Về trung bình thời gian kể từ lần gần nhất mua hàng, chỉ số đang ở mức 178 ngày vào khoảng 6 tháng. Đồng thời, tần suất mua hàng trung bình của khách hàng là 3 lần, điều này cho thấy khách hàng có xu hướng mua hàng khá là thưa và thời gian đặt hàng thường cách nhau khá dài nhưng mức chi tiêu lại ổn định và giá trị. Đặc điểm này đến từ việc khách hàng là những người bán buôn nên mỗi lần họ đặt hàng có thể mua 1 đơn với giá trị lớn nhưng cần thời gian nhất định để bán sản phẩm. Dựa vào 3 chỉ số trên, tôi phân loại khách hàng từ lịch sử mua hàng của họ.  
.assets\projects\Unpacking UK E-commerce\hinh2.jpg  
Từ biểu đồ trên, ta có thể thấy khách hàng được phân cụm rõ rành thành 3 nhóm với các đặc điểm như sau.

- Cụm 1: nhóm khách hàng tích cực và trung thành. Nhóm này có thời gian mua hàng gần đây nhất (dưới 3 tháng), tần suất mua hàng vượt trội hơn hẳn các nhóm còn lại (khá nhiều khách hàng có tần suất mua hàng trên 20 lần) và mang lại doanh thu lớn nhất trong cả 3 cụm (xuất hiện những khách hàng có tổng giá trị các đơn hàng lên đến $200,000).  
- Cụm 3: nhóm khách hàng có nguy cơ rời bỏ. Nhóm khách hàng này đã đặt đơn hàng cuối cùng cách ngày quan sát cuối cùng từ nửa năm đến 1 năm, tần suất mua hàng thường ở dưới 10 lần với giá trị tổng giao dịch của họ ở mức thấp.  
- Cụm 2: nhóm khách hàng đã rời bỏ. Đây là nhóm khách hàng đã hơn 1 năm (xấp xỉ trên 350 ngày) không phát sinh thêm đơn hàng nào. Tần suất mua hàng và tổng giá trị chi tiêu của họ cũng ở gần như chạm đáy. Khả năng quay lại của nhóm này rất thấp.

Và phần cuối cùng của việc xác định chân dung khách hàng là xác định mật độ khách hàng theo từng khu vực.  
.assets\projects\Unpacking UK E-commerce\hinh3.jpg  
.assets\projects\Unpacking UK E-commerce\hinh4.jpg  
Qua bản đồ nhiệt trên, ta có thể thấy khách hàng của doanh nghiệp chủ yếu là ở Châu Âu đặc biệt từ Tây Âu, nguyên nhân đến từ việc đây là một doanh nghiệp có trụ sở tại nước Anh. Nhưng bên cạnh đó, doanh nghiệp vẫn có khách hàng ở những khu vực khác trong đó nổi bật nhất là châu Á và Úc, các khu vực còn lại có số lượng khá ít.

## **2\. Hành vi mua hàng**

**Tiếp theo, tôi phân tích hành vi mua sắm của khách hàng theo thời gian** để nắm được mùa bán hàng cao điểm của doanh nghiệp, từ đó đưa ra được các chương trình khuyến mại, kích thích mua sắm hợp lý.  
.assets\projects\Unpacking UK E-commerce\hinh5.jpg  
Ta có thể thấy trong 3 quý đầu của năm 2010, biểu đồ cho thấy doanh số duy trì ở mức thấp khoảng dưới $100,000. Đến quý 4/2010, doanh thu bắt đầu tăng trưởng mạnh và sự tăng trưởng này kéo dài đến hết quý 3 năm 2010 từ $400,000 đến $2,500,000. Quý 4 năm 2011 chứng kiến 1 sự sụt giảm nhẹ xuống con khoản $2,350,000, điều này đến từ đặc điểm của dữ liệu khi dữ liệu chỉ ghi nhận đến đầu tháng 12 \-9/12/2011, khiến cho doanh thu quý này sụt giảm nhẹ so với các quý trước. Về doanh số theo tháng, chúng ta có thể thấy kể từ tháng 11 năm 2010, doanh thu các tháng tuy tăng nhưng không đồng đều. Doanh thu của doanh nghiệp thường tăng vào các tháng trước các dịp lễ quan trọng như tháng 11, 12, 1,3,5,7,9. Nguyên nhân của quy luật này là tệp khách hàng chủ yếu của công ty này là các nhà bán buôn (wholesalers) và mặt hàng kinh doanh là "quà tặng" (gifts), các nhà bán buôn thường phải nhập hàng trước các dịp lễ thực tế của người tiêu dùng từ 1 đến 2 tháng để kịp phân phối đến các cửa hàng bán lẻ. Ví dụ như tháng 12 có ngày lễ Giáng Sinh (27/12) là một ngày lễ rất quan trọng ở châu Âu và được hưởng ứng trên toàn thế giới, doanh số tăng vọt vào tháng 11 vì các nhà bán buôn (wholesalers) dồn lực nhập hàng quà tặng và đồ trang trí để chuẩn bị cho đợt mua sắm Giáng Sinh của người tiêu dùng vào tháng 12 và thậm chí có thể là tiếp tục nhập hàng trong tháng 12 nếu nhu cầu tăng cao. Hay như sự tăng doanh số của tháng 3 có thể giải thích bằng việc cuối tháng 3 đầu tháng 4 có 2 ngày lễ lớn là ngày của mẹ tại Anh và Lễ Phục Sinh khi mà nhu cầu tìm kiếm các món quà tặng ý nghĩa và độc đáo rất lớn đến từ thị trường.  
Tiếp theo, tôi phân tích sâu hơn về sản phẩm khách hàng mua để xác định sản phẩm nào là bán chạy nhất và các sản phẩm nào thường được mua theo cặp  
.assets\projects\Unpacking UK E-commerce\hinh6.jpg  
Đây là top 5 sản phẩm có doanh thu cao nhất của doanh nghiệp. Trong đó 3 sản phẩm bán chạy nhất là các sản phẩm dùng trong trang trí tiệc như giá để bánh, dây cờ trang trí tiệc. Hai sản phẩm còn lại mang thiên hướng quà tặng nhiều hơn.   
.assets\projects\Unpacking UK E-commerce\hinh7.jpg  
Tiếp theo tôi phân tích khách hàng thường mua các sản phẩm nào cùng với nhau với top 10 sản phẩm bán chạy nhất. Trong đó cặp sản phẩm thường được bán với nhau thường có cùng mục đích sử dụng. Ví dụ như túi đựng hộp cơm trưa mua đỏ phong cách retro và túi đựng hộp cơm trưa cho SUKI thiết kế với Lift (độ nâng dùng để đo lường mức độ liên kết hoặc tỷ lệ mua kèm giữa hai sản phẩm) bằng 6.474, cặp sản phẩm túi đựng và túi xách cỡ lớn màu đỏ retro thường được dùng để phục vụ cho việc tặng quà có lift bằng 3.541 hay như cặp sản phẩm vỏ bánh cupcake và cốc đựng bắp rang bơ có lift bằng 3.357 là sản phẩm đựng thực phẩm. Từ kết quả này, doanh nghiệp có thể đề xuất chương trình khuyến mại hoặc combo để đẩy doanh số.

## **3\. Tìm kiếm thị trường tiềm năng để mở rộng.**

Theo kết quả phân tích trên, chúng ta có thể thấy thị trường chính của doanh nghiệp là ở châu Âu, nhưng liệu khi doanh nghiệp muốn mở rộng quy mô thì họ có thể phát triển từ các khu vực nào khác không? Phần này sẽ trả lời cho câu hỏi đó.  
.assets\projects\Unpacking UK E-commerce\hinh8.jpg  
.assets\projects\Unpacking UK E-commerce\hinh9.jpg  
Khi xét về số lượng khách hàng, top 5 đất nước có nhiều khách hàng nhất là các nước ở khu vực Tây Âu (Anh, Đức, Pháp, Ireland và Tây Ban Nha), đây cũng là thị trường chủ lực của doanh nghiệp.  
.assets\projects\Unpacking UK E-commerce\hinh10.jpg  
.assets\projects\Unpacking UK E-commerce\hinh11.jpg  
Khi xét về giá trị trung bình của mỗi đơn hàng, chúng ta có thể thấy thị trường không chỉ giới hạn ở các nước Tây Âu nữa. Nước có giá trị trung bình mỗi đơn hàng lớn nhất là Hà  Lan vẫn là một nước Tây Âu nhưng xếp thứ 2, 3 và 5 là Úc, Singapore và Nhật Bản, 3 nước ở khu vực châu Á \- Thái Bình Dương. Điều này cho sản phẩm của doanh nghiệp vẫn được các nhà bán buôn ở khu vực này đón nhận bất chấp thách thức địa lý và chi phí vận chuyển.  
.assets\projects\Unpacking UK E-commerce\hinh12.jpg  
Khi xét về tỷ lệ khách hàng tích cực và trung thành, ta có thể thấy ngoại trừ Tây ÂU vốn là thị trường chủ lực của doanh nghiệp thì tỷ lệ ở Úc, Nhật Bản, Mỹ và Canada cũng rất đáng cân nhắc. Trong đó Úc là thị trường tiềm năng nhất khi mà vừa có tỷ lệ khách hàng trung thành và trung bình doanh thu cao thứ 2\.

# **III. Kết luận và Đề xuất**

Từ những phân tích trên ta có thể rút ra một số kết luận và đề xuất như sau:

- Tệp khách hàng chính của doanh nghiệp là những người bán buôn nên việc giá cả hợp lý và chất lượng ổn định là một trong những tiên quyết để giữ chân khách hàng. Vì sản phẩm của doanh nghiệp là quà tặng và đồ trang trí nên cần phải có sự chuẩn bị kịp thời và những chương trình bán hàng hợp lý vào các tháng trước những dịp lễ lớn để có thể kịp thời bán cho các nhà bán buôn và không bỏ lỡ cơ hội.  
- Nhóm đồ trang trí tiệc và quà tặng là dòng sản phẩm cốt lõi mang lại doanh thu cao nhất. Khách hàng có xu hướng mua hàng theo "bộ sưu tập" hoặc cùng công năng sử dụng, minh chứng bằng chỉ số Lift rất cao (từ 3.357 đến 6.474) ở các nhóm đồ đựng thực phẩm hoặc túi quà tặng. Doanh nghiệp có thể tạo ra các gói combo sỉ để tăng doanh số bán hàng.  
- Bên cạnh thị trường chính ở các nước Tây Âu, Úc và Nhật Bản cũng là những thị trường tiềm năng để mở rộng. Cần thiết lập các chính sách hỗ trợ chi phí logistics linh hoạt hoặc tìm kiếm kho bãi trung chuyển tại khu vực này để củng cố tỷ lệ khách hàng trung thành và tối đa lợi nhuận.
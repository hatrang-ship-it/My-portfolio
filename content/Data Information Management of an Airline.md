Thời gian: Tháng 7 năm 2024
#Quản lý thông tin dữ liệu của một hãng hàng không#
# Introduction

# **Mục tiêu:** Xây dựng một hệ thống cơ sở dữ liệu (CSDL) mạnh mẽ cho một hãng hàng không giả tưởng nhằm tối ưu hóa quản lý các hoạt động như khách hàng, thông tin vé, nhân viên, lộ trình bay, bảo trì, v.v.

# **Lợi ích:** Việc đầu tư vào hệ thống CSDL quan hệ hiện đại không chỉ giúp cải thiện hiệu quả vận hành, nâng cao chất lượng dịch vụ khách hàng, quản lý tài chính và đảm bảo an toàn, mà còn là chiến lược dài hạn để Vietjet duy trì lợi thế cạnh tranh và phát triển bền vững.

**Dữ liệu:** Dữ liệu của chúng tôi là dữ liệu giả tưởng nhằm kiểm tra xem hệ thống có hoạt động như mong muốn không. 

### **Business Description**

**2.1 Bối cảnh kinh doanh:** 

# Vietjet Air là hãng hàng không giá rẻ quốc tế hàng đầu tại Việt Nam, áp dụng mô hình hàng không giá rẻ (LCC) kết hợp chất lượng dịch vụ cao và công nghệ hiện đại. Hãng tối ưu hóa chi phí bằng cách sử dụng một loại máy bay duy nhất, cắt giảm các dịch vụ không cần thiết, đồng thời gia tăng doanh thu từ các dịch vụ bổ trợ.

**2.2 Câu chuyện người dùng (User Story):** 

# Phân tích nhu cầu của ba đối tượng chính:

- # **Hành khách:** Cần tìm kiếm/đặt vé, chọn dịch vụ bổ trợ, quản lý thông tin đặt chỗ và nhận thông báo thay đổi chuyến bay.

- # **Nhân viên:** Cần quản lý thông tin chuyến bay, thông tin hành khách, xử lý các yêu cầu dịch vụ và đặt chỗ của khách hàng.

- # **Quản lý:** Cần kiểm soát đội bay và lịch trình, cập nhật thông tin máy bay, bảo trì, cũng như xem báo cáo doanh thu và phân tích dữ liệu hành khách để đưa ra quyết định kinh doanh.

# Relationship:

### **1\. Nhóm Quản lý Khai thác (Vận hành bay)**

* **Chuyến bay (Flight) & Máy bay (Aircraft) — \[Một-Nhiều\]**  
  * Một máy bay (Aircraft) có thể được sử dụng để thực hiện nhiều chuyến bay (Flight) khác nhau theo thời gian.  
  * Một chuyến bay (Flight) cụ thể tại một thời điểm chỉ do một máy bay duy nhất thực hiện.  
* **Chuyến bay (Flight) & Tuyến bay (Airway) — \[Một-Nhiều\]**  
  * Một tuyến bay (Airway) sẽ có rất nhiều chuyến bay (Flight) khai thác trên tuyến đó.  
  * Một chuyến bay (Flight) cụ thể sẽ chỉ bay dọc theo một tuyến bay (Airway) duy nhất.  
* **Tuyến bay (Airway) & Sân bay (Airport) — \[Một-Nhiều, áp dụng 2 lần\]**  
  * Một sân bay (Airport) có thể là điểm khởi hành của nhiều tuyến bay và là điểm đến của nhiều tuyến bay khác.  
  * Mỗi tuyến bay (Airway) chỉ được xác định bởi chính xác 1 Sân bay đi (`DepartureAirportID`) và 1 Sân bay đến (`ArrivalAirportID`).  
* **Chuyến bay (Flight) & Nhân viên (Employee) — \[Nhiều-Nhiều\]**  
  * *(Thông qua bảng `Employee_Flight`)* Một chuyến bay (Flight) cần một tổ bay gồm nhiều nhân viên (Employee) phục vụ.  
  * Một nhân viên (Employee) sẽ tham gia làm việc trên nhiều chuyến bay (Flight) khác nhau trong suốt sự nghiệp.  
* **Máy bay (Aircraft) & Hồ sơ bảo trì (Maintenance\_Record) — \[Một-Nhiều\]**  
  * Một chiếc máy bay (Aircraft) sẽ có nhiều hồ sơ bảo trì (Maintenance\_Record) định kỳ theo thời gian.  
  * Mỗi hồ sơ bảo trì (Maintenance\_Record) chỉ ghi nhận tình trạng kỹ thuật cho duy nhất một chiếc máy bay.

### **2\. Nhóm Quản lý Dịch vụ & Hành khách (Kinh doanh)**

* **Đặt chỗ (Booking) & Hành khách (Passenger) — \[Một-Nhiều\]**  
  * Một hành khách (Passenger) có thể thực hiện nhiều lần đặt chỗ (Booking) khác nhau.  
  * Mỗi lượt đặt chỗ (Booking) chỉ đại diện và thuộc về một hành khách (Passenger) duy nhất.  
* **Đặt chỗ (Booking) & Chuyến bay (Flight) — \[Một-Nhiều\]**  
  * Một chuyến bay (Flight) sẽ tiếp nhận rất nhiều lượt đặt chỗ (Booking) của các hành khách.  
  * Mỗi lượt đặt chỗ (Booking) chỉ có giá trị hiệu lực trên một chuyến bay (Flight) cụ thể.  
* **Đặt chỗ (Booking) & Dịch vụ (Service\_Type) — \[Nhiều-Nhiều\]**  
  * *(Thông qua bảng `Booking_service`)* Một lượt đặt chỗ (Booking) có thể mua thêm nhiều loại dịch vụ (Service\_Type) khác nhau (như mua thêm hành lý, chọn ghế, suất ăn...).  
  * Một loại dịch vụ (Service\_Type) có thể được bán cho rất nhiều lượt đặt chỗ (Booking) khác nhau.


.assets\projects\Data Information Management of an Airline\hinh1.jpg

# Problems

**Giai đoạn 1: Vận hành hàng ngày (Daily Operations)**

**Câu 1 (Kỹ năng: `SELECT`, `WHERE`, `LIKE`): Lọc tệp khách hàng mục tiêu.**

**Tình huống:** Hãng có chương trình quay số trúng thưởng cho các khách hàng có tên chứa chữ "a". Nhân viên marketing cần xuất danh sách toàn bộ khách hàng thỏa mãn điều kiện này, kèm theo thông tin liên lạc để gửi email thông báo.

Select \*

From Passenger

Where Firstname Like '%a%';

ID	Firstname	Lastname	Birthday	PassportNumber	Contactdetail

1	Van Tien	Vu	1998-01-01	98723111	vuvantien91@yahoo.com

2	Khanh Linh	Vu	1998-02-02	8663201	vklinh123@gmail.com

3	Hoang Nguyen	Lai	2001-04-01	6892012	lhoangnguyen@gmail.com

4	Minh Giam	Hoang	2004-07-10	7102932	hmgiam@yahoo.com

5	Tranh Anh	Huynh	2003-07-11	7152002	huynhtranganh@gmail.com

6	Tien Dat	Nguyen	2002-11-01	99232011	datng123@gmail.com

7	Tuan Anh	Trinh Tran	1999-05-30	6655261	tttanh1993@gmail.com

8	Thi Ha	Ngo	1967-02-13	8710291	Nthiha96@yahoo.com

9	Tuan Anh	Phung	1968-07-15	901209332	ptuananh18@yahoo.com

10	Van Luong	Le	1978-09-23	1234567	lvl9021@gmail.com

12	Elizabeth	No1	1992-07-09	129590	Elizahehe@gmail.com

13	Jack	Sparow	1956-05-08	2134211	cuopbien@icloud.com

15	Donal	Trump	2005-08-12	695443791	USAnumber1@gov.com

18	Thomas	Edison	2046-08-20	12445567	Thomas1122@gmail.com

20	Thi Thuy Trang	Hoang	1996-03-24	833596277	hoangtrang161102@gmail.com

21	Nhat Minh	Doan	2004-05-01	897622082	minhdoan98@gmail.com

23	Tuan Phat	Huynh	1993-01-29	905072002	htuanp45@gmail.com

24	Nghia Hiep	Do	1992-10-10	907112002	dnhiep1234@gmail.com

25	Trang Linh	Hoang	1994-03-21	901029889	htlinh1992@gmail.com

27	Hai Viet	Phi	2006-01-28	964230102	haivietphi12@gmail.com

28	Viet Anh	Vu	2004-06-27	964741672	Vuvietanhdz@gmail.com

30	Minh Anh	Nguyen	1995-06-21	913219704	minhanhxinh@gmail.com

31	Hoang Son	Tran	1994-10-18	584622082	hsontran@gmail.com

32	Duc Anh	Nguyen	1991-09-25	988722012	ducanh711@gmail.com

33	Thanh Nhat	Hoang	2002-06-24	584622082	htn0507@gmail.com

34	Bao Chau	Vu Ngo	1984-03-11	982329702	vungobaochau@gmail.com

35	Thanh Duong	Dong	1996-05-10	868751685	Duongngu123@gmail.com

36	Hoang Thang	Tran Le	1984-07-13	907781819	thangtran111@gmail.com

37	Cong Thanh	Tran	1998-03-06	9012345678	thanhtrancong@gmail.com

38	Tuan Anh	Dam	1968-02-14	9012345678	cosmos6578@gmail.com

40	Bao Nam	Hoang	1978-10-23	868855613	hoangnam123@gmail.com

41	Phuong Tuan	Trinh Tran	1998-08-31	98653420	j97123@gmail.com

42	Thien An	Nguyen Hoang	1984-07-17	376590401	thienan5tr@gmail.com

45	Anh Tuan	Ha	1992-05-23	376799245	connhoanhkhong@gmail.com

46	Luong Anh	Nguyen	1982-06-14	98367218	luonganh07@gmail.com

47	Ha Trang	Le	2001-09-05	985765439	hatrangne@gmail.com

48	Thuy Ha	Nguyen Thi	2000-01-18	373529776	hathaibinh@gmail.com

49	Thu Trang	Cao Thi	1968-09-16	978568241	trangkhi@gmail.com

50	Quang Hung	Do	1995-07-08	984980568	hungbavi@gmail.com

### **Giai đoạn 2: Xử lý sự cố & Quản trị Dữ liệu (Incident Handling & Data Management)**

**Câu 2 (Kỹ năng: `UPDATE`, `Subquery`): Cập nhật trạng thái khẩn cấp.**

**Tình huống:** Chuyến bay 852 bất ngờ gặp sự cố thời tiết xấu và buộc phải hủy. Quản lý yêu cầu cập nhật lập tức trạng thái (Status) của chuyến bay này thành 'C' (Cancelled), đồng thời dùng truy vấn lồng (Subquery) để lấy ngay số điện thoại của hành khách trên chuyến bay đó nhằm nhắn tin xin lỗi.

Update Flight

Set Status\_FL \= 'C'

Where ID \= 852;

Select \* from Flight where ID \= 852;

Select Firstname, Lastname, Contactdetail

From Passenger

Where ID IN (Select PassengerID From Booking where FlightID \= 852);

ID	AircraftID	DepartureTime	ArrivalTime	AirwayID	Status\_FL

852	4	1900-01-01 16:50:00.000	1900-01-01 08:45:00.000	J-H	C

Firstname	Lastname	Contactdetail

Minh Giam	Hoang	hmgiam@yahoo.com

Tuan Anh	Phung	ptuananh18@yahoo.com

Elizabeth	No1	Elizahehe@gmail.com

Emi	Fukkada	JAnnVvv@gmail.com

Chong Un	Kim	nuclear@gmail.com

Nghia Hiep	Do	dnhiep1234@gmail.com

Kim Lien	Ta	lienta971@gmail.com

Bao Chau	Vu Ngo	vungobaochau@gmail.com

Linh Chi	Phung	linhchi113@gmail.com

Dong Nhi	Nguyen	dongquaxuantoi@gmail.com

Thu Trang	Cao Thi	trangkhi@gmail.com

### **Giai đoạn 3: Tối ưu Hóa Doanh thu & Dịch vụ (Revenue & Service Analysis)**

**Câu 3 (Kỹ năng: `INNER JOIN`, `SUM`): Tính toán doanh thu dịch vụ phụ trợ.**

**Tình huống:** Vietjet là hãng hàng không giá rẻ nên doanh thu từ dịch vụ (đồ ăn, hành lý ký gửi, wifi) rất quan trọng. Kế toán cần tính tổng doanh thu (`SUM`) thu được từ các dịch vụ phụ trợ bán ra trên chuyến bay 123\.

Select SUM(S.Price) as Totalrevenue

From Booking B

Inner join Booking\_service BS on B.ID \= BS.BookingID

Inner join Service\_Type S on BS.ServiceID \= S.ID

Where B.FlightID \= 123;

Totalrevenue

52

**Câu 4 (Kỹ năng: `LEFT JOIN`, `IS NULL`): Tìm kiếm cơ hội chéo (Cross-selling).**

**Tình huống:** Bộ phận Telesale muốn gọi điện chèo kéo thêm dịch vụ. Họ cần danh sách các hành khách đã đặt vé (Booking) nhưng hiện tại *chưa* mua thêm bất kỳ dịch vụ phụ trợ (Service) nào.

Select B.ID, P.ID, P.Firstname, p.Lastname, P.Contactdetail

From Passenger P

Inner join Booking B on B.PassengerID \= P. ID

Left join Booking\_service BS on B. ID \= BS.BookingID

Where BS.ServiceID IS NULL;

ID	ID	Firstname	Lastname	Contactdetail

18	9	Tuan Anh	Phung	ptuananh18@yahoo.com

19	10	Van Luong	Le	lvl9021@gmail.com

21	12	Elizabeth	No1	Elizahehe@gmail.com

22	13	Jack	Sparow	cuopbien@icloud.com

23	14	Emi	Fukkada	JAnnVvv@gmail.com

24	15	Donal	Trump	USAnumber1@gov.com

26	17	Son Tung	MTP	skyoiii123@gmail.com

27	18	Thomas	Edison	Thomas1122@gmail.com

28	19	Chong Un	Kim	nuclear@gmail.com

29	20	Thi Thuy Trang	Hoang	hoangtrang161102@gmail.com

31	22	Minh Duc	Le	lmd71102@gmail.com

32	23	Tuan Phat	Huynh	htuanp45@gmail.com

33	24	Nghia Hiep	Do	dnhiep1234@gmail.com

34	25	Trang Linh	Hoang	htlinh1992@gmail.com

35	26	Linh My	Trinh Tran	ttlinhmy99@gmail.com

36	27	Hai Viet	Phi	haivietphi12@gmail.com

37	28	Viet Anh	Vu	Vuvietanhdz@gmail.com

38	29	Kim Lien	Ta	lienta971@gmail.com

39	30	Minh Anh	Nguyen	minhanhxinh@gmail.com

40	31	Hoang Son	Tran	hsontran@gmail.com

41	32	Duc Anh	Nguyen	ducanh711@gmail.com

43	34	Bao Chau	Vu Ngo	vungobaochau@gmail.com

44	35	Thanh Duong	Dong	Duongngu123@gmail.com

45	36	Hoang Thang	Tran Le	thangtran111@gmail.com

46	37	Cong Thanh	Tran	thanhtrancong@gmail.com

47	38	Tuan Anh	Dam	cosmos6578@gmail.com

48	39	Linh Chi	Phung	linhchi113@gmail.com

49	40	Bao Nam	Hoang	hoangnam123@gmail.com

50	41	Phuong Tuan	Trinh Tran	j97123@gmail.com

51	42	Thien An	Nguyen Hoang	thienan5tr@gmail.com

52	43	Thien Son	Trinh Tran	thienson97@gmail.com

53	44	Dong Nhi	Nguyen	dongquaxuantoi@gmail.com

54	45	Anh Tuan	Ha	connhoanhkhong@gmail.com

55	46	Luong Anh	Nguyen	luonganh07@gmail.com

56	47	Ha Trang	Le	hatrangne@gmail.com

57	48	Thuy Ha	Nguyen Thi	hathaibinh@gmail.com

58	49	Thu Trang	Cao Thi	trangkhi@gmail.com

59	50	Quang Hung	Do	hungbavi@gmail.com

60	40	Bao Nam	Hoang	hoangnam123@gmail.com

61	10	Van Luong	Le	lvl9021@gmail.com

62	15	Donal	Trump	USAnumber1@gov.com

63	12	Elizabeth	No1	Elizahehe@gmail.com

64	13	Jack	Sparow	cuopbien@icloud.com

65	18	Thomas	Edison	Thomas1122@gmail.com

66	20	Thi Thuy Trang	Hoang	hoangtrang161102@gmail.com

### **Giai đoạn 4: Quy hoạch Chiến lược (Strategic Management)**

**Câu 5 (Kỹ năng: `GROUP BY`, `HAVING`, `MAX`/`COUNT`): Đánh giá tải trọng sân bay.**

**Tình huống:** Ban lãnh đạo đang cân nhắc mở rộng đầu tư vào các sân bay trọng điểm. Họ cần thống kê xem những sân bay nào đang phục vụ nhiều chuyến bay của hãng nhất (yêu cầu lọc ra các sân bay có tổng số chuyến bay cất/hạ cánh lớn hơn 2).

Select AP.ID Airportcode, AP.Nameairport, Count(F.ID) as Total\_flights

From Airport AP

Inner join Airway AW on AP.ID \= AW.ArrivalAirportID or AP.ID \= AW.DepartureAirportID

Inner join Flight F on AW.ID \= F.AirwayID

Group by AP.ID, AP.Nameairport

Having COUNT(F.ID)\>2 

ORDER BY Total\_Flights DESC;

Airportcode	Nameairport	Total\_flights

SGN	Sân bay Qu?c t? Tân Son Nh?t	7

NRT	Sân bay Qu?c t? Narita	6

DAD	Sân bay Qu?c t? Ðà N?ng	4

HAN	Sân bay Qu?c t? N?i Bài	4

LHR	Sân bay Heathrow	3

### **Giai đoạn 5: Tự động hóa Hệ thống (System Automation)**

**Câu 6 (Kỹ năng: `STORED PROCEDURE`): Công cụ tra cứu lịch sử bảo trì.**

**Tình huống:** Nhập ID của máy bay (ví dụ: '1'), hệ thống sẽ tự động in ra toàn bộ lịch sử bảo trì và tên đội ngũ thực hiện của chiếc máy bay đó.

Create Procedure Search\_maintenance

	@AircraftID VARCHAR(225)

As

Begin

Select AC.ID AircraftID,M.ID, AC.Model, M.MaintenanceDate, M.PerformedBy MaintenanceTeam

From Maintenance\_Record M

Inner Join Aircraft AC on M.AircraftID \= AC.ID

Where M.AircraftID \= @AircraftID

Order by M.MaintenanceDate DESC;

END;

EXEC Search\_maintenance @AircraftID \= 1

1	ABZ1482	Boeing 747	2024-02-14	Flyteam

**Câu 7 (Kỹ năng: `FUNCTION`): Hàm tính toán thời gian bay thực tế.**

**Tình huống:** Khách hàng thường xuyên hỏi về thời gian ngồi trên máy bay. Hệ thống cần một Hàm (Function) tự động tính toán ra "thời lượng bay" khi truyền vào tham số là giờ cất cánh và giờ hạ cánh.

Create function caculate\_Flightduration(

@DepartureTime Datetime,

@ArrivalTime Datetime

)

Returns NVARCHAR(50)

As

Begin

Declare @TotalMinutues INT;

Declare @Hours INT;

Declare @Minutes INT;

Declare @Result NVARCHAR(50);

SET @TotalMinutues \= DATEDIFF(Minute, @DepartureTime, @ArrivalTime);

SET @Hours \= @TotalMinutues/60;

SET @Minutes \= @TotalMinutues%60;

SET @Result \= CAST(@Hours as NVARCHAR)+ N'giờ' \+ CAST(@Minutes as NVARCHAR) \+ N'phút';

Return @Result;

End;

SELECT 

ID AS FlightCode,

DepartureTime,

ArrivalTime,

dbo.caculate\_Flightduration(DepartureTime, ArrivalTime) AS FlightDuration

FROM Flight;

101	1900-01-01 06:00:00.000	1900-01-01 11:00:00.000	5giờ0phút  
102	1900-01-01 07:30:00.000	1900-01-01 09:30:00.000	2giờ0phút  
103	1900-01-01 08:00:00.000	1900-01-01 14:00:00.000	6giờ0phút  
104	1900-01-01 09:15:00.000	1900-01-01 19:15:00.000	10giờ0phút  
106	1900-01-01 13:00:00.000	1900-01-01 18:00:00.000	5giờ0phút  
107	1900-01-01 15:45:00.000	1900-01-01 17:45:00.000	2giờ0phút  

Dưới đây là link code chi tiết của dự án https://github.com/hatrang-ship-it/Data-Information-Management-of-an-Airline
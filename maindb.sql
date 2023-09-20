use booksproject
-- book to inventory trigger
create trigger insert_into_inventry on book
for insert 
as
begin
    insert into inventory select book_id,20 from inserted;
end

 

alter table customer add unique(email)
alter table customer add unique(mobile_no)

 alter table admin add unique(email)

--insert into author values('author1'),('author2'),('author3')

 select * from author

--insert into publisher(publisher_name,country) values('kkks','India'),('md','Dubai')

 

select * from book
select * from inventory

select * from author

--insert into book(author_id,publisher_id,title,category,price) values(1,1,'ABC','Fiction',300),(1,2,'XYZ','Nonfiction',400)

 

select * from customer
select * from cart

 

insert into customer(cust_name,email,password,gender,mobile_no,address)
values('Kiran','kiran@gmail.com','Kiran@123','M',8328319281,'Mg Street, VZM'),
('Raju','raju@gmail.com','Raju@123','M',8328319990,'Mg Street, VZM')

 

select * from customer
truncate table customer


--insert into cart(book_id,cust_id,price,quantity) values(1,1,300,1)

 

 

insert into admin(
	name,email,password) values ('Admin','admin@gmail.com','Admin@123')

 

select * from book
select * from cart


--------------------------------------------------------------------------------------
insert into book(author_id,publisher_id,title,category,price,link)values
(1,1,'Hunger Games','Fiction',500,'https://th.bing.com/th/id/OIP.LWX54UcVA8GUFTFtzr6KdwHaLM?w=203&h=307&c=7&r=0&o=5&pid=1.7%22'),
(2,1,'The Master Piece','Art',500,'https://th.bing.com/th/id/OIP.BYHbxeI77KBWmLOSrP0QgQAAAA?w=190&h=287&c=7&r=0&o=5&pid=1.7%22'),
(3,2,'Interstellar','Science',1500,'https://th.bing.com/th/id/OIP.1G6f4MrYV9u61SF9i6kk0QHaLH?w=204&h=306&c=7&r=0&o=5&pid=1.7%22'),
(4,2,'The Conjuring','Horror',1500,'https://th.bing.com/th/id/OIP.FM6y3O8k2igajktzi4igMQHaLb?w=201&h=310&c=7&r=0&o=5&pid=1.7%22'),
(5,3,'The Travel Book','Travel',2500,'https://th.bing.com/th/id/OIP.RpliCOPd-n0THbznEJ9puQAAAA?w=204&h=291&c=7&r=0&o=5&pid=1.7%22'),
(1,3,'The Maze Runner','Fiction',2500,'https://th.bing.com/th/id/OIP.lKiJqs0JrTrKlb9nv3yPdQHaLG?w=204&h=306&c=7&r=0&o=5&pid=1.7%22'),
(2,4,'The Art of Rivalry','Art',3500,'https://th.bing.com/th/id/OIP.MwhPx4xKfVdwr_tf_YRDfAAAAA?w=115&h=180&c=7&r=0&o=5&pid=1.7%22'),
(3,4,'American Prometheus','Science',3500,'https://th.bing.com/th/id/OIP.q-ns5gnryakOXu4IOeS9pgHaLW?w=201&h=309&c=7&r=0&o=5&pid=1.7%22'),
(4,5,'Pet Sematary','Horror',600,'https://th.bing.com/th/id/OIP.dZtOxWVelqQsO8fW1jFhDwHaMT?w=193&h=322&c=7&r=0&o=5&pid=1.7%22'),
(5,5,'The Holiday','Travel',800,'https://th.bing.com/th/id/OIP.43J271zD30GOjTxfIow_ngHaLV?w=202&h=309&c=7&r=0&o=5&pid=1.7%22');

 

 

insert into author values
('Oppenhiemer'),
('Peter Hamsworth'),
('Christhoper Nolan'),
('Jenifier Williams'),
('Andrew Tate');

 
insert into publisher(country,publisher_name) values
('Japan','Legion Publishers'),
('USA','Blue Star Publishers'),
('England','NOVA Publishers'),
('Canada','MRD Publishers'),
('India','RK Publishers');

--alter table payment add payment_date datetime;

alter procedure makePayment @customerId int ,@amount money ,@coupon varchar(20)
as
   -- declare @cust_id int;
    -- select @cust_id = cust_id from customer where email = @email and password = @password;

    if(@customerId is not null)
    begin
        declare @sum money;  
        declare @dis_amount money;
        --select * from cart;
		select @sum = sum(price * quantity)  from cart where cust_id = @customerId;

		select @dis_amount = dis_amount from coupon where coupon_code like @coupon;

		if( @dis_amount is  null)
        begin
			set @dis_amount = 0;
        end

			set @sum = @sum - @dis_amount;
            --declare @amount_after_tax money;
            --set @amount_after_tax = @sum*(0.05) + @sum;

			--print @amount_after_tax
			print @amount
			print  @sum
            if(@amount = @sum)
            begin
                --print 'payment success';
                insert into Payment(cust_id,cart_value, discount,tax,total_amount,payment_date)  values(@customerId,@sum +@dis_amount,@dis_amount,0,@sum,GETDATE());  
            end
            else
                print 'invalid amount'

	end
    else 
        print 'invalid user or emali'

--exec makePayment 1,650,'coupon1'

select * from cart

select * from payment

--drop procedure makePayment

insert into coupon(coupon_code,dis_amount) values('coupon50',50),('coupon100',100)












------------------
-- Trigger to insert order detials and order items
create trigger order_details on payment
for insert
as
begin
    declare @cust_id int;
    declare @total_amount money;
    declare @order_id int;

	declare @temp_table table(id int identity(1,1),book_id int, quantity int);

	

    select @cust_id= cust_id , @total_amount = total_amount from inserted;
    insert into orders(cust_id,total_amount,order_date) values(@cust_id,@total_amount,getdate());

 
	
    select @order_id = order_id from orders;

 

    insert into order_items(order_id,cust_id,book_id,quantity,amount) select @order_id,@cust_id, book_id, quantity,price from cart where cust_id = @cust_id;

	-- updating inventory
	insert into @temp_table(book_id,quantity) select book_id,quantity from cart where cust_id = @cust_id;
	declare @total_rows int;
	declare @counter int;
	set @counter = 1;

	select @total_rows = count(*) from cart where cust_id = @cust_id;
	
	declare @temo_bid int;
	declare @temp_qua int;
	while(@counter <= @total_rows)
	begin
		select @temo_bid = book_id,@temp_qua = quantity from @temp_table where id = @counter;
		
		update inventory set quantity = (select quantity from inventory where book_id = @temo_bid) - @temp_qua where book_id = @temo_bid;
		set @counter = @counter + 1;
	end

	delete from cart where cust_id = @cust_id;

 end




--drop trigger order_details

select * from orders
select * from order_items
select * from payment

select * from coupon

select* from inventory

select * from book


-- popular book 
alter procedure popular_book
as
	truncate table popular_books
	insert into popular_books(book_id,quantity,total_spent) select top 5 book_id,sum(quantity) as total_purcahse, sum(amount) as total_spent from order_items group by book_id order by total_purcahse desc
	--select * from popular_books;

exec popular_book
--------------------
--drop procedure popular_books;



create table popular_books
(p_id int identity(1,1) primary key,
book_id int foreign key references book(book_id),
quantity int,
total_spent float);

select * from popular_books

---------------------------

alter procedure increaseCartQuantity  @cartId int, @bookId int
as
	declare @cartQuantity int
	declare @inventoryQuantity int

	select @cartQuantity = quantity from cart where cart_id = @cartId 
	update cart set quantity = @cartQuantity + 1 where cart_id = @cartId;

	--select @inventoryQuantity = quantity from inventory where book_id = @bookId 
	--update inventory set quantity = @inventoryQuantity - 1 where book_id = @bookId;

exec increaseCartQuantity 31,9


------------------------------------------------------------------
create procedure decreaseCartQuantity  @cartId int, @bookId int
as
	declare @cartQuantity int
	declare @inventoryQuantity int

	select @cartQuantity = quantity from cart where cart_id = @cartId 
	update cart set quantity = @cartQuantity - 1 where cart_id = @cartId;

	--select @inventoryQuantity = quantity from inventory where book_id = @bookId 
	--update inventory set quantity = @inventoryQuantity + 1 where book_id = @bookId;



exec decreaseCartQuantity 31,3

select * from cart
select * from inventory
select * from book

select * from order_items

--------------------------------------------

select * from payment



create procedure get_payment @cust_id int as 
	select Top 1 * from payment where cust_id = @cust_id order by payment_date desc;

	select * from coupon



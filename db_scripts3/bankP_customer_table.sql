
USE MYSQL;

drop table  customer;

CREATE TABLE customer  (
customer_id    INT ,
customer_name   VARCHAR(100),
bank_name   VARCHAR(100),
location   VARCHAR(100)  
) ;

select * from customer;
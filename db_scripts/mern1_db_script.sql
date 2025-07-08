show databases;

use mysql;

DROP TABLE DEPT;

CREATE TABLE DEPT(
DEPT_ID  INT PRIMARY KEY, 
DNAME  VARCHAR(100),
LOCATION   VARCHAR(100)
);

insert into dept values(10,'FINANCE','HYD');

insert into dept values(20,'HR','BANGALORE');




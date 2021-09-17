create database teste;
use teste;
create table users(
	id int primary key auto_increment,
	name varchar(100),
    age int default 18
);

insert into users (name, age) values ('Gabriela', 20);

select * from users;

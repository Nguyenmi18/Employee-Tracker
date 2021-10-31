DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department(
id INTEGER AUTO_INCREMENT primary key,
name varchar(30) unique
);

CREATE TABLE role (
id int AUTO_INCREMENT primary key,
title varchar(30) Unique,
salary decimal,
department_id interger,
FOREIGN KEY (department_id)
REFERENCES department (id)
ON DELETE CASCADE
);

CREATE TABLE employee (
id int AUTO_INCREMENT PRIMARY key,
first_name varchar(30),
last_name varchar(30),
role_id int,
FOREIGN key (role_id)
REFERENCES role (id)
ON DELETE CASCADE,
manager_id INT,
FOREIGN key (manager_id)
REFERENCES employee(id)
ON DELETE SET NULL,
);
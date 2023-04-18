DROP DATABASE IF EXISTS library_db;
CREATE DATABASE library_db;
USE library_db;

CREATE TABLE department(
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
department VARCHAR(30)
);
CREATE TABLE role (
id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
title VARCHAR(30),
salary DECIMAL,
department VARCHAR(30),
department_id INT,
FOREIGN KEY (department_id)
REFERENCES department(id)
);
CREATE TABLE employee (
id INT AUTO_INCREMENT NOT NULL PRIMARY KEY,
first_name VARCHAR(30),
last_name VARCHAR(30),
role_id INT,
role_title VARCHAR(30),
manager_id INT,
manager_name VARCHAR(30),
FOREIGN KEY (role_id)
REFERENCES role(id),
FOREIGN KEY (manager_id)
REFERENCES employee(id)
);
INSERT INTO department (name)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales'),
('Service');
INSERT INTO role (title, salary, department)
VALUES ('Sales Lead', 30000, 'Sales'), ('Salesperson', 20000, 'Sales'), ('Lead Engineer', 40000, 'Engineering'), ('Software Engineer', 30000, 'Engineering'), ('Account Manager', 50000, 'Finance'), ('Accountant', 10000, 'Finance'), ('Legal Team Lead', 100000, 'Legal'), ('Lawyer', 90000, 'Legal'), ('Customer Service', 20000, 'Service');
INSERT INTO employee (first_name, last_name, role_title, manager_name)
VALUES('John','Doe','Sales Lead'), ('Mike','Chan','Salesperson','John Doe'), ('Ashley','Rodriguez','Lead Engineer'),('Kevin','Tupik','Softwar Engineer','Ashley Rodriguez'), ('Kunal','Singh','Account Manager'), ('Malia','Brown','Accountant','Kunal Singh'), ('Sarah','Lourd','Legal Team Lead'), ('Tom','Allen','Lawyer','Sarah Lourd'),('Sam','Kash','Sales Lead','Ashley Rodriguez')
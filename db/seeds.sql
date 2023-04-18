INSERT INTO department (department)
VALUES ('Engineering'),
('Finance'),
('Legal'),
('Sales'),
('Service');
INSERT INTO role (title, salary, department, department_id)
VALUES ('Sales Lead', 30000, 'Sales', 1), ('Salesperson', 20000, 'Sales', 1), ('Lead Engineer', 40000, 'Engineering', 2), ('Software Engineer', 30000, 'Engineering', 2), ('Account Manager', 50000, 'Finance', 3), ('Accountant', 10000, 'Finance', 3), ('Legal Team Lead', 100000, 'Legal', 4), ('Lawyer', 90000, 'Legal', 4), ('Customer Service', 20000, 'Service', 5);
INSERT INTO employee (first_name, last_name, role_title, manager_name)
VALUES('John','Doe','Sales Lead', NULL), ('Mike','Chan','Salesperson','John Doe'), ('Ashley','Rodriguez','Lead Engineer', NULL),('Kevin','Tupik','Software Engineer','Ashley Rodriguez'), ('Kunal','Singh','Account Manager', NULL), ('Malia','Brown','Accountant','Kunal Singh'), ('Sarah','Lourd','Legal Team Lead', NULL), ('Tom','Allen','Lawyer','Sarah Lourd'),('Sam','Kash','Sales Lead','Ashley Rodriguez');
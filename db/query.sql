SELECT *
FROM department
JOIN role ON role.department = department.name;
SELECT *
FROM department
JOIN role ON role.department_id = department.id;
const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table');
require('dotenv').config();

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: 'Joeyfly1!',
        database: 'library_db'
    },
    console.log(`Connected to the library database.`)
)
const checklist = function (){
    inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'firstCheck',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role', 'Quit']
        }
    ])
    .then((data) => {
        if (data.firstCheck === 'View all departments') {
            db.query('SELECT * FROM department;', (err, results)=>{
                err ? console.error(err) : console.table(results)
            });
        } else if (data.firstCheck === 'View all roles'){
            db.query('SELECT * FROM role;', (err, results) => {
                err ? console.error(err) : console.table(results)
            })
        } else if (data.firstCheck === 'View all employees'){
            db.query('SELECT * FROM employee;', (err, results) => {
                err ? console.error(err) : console.table(results)
            })
        } else if (data.firstCheck === 'Add a department'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'addDepartment',
                    message: 'What is the name of the department?'
                }
            ]).then((data) =>{
                db.query(`INSERT INTO department(department)VALUES('${data.addDepartment}');`), (err, results) =>{
                    err ? console.error(err) : console.table(results)
                }
            })
        } else if (data.firstCheck === 'Add a role') {
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'addRolename',
                    message: 'What is the name of the role?'
                },{
                    type: 'input',
                    name: 'addRoleSalary',
                    message: 'What is the salary of the role?'
                },{
                    type: 'list',
                    name: 'addRoleDepartment',
                    message: 'Which department does the role belong to?',
                    choices: ['Engineering','Finance','Legal','Sales','Service']
                }
            
            ]).then((data) =>{
                db.query(`INSERT INTO role (title, salary, department, department_id)VALUES('${data.addRolename}', ${data.addRoleSalary}, '${data.addRoleDepartment}', NULL);`, (err, results) =>{
                    err ? console.error(err) : console.table(results)
                })
            })
        } else if (data.firstCheck === 'Add an employee'){
            inquirer.prompt([
                {
                    type: 'input',
                    name: 'employeeFirst',
                    message: "What is the employee's first name?"
                },{
                    type: 'input',
                    name: 'employeeLast',
                    message: "What is the employee's last name?"
                }, {
                    type: 'list',
                    name: 'employeeRole',
                    message: "What is the employee's role?",
                    choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
                },{
                    type: 'list',
                    name: 'employeeManager',
                    message: "Who is the employee's manager?",
                    choices: ['None', 'John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown']
                }
            ]).then((data) =>{
                db.query(`INSERT INTO employee(first_name, last_name, role_title, manager_name)VALUES('${data.employeeFirst}', '${data.employeeLast}', '${data.employeeRole}', '${data.employeeManager}');`), (err, results) =>{
                    err ? console.error(err) : console.table(results)
                }
            })
        } else if (data.firstCheck === 'Update an employee role'){
            db.query(`SELECT first_name, last_name FROM employee GROUP BY employee.id`, (err, results)=>{ if (err){
                console.error(err)
            }else {
                console.log(results)
                const test = (JSON.stringify(results).split(':').join(',').split(' ').join(',').split(','))
                console.log(test)
                inquirer.prompt([
                   { 
                   type: 'list',
                   name: 'selectEmployee',
                   message: 'Select an employee to update',
                   choices: ['John Doe', 'Mike Chan', 'Ashley Rodriguez', 'Kevin Tupik', 'Kunal Singh', 'Malia Brown', 'Sarah Lourd', 'Tom Allen', 'Sam Kash']
                }, {
                    type: 'list',
                    name: 'updateRole',
                    message: 'Select an updated role',
                    choices: ['Sales Lead', 'Salesperson', 'Lead Engineer', 'Software Engineer', 'Account Manager', 'Accountant', 'Legal Team Lead', 'Lawyer', 'Customer Service']
                }
                ]) .then((data)=>{
                    const employeeName = data.selectEmployee.split(' ')
                    console.log(employeeName[0])
                    db.query(`UPDATE employee SET role_title = '${data.updateRole}' WHERE first_name = '${employeeName[0]}';`);
                })
        }})
        } else if (data.firstCheck === 'Quit'){
            console.log('Quitting time')
            return;
        }
    })
}
checklist()
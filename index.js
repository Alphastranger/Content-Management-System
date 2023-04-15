const inquirer = require('inquirer')

inquirer
    .prompt([
        {
            type: 'list',
            message: 'What would you like to do?',
            name: 'firstCheck',
            choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
        }
    ])
    .then((data) => {
        if (data === 'View all departments') {
            data.query('SELECT Departments FROM ', (err, results)=>{
                err ? console.error(err) : console.log(results)
            })
        }
    })
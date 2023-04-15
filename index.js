const inquirer = require('inquirer')

inquirer.createPromptModule([
    {
        type: 'list',
        message: 'What would you like to do?',
        name: 'firstCheck',
        choices: ['View all departments', 'View all roles', 'View all employees', 'Add a department', 'Add a role', 'Add an employee', 'Update an employee role']
    }
])
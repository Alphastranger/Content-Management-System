const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')

const db = mysql.createConnection(
    {
        host: 'localhost',
        user: DB_USER,
        password: DB_PASSWORD,
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
        if (data === 'View all departments') {
            db.query('SELECT * FROM department', (err, results)=>{
                err ? console.error(err) : console.log(results)
            })
        } else if (data === 'View all roles'){
            db.query('SELECT * FROM roles'), (err, results) => {
                err ? console.error(err) : console.log(results)
            }
        } else if (data === 'View all employees'){
            db.query('SELECT * FROM employee'), (err, results) => {
                err ? console.error(err) : console.log(results)
            }
        } else if (data === 'Add a department'){
            db.query('SELECT')
        }
    })
}
module.exports = checklist
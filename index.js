// Packages required 
const inquirer = require('inquirer');
const mysql = require('mysql2');

// Establishing connection with the database
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', 
    password: 'password',
    database: 'company_db'
});
// Start application
function init() {
    inquirer
        .prompt({
            name: 'options',
            type: 'list',
            message: 'What would you like to do?',
            choices: [
                'View All Departments',
                'View All Roles',
                'View All Employees',
                'Add A Department',
                'Add A Role', 
                'Add An Employee',
                'Update An Employee Role'
            ],
           })
           .then((answers) => {
            const userOption = answers.choices;
            switch (userOption) {
                case 'View All Departments':
                    viewDepartments();
                    break;
                case 'View All Roles': 
                    viewRoles();
                    break;
                case 'View All Employees':
                    viewEmployees();
                    break;
                case 'Add A Department':
                    addDepartment();
                    break;
                case 'Add A Role':
                    addRole();
                    break;
                case 'Add An Employee':
                    addEmployee();
                    break;
                case 'Update An Employee Role':
                    updateRole();
                    break;
            }
           })
};
// create functions for viewing each option
function viewDepartments() {
    db.query('SELECT * FROM departments', (err, answers) => {
        if (err) {
            console.log(err);
        } else {
            console.table(answers);
            init();
        }
    });
};

function viewRoles() {
    db.query('SELECT * FROM roles', (err, answers) => {
        if (err) {
            console.log(err);
        } else {
            console.table(answers);
            init();
        }
    });
};

function viewEmployees() {
    db.query('SELECT * FROM employees', (err, answers) => {
        if (err) {
            console.log(err);
        } else {
            console.table(answers);
            init();
        }
    });
};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateRole() {

};

init();
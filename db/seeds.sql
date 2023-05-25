INSERT INTO department (name)
VALUES
    ( 'Engineering'),
    ( 'Finance'),
    ( 'Legal'),
    ( 'Sales');


INSERT INTO role (title, salary, department_id)
VALUES
    ( 'Sales Lead', 100000, 4),
    ( 'Salesperson', 80000, 4),
    ( 'Lead Engineer', 150000, 1), 
    ( 'Software Engineer', 120000, 1), 
    ( 'Account Manager', 160000, 2), 
    ( 'Accountant', 125000, 2), 
    ( 'Legal Team Lead', 250000, 3),
    ( 'Lawyer', 190000, 3);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
    ( 'Patrick', 'Stump', 1, NULL),
    ( 'Joe', 'Trohman', 2, 1),
    ( 'Pete', 'Wentz', 3, NULL), 
    ( 'Andy', 'Hurley', 4, 3), 
    ( 'Erica', 'Covington-Abbott', 5, NULL), 
    ( 'Brendon', 'Urie', 6, 5), 
    ( 'Ryan', 'Ross', 7, NULL), 
    ( 'Spencer', 'Smith', 8, 7);
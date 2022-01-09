INSERT INTO department (name)
VALUES 
('Pharmacology'), 
('Lab'),
('Sale'),
('pharmacy');

INSERT INTO role (title, salary, department_id)
VALUES
('Professor',20 , 1),
('Intern', 10, 1 ),
('Teacher',15,2),
('TA', 10, 2),
('Sale Manager',50,3),
('Sale person',30,3),
('technician',30,4),
('clerk',20,4);


INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES
('david', 'ng', 1, NULL),
('amanda', 'lopez',2, 1),
('pepsi', 'cola',3 , NULL),
('michelle', 'rodriguez',4 , 3),
('aracelis', 'coca',5 , NULL),
('crysta', 'patel', 6 , 5),
('alex', 'yu', 7, NULL),
('jamon', 'brown', 8, 7);





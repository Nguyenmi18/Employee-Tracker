INSERT INTO department (name)
VALUES 
('Pharmacology'), 
('Lab'),
('Sale'),
('pharmacy');

INSERT INTO role (title, salary, department_id)
VALUES
('Intern', 10, 1 ),
('Professor',20 , 1),
('TA', 10, 2),
('Teacher',15,2),
('Sale Manager',50,3),
('Sale person',30,3),
('technician',30,4),
('clerk',20,4);


INSERT INTO employee (first_name,last_name,role_id,manager_id)
VALUES
('david','ng', 1,5),
('amanda','lopez',4, NULL),
('pepsi','cola',5,null),
('michelle', 'rodriguez',7,null),
('aracelis', 'coca',2,null),
('crysta', 'patel',3,2),
('alex','yu',8,4),
('jamon','brown',6,3);





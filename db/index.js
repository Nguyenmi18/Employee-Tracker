const connection = require("./connection");

class DB {
  constructor(connection) {
    this.connection = connection;
  }

  //call a function that runs a query in mysql that return the employe id, first_name, last_name, employees role, the department their salary, their manager full name

  findEmployees() {
    return this.connection
      .promise()
      .query(
        'SELECT employee.id, employee.first_name, employee.last_name,role.title, department.name, role.salary, concat(manager.first_name, " " , manager.last_name) AS manager  FROM employee LEFT JOIN role ON employee.role_id = role.id LEFT JOIN department ON department.id = role.department_id LEFT JOIN employee manager ON employee.manager_id = manager.id;'
      );
  }

  findDepartment() {
    return this.connection
    .promise()
    .query("SELECT * FROM department;");
  }

  findAllRoles() {
    return this.connection
      .promise()
      .query(
        "SELECT role.title, role.id, role.salary ,department.name FROM role LEFT JOIN department ON department.id = role.department_id;"
      );
  }

  addRole(role) {
    return this.connection.promise().query("INSERT INTO role SET ?", role);
  }

  addDepartment(name) {
    return this.connection
      .promise()
      .query("INSERT INTO department SET ?", name);
  }

  addAEmployee(employee) {
    return this.connection
      .promise()
      .query("INSERT INTO employee SET ?", employee);
  }

  updateEmployee(roleID,employeeID) {
    return this.connection
    .promise()
    .query("UPDATE employee SET role_id = ? where id = ?", [roleID,employeeID]);
  }
}


module.exports = new DB(connection);

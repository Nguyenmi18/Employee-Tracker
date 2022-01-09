const inquirer = require("inquirer");
const db = require("./db");
require("console.table");

function start() {
  inquirer
    .prompt([
      {
        type: "list",
        name: "userChoice",
        message: "what would you like to do?",
        choices: [
          "View All Employees",
          "View All Departments",
          "View All Roles",
          "Add Employee",
          "Add A Role",
          "Add A Department",
          "Update Employee Role",
          "Done",
        ],
      },
    ])
    .then((res) => {
      let choice = res.userChoice;

      switch (choice) {
        case "View All Employees":
          viewAllEmployees();
          break;
        case "View All Departments":
          viewAllDepartment();
          break;
        case "View All Roles":
          viewAllRoles();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Add A Role":
          addARole();
          break;

        case "Add A Department":
          addADepartment();
          break;

        case "Update Employee Role":
          updateEmployeeRole();
          break;
        default:
          process.exit();
      }
    });
}

function viewAllEmployees() {
  db.findEmployees()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function viewAllDepartment() {
  db.findDepartment()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function viewAllRoles() {
  db.findAllRoles()
    .then(([data]) => {
      console.table(data);
    })
    .then(() => start());
}

function addARole() {
  db.findDepartment().then(([data]) => {
    const departmentOptions = data.map(({ id, name }) => ({
      name: name,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "input",
          name: "title",
          message: "what is the name of the role?",
        },
        {
          type: "input",
          name: "salary",
          message: "what is the salary of the role?",
        },
        {
          type: "list",
          name: "department_id",
          message: "what department does the role belong to?",
          choices: departmentOptions,
        },
      ])
      .then((role) => {
        db.addRole(role).then(() => start());
      });
  });
}

function addADepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "name",
        message: "what is the name of the department you are adding?",
      },
    ])
    .then((data) => {
      let name = data;
      db.addDepartment(name).then(() => start());
    });
}

function addEmployee() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "first_name",
        message: "what is the employee first name?",
      },
      {
        type: "input",
        name: "last_name",
        message: "what is the emplyee last name?",
      },
    ])
    .then((res) => {
      let firstName = res.first_name;
      let lastName = res.last_name;

      db.findAllRoles().then(([data]) => {
        const roleOption = data.map(({ id, title }) => ({
          name: title,
          value: id,
        }));

        inquirer
          .prompt([
            {
              type: "list",
              name: "role_id",
              message: "What is the role of the employee?",
              choices: roleOption,
            },
          ])
          .then((response) => {
            let roleId = response.role_id;
            db.findEmployees().then(([data]) => {
              const employeeOption = data.map(
                ({ id, first_name, last_name }) => ({
                  name: `${first_name} ${last_name}`,
                  value: id,
                })
              );

              inquirer
                .prompt([
                  {
                    type: "list",
                    name: "managerId",
                    message: "who is this emplyee manager?",
                    choices: employeeOption,
                  },
                ])
                .then((response) => {
                  let newEmployee = {
                    first_name: firstName,
                    last_name: lastName,
                    role_id: roleId,
                    manager_id: response.managerId,
                  };

                  db.addAEmployee(newEmployee).then(() => start());
                });
            });
          });
      });
    });
}

function updateEmployeeRole() {
  db.findEmployees().then(([data]) => {
    const employeeOption = data.map(({ id, first_name, last_name }) => ({
      name: `${first_name} ${last_name}`,
      value: id,
    }));

    inquirer
      .prompt([
        {
          type: "list",
          name: "employeeId",
          message: "please select an employee to update?",
          choices: employeeOption,
        },
      ])
      .then((res) => {
        let employeeId = res.employeeId;

        db.findAllRoles().then(([data]) => {
          const roleOption = data.map(({ id, title }) => ({
            name: title,
            value: id,
          }));

          inquirer
            .prompt([
              {
                type: "list",
                name: "role_id",
                message: "What is the updated employee role?",
                choices: roleOption,
              },
            ])
            .then((res) => {
              let roleId = res.role_id
              db.updateEmployee(roleId,employeeId)
              .then(()=> start());
            });
        });
      });
  });
}

start();

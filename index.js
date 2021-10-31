const inquirer = require('inquirer');
require('console.table');

function start(){
inquirer.prompt([
	{
		type: 'list',	
		name: 'userChoice',
		message: 'what would you like to do?',
		choices:[
			'View All Employees',
			"View All Departments",
			'View All Roles',
			'Add Employee',
			'Add A Role',
			'Add A Department',
			'Update Employee Role',
			'Done'
		]
	}
]).then(res =>{
	let choice = res.userChoice;

	switch(choice){
		case 'View All Employees':
		viewAllEmployees();
		break;
		case 'View All Departments':

		break;
		case 'View All Roles':

		break;

		default:
			process.exit()
	}
})
}

function viewAllEmployees(){
	
}

start()
var inquirer = require('inquirer');

//validate: (Function) Receive the user input and should return true if the value is valid,
//and an error message (String) otherwise. If false is returned, a default error message is provided.

var flashcards = function(){

	 	inquirer.prompt([
	 		{
                type: 'list',
                name: 'cardStyle',
                message: 'What style of flash cards do you want to use?',
                choices: ['create-basic-cards','run-basic-cards' ,'create-cloze-cards','run-cloze-cards','quit']
            }
        ]).then(function(choice) {

            if (choice.userType === 'create-basic-cards') {

            } else if (choice.userType === 'run-basic-cards') {

            } else if (choice.userType === 'create-cloze-cards') {

            } else if (choice.userType === 'run-cloze-cards') {

            } else if (choice.userType === 'run-basic-cards') {

            } else if (choice.userType === 'quit') {
                console.log('Thank you for playing!');
            }
        });

} // End of flashcards function
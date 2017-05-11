var inquirer = require('inquirer');
var fs = require('fs');
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");




//validate: (Function) Receive the user input and should return true if the value is valid,
//and an error message (String) otherwise. If false is returned, a default error message is provided.

//////////////////////////////////////////////////////////// Main Logic /////////////////////////////////////////////////////////////

flashcards = function(){

	 	inquirer.prompt([
	 		{
                type: 'list',
                name: 'cardStyle',
                message: 'What style of flash cards do you want to use?',
                choices: ['run-basic-cards','run-cloze-cards','quit']
            }
        ]).then(function(choice) {

            if (choice.userType === 'run-basic-cards') {
               basicCardStart();
            } else if (choice.userType === 'run-cloze-cards') {
                

            } else if (choice.userType === 'quit') {
                console.log('Thank you for playing!');
            }
        });

} // End of flashcards function

/////////////////////////////////////////////////////////////// Functions ///////////////////////////////////////////////////////////

// function basicCardStart(){
//         inquirer.prompt([
//             {
//                 type: 'list',
//                 name: 'question',
//                 message: 'What style of flash cards do you want to use?',
//                 validate: function (input) {

//                 }
//             }
//         ]).then(function(choice) {

//         }
// }

var questionOneB = new BasicCard("Who was the first president of the United States?","George Washington");
var questionTwoB = new BasicCard("What year was the federal reserve banking system get estblished into federal law?","1913");
var questionThreeB = new BasicCard("Who is the current chairperson of the Federal Reserve Board?","Janet Yellen");
var questionFourB = new BasicCard("What country has the highest debt to GDP ratio?","Japan");

var questionOneC = new ClozeCard("Who was the first president of the United States?","George Washington");
var questionTwoC = new ClozeCard("What year was the federal reserve banking system get estblished into federal law?","1913");
var questionThreeC = new ClozeCard("Who is the current chairperson of the Federal Reserve Board?","Janet Yellen");
var questionFourC = new ClozeCard("What country has the highest debt to GDP ratio?","Japan");

var basicQuestionArray = [questionOneB,questionTwoB,questionThreeB,questionFourB];
var clozeQuestionArray = [questionOneC,questionTwoC,questionThreeC,questionFourC];

// flashcards();

console.log(basicQuestionArray[0].front)
console.log(clozeQuestionArray[0])
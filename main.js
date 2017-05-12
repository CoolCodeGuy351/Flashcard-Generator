var inquirer = require('inquirer');
var fs = require('fs');
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");

var count = 0;

//validate: (Function) Receive the user input and should return true if the value is valid,
//and an error message (String) otherwise. If false is returned, a default error message is provided.

//////////////////////////////////////////////////////////// Main Logic /////////////////////////////////////////////////////////////

function flashcards(){

	 	inquirer.prompt([
	 		      {
                type: 'list',
                name: 'cardStyle',
                message: 'What style of flash cards do you want to use?',
                choices: ['run-basic-cards','run-cloze-cards','quit']
            }
        ]).then(function(choice) {

            if (choice.cardStyle === 'run-basic-cards') {     
              basicCardStart();
            } else if (choice.cardStyle === 'run-cloze-cards'){
              clozeCardStart();
            } else if (choice.cardStyle === 'quit') {
              console.log('Thank you for playing!');
            }

            }) // End Then   

}  // End of flashcards function

/////////////////////////////////////////////////////////////// Functions ///////////////////////////////////////////////////////////

function basicCardStart(){

      if(count < 3){

      inquirer.prompt([
             {
                type: 'input',
                name: 'question',
                message: basicQuestionArray[count].front,
             }
         ]).then(function(answer) {
            if(answer.question ==  basicQuestionArray[count].back){
                console.log("Correct!");
            } else {
                console.log("Incorrect! The correct answer is: " + basicQuestionArray[count].back)
            }
            count++;

            if(count >= 3){
              count = 0;
              flashcards();
            }
            basicCardStart();
         }) // End Then

    } // End If

} // // End basicCardStart function

function clozeCardStart(){

      if(count < 3){

      inquirer.prompt([
             {
                type: 'input',
                name: 'question',
                message: clozeQuestionArray[count].partial()
             }
         ]).then(function(answer) {
            
            count++;

            if(count >= 3){
              count = 0;
              flashcards();
            }
            clozeCardStart();
         }) // End Then

    } // End If

} // // End clozeCardStart function

var questionOneB = new BasicCard("Who was the first president of the United States?","george washington");
var questionTwoB = new BasicCard("What year was the federal reserve banking system get estblished into federal law?","1913");
var questionThreeB = new BasicCard("Who is the current chairperson of the Federal Reserve Board?","janet yellen");
var questionFourB = new BasicCard("What country has the highest debt to GDP ratio?","japan");

var questionOneC = new ClozeCard("george washington was the first president of the United States?","george washington");
var questionTwoC = new ClozeCard("1913 was the year was the federal reserve banking system get estblished into federal law?","1913");
var questionThreeC = new ClozeCard("janet yellen is the current chairperson of the Federal Reserve Board?","janet yellen");
var questionFourC = new ClozeCard("japan country has the highest debt to GDP ratio?","japan");

var basicQuestionArray = [questionOneB,questionTwoB,questionThreeB,questionFourB];
var clozeQuestionArray = [questionOneC,questionTwoC,questionThreeC,questionFourC];

flashcards();
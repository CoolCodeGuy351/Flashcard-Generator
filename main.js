var inquirer = require('inquirer');
var fs = require('fs');
var BasicCard = require("./BasicCard.js");
var ClozeCard = require("./ClozeCard.js");
var score = 0;
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

     

      inquirer.prompt([
             {
                type: 'input',
                name: 'question',
                message: basicQuestionArray[count].front,
             }
         ]).then(function(answer) {
            if(answer.question.toLowerCase() ==  basicQuestionArray[count].back.toLowerCase()){
                score++;
                console.log("Correct!");
            } else {
                console.log("Incorrect! The correct answer is: " + basicQuestionArray[count].back)
            }
            count++;

            if(count >= 4){
              console.log("###############################");
              console.log("\n");
              console.log('You got ' + score + " correct!");
              console.log("\n");
              console.log("###############################");

              count = 0;
              score = 0;

              setTimeout(function(){ 
              flashcards(); 
              }, 3000);

              return;

            } // End if statement

            basicCardStart();

         }) // End Then

} // // End basicCardStart function

function clozeCardStart(){


      inquirer.prompt([
             {
                type: 'input',
                name: 'question',
                message: clozeQuestionArray[count].partial()
             }
         ]).then(function(answer) {
            if(answer.question.toLowerCase() ==  clozeQuestionArray[count].cloze.toLowerCase()){
                score++;
                console.log("Correct! " + clozeQuestionArray[count].fullText);
            } else {
                console.log("Incorrect! " + clozeQuestionArray[count].fullText)
            }
            count++;

            if(count >= 4){
              console.log("###############################");
              console.log("\n");
              console.log('You got ' + score + " correct!");
              console.log("\n");
              console.log("###############################");
              count = 0;
              score = 0;

              setTimeout(function(){ 
              flashcards(); 
              }, 3000);

              return;
              
            }

            clozeCardStart();

         }) // End Then

} // // End clozeCardStart function

var questionOneB = new BasicCard("Who was the first president of the United States?","George Washington");
var questionTwoB = new BasicCard("What year was the federal reserve banking system get estblished into federal law?","1913");
var questionThreeB = new BasicCard("Who is the current chairperson of the Federal Reserve Board?","Janet Yellen");
var questionFourB = new BasicCard("What country has the highest debt to GDP ratio?","Japan");

var questionOneC = new ClozeCard("George Washington was the first president of the United States.","George Washington");
var questionTwoC = new ClozeCard("The federal reserve banking system was estblished into federal law on December 23rd of the year 1913.","1913");
var questionThreeC = new ClozeCard("Janet Yellen is the current chairperson of the Federal Reserve Board?","Janet Yellen");
var questionFourC = new ClozeCard("Of all the developed counties in the world, Japan, has the most debt relative to its GDP.","Japan");

var basicQuestionArray = [questionOneB,questionTwoB,questionThreeB,questionFourB];
var clozeQuestionArray = [questionOneC,questionTwoC,questionThreeC,questionFourC];

flashcards();
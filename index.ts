#! /usr/bin/env node
import inquirer from "inquirer";
//computer will generate a random number
//user input for guessing number
//match both numbers and show result gussed number is right or wrong
const randomNumber = Math.floor(Math.random()*6+1);

const answer = await inquirer.prompt([
    {
        name:"userGuessNumber",
        type:"number",
        message:"Please guess a number",
    }
]);
if (answer.userGuessNumber==randomNumber){
    console.log("Congragulations your guessed number is Right");
}else{
    console.log("Sorry your guessed number is wrong")
}
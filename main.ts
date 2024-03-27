#! /usr/bin/env node

import inquirer from "inquirer";


const randomnumber = Math.floor(Math.random()*10 + 1);


const answer = await inquirer.prompt([
    {
        name : "UserGuestNumber",
        type: "number",
        message: "Please Guess Number Between 1-10"
}]);
if(answer.UserGuestNumber === randomnumber){
    console.log("Congratulation You Slect Correct Number")
}else{
    console.log("Sorry You Slected wrong Number")
}
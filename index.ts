#! /usr/bin/env node

import inquirer from "inquirer";

console.log("\t\t\n || *** WELCOME TO NUMBER GUESSING GAME *** || \t\t\n");

const number = Math.floor(Math.random() * 100);

for (let i = 10; i >= 1; i--) {
  console.log("Chances left", i);
  const answer = await inquirer.prompt([
    {
      message: "Guess a number between (1 - 100) : ",
      type: "number",
      name: "user_answer",
    },
  ]);

  if (
    answer.user_answer >= 1 &&
    answer.user_answer <= 100 &&
    answer.user_answer != "Nan"
  ) {
    if (number == answer.user_answer) {
      console.log("Congratulations! your guess is correct");
      break;
    } else if (answer.user_answer < number) {
      console.log("Number is greater than your guess");
    } else if (answer.user_answer > number) {
      console.log("Number is lesser than your guess");
    }
  } else {
    console.log("Invalid input");
  }
}
console.log("Game end");

"use strict";

// Scores
let humanScore = 0;
let computerScore = 0;

// Logic to get Humans choice
function getHumanChoice() {
  return prompt("Enter your choice");
}

// Logic to get Computers choice
const computersChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computersChoices[Math.floor(Math.random() * computersChoices.length)];
}

// Logic to play the game
function playRound(humanChoice, computerChoice) {
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    console.log("You lose! Scissors beats paper");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    console.log("You lose! Rock beats Scissors");
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    console.log("You win! Paper beats Rock");
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    console.log("You win! Scissors beats paper");
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    console.log("You win! Rock beats Scissors");
  } else {
    console.log("It's a draw");
  }
}

const humanSelection = getHumanChoice().toLowerCase();
const computerSelection = getComputerChoice();

console.log(`Human plays ${humanSelection}`);
console.log(`Computer plays ${computerSelection}`);

playRound(humanSelection, computerSelection);

console.log(`Human score is ${humanScore}`);
console.log(`Computer score is ${computerScore}`);
console.log("---------");

// Declaring the winnner
if (humanScore > computerScore) {
  console.log(`You win! Your score is ${humanScore}`);
} else if (computerScore > humanScore) {
  console.log(`The Computer won! The Computer's score is ${computerScore}`);
} else {
  console.log(`It's a draw`);
}

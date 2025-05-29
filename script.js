"use strict";

// Scores
let humanScore = 0;
let computerScore = 0;

// Logic to get Humans choice
const rockButton = document.querySelector(".rock-btn");
rockButton.addEventListener("click", () => {
  playRound("rock", getComputerChoice());
});

const paperButton = document.querySelector(".paper-btn");
paperButton.addEventListener("click", () => {
  playRound("paper", getComputerChoice());
});

const scissorsButton = document.querySelector(".scissors-btn");
scissorsButton.addEventListener("click", () => {
  playRound("scissors", getComputerChoice());
});

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

// Declaring the winnner
if (humanScore > computerScore) {
  console.log(`You win! Your score is ${humanScore}`);
} else if (computerScore > humanScore) {
  console.log(`The Computer won! The Computer's score is ${computerScore}`);
} else {
  console.log(`It's a draw`);
}

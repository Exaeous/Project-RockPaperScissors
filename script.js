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
    showComputersScore();
    result.textContent = "You lose! Paper beats Rock";
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    showComputersScore();
    result.textContent = "You lose! Scissors beats paper";
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    showComputersScore();
    result.textContent = "You lose! Rock beats Scissors";
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    showHumansScore();
    result.textContent = "You win! Paper beats Rock";
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    showHumansScore();
    result.textContent = "You win! Scissors beats paper";
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    showHumansScore();
    result.textContent = "You win! Rock beats Scissors";
  } else {
    result.textContent = "It's a draw";
  }
}

// Showing the result
let result = document.querySelector(".result");

// Showing the score
let humansScore = document.querySelector(".human-score");
function showHumansScore() {
  humansScore.textContent = humanScore;
}

let computersScore = document.querySelector(".computer-score");
function showComputersScore() {
  computersScore.textContent = computerScore;
}

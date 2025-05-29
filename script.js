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
    result.textContent = "You lose! Paper beats Rock";
    showComputersScore();
    declareWinner();
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    result.textContent = "You lose! Scissors beats paper";
    showComputersScore();
    declareWinner();
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    result.textContent = "You lose! Rock beats Scissors";
    showComputersScore();
    declareWinner();
  } else if (computerChoice === "rock" && humanChoice === "paper") {
    humanScore++;
    result.textContent = "You win! Paper beats Rock";
    showHumansScore();
    declareWinner();
  } else if (computerChoice === "paper" && humanChoice === "scissors") {
    humanScore++;
    result.textContent = "You win! Scissors beats paper";
    showHumansScore();
    declareWinner();
  } else if (computerChoice === "scissors" && humanChoice === "rock") {
    humanScore++;
    result.textContent = "You win! Rock beats Scissors";
    showHumansScore();
    declareWinner();
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

// Ending the game
function disableAllButtons() {
  const buttons = document.getElementsByTagName("button");
  for (let i = 0; i < buttons.length; i++) {
    buttons[i].disabled = true;
  }
}

// Declaring the winner and disabling the buttons
function declareWinner() {
  if (humanScore === 5 && computerScore < 5) {
    result.textContent = "You win";
    disableAllButtons();
  } else if (computerScore === 5 && humanScore < 5) {
    result.textContent = "Computer win's";
    disableAllButtons();
  }
}

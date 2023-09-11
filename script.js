"use strict";

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    console.log("It's a Draw");
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    console.log("You Win! Rock beats Scissors");
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    console.log("You Win! Scissors beats Paper");
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    console.log("You Win! Paper beats Rock");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    console.log("You Lose! Paper beats Rock");
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    console.log("You Lose! Scissors beats Paper");
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    console.log("You Lose! Rock beats Scissors");
  }
  score();
}

function score() {
  if (playerScore === 5) {
    console.log("Player Wins!");
  } else if (computerScore === 5) {
    console.log("Computer Wins!");
  }
}

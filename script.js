"use strict";

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

for (let i = 1; i <= 5; i++) {
  function playRound(playerSelection, computerSelection) {
    if (playerSelection === "rock" && computerSelection === "scissors") {
      playerScore++;
      return "You Win! Rock beats Scissors";
    } else if (
      playerSelection === "scissors" &&
      computerSelection === "paper"
    ) {
      playerScore++;
      return "You Win! Scissors beats Paper";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
      playerScore++;
      return "You Win! Paper beats Rock";
    } else if (playerSelection === "rock" && computerSelection === "paper") {
      computerScore++;
      return "You Lose! Paper beats Rock";
    } else if (
      playerSelection === "paper" &&
      computerSelection === "scissors"
    ) {
      computerScore++;
      return "You Lose! Scissors beats Paper";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
      computerScore++;
      return "You Lose! Rock beats Scissors";
    } else {
      return "It's a Draw";
    }
  }
  const playerSelection = prompt("Enter Player's Choice").toLowerCase();
  const computerSelection = getComputerChoice();

  function game() {
    return playRound(playerSelection, computerSelection);
  }
  console.log("Player Selected", playerSelection);
  console.log("Computer Selected", computerSelection);

  console.log(game());

  console.log("Player Score is", playerScore);
  console.log("Computer Score is", computerScore);
}

if (playerScore > computerScore) {
  console.log("Player Wins!");
} else if (computerScore > playerScore) {
  console.log("Computer Wins!");
} else {
  console.log("It's a Draw!");
}

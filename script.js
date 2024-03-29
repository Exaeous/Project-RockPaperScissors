"use strict";

const rock = document.getElementById("rock-button");
const paper = document.getElementById("paper-button");
const scissors = document.getElementById("scissors-button");

const currentScore = document.getElementsByClassName("score");

const finalPlayerScore = document.getElementById("player-score");
const finalComputerScore = document.getElementById("computer-score");

const container = document.getElementById("container");

const result = document.createElement("div");
const score = document.createElement("div");

const playerPlays = document.createElement("div");
const computerPlays = document.createElement("div");

rock.addEventListener("click", () => playRound("rock", getComputerChoice()));
paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
scissors.addEventListener("click", () =>
  playRound("scissors", getComputerChoice())
);

function getComputerChoice() {
  const gameChoices = ["rock", "paper", "scissors"];
  return gameChoices[Math.floor(Math.random() * gameChoices.length)];
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "It's a Draw";
    container.append(result);
    liveScore();
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Win! Rock beats Scissors";
    container.append(result);
    liveScore();
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Win! Paper beats Rock";
    container.append(result);
    liveScore();
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Win! Scissors beats Paper";
    container.append(result);
    liveScore();
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Lose! Paper beats Rock";
    container.append(result);
    liveScore();
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Lose! Scissors beats Paper";
    container.append(result);
    liveScore();
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    playerPlays.textContent = `You chose ${playerSelection}`;
    computerPlays.textContent = `Computer chose ${computerSelection}`;
    container.append(playerPlays);
    container.append(computerPlays);
    result.textContent = "You Lose! Rock beats Scissors";
    container.append(result);
    liveScore();
  }
}

function liveScore() {
  finalScore();
  finalPlayerScore.textContent = `${playerScore}`;
  finalComputerScore.textContent = `${computerScore}`;
  currentScore.append(finalPlayerScore);
  currentScore.append(finalComputerScore);
}

function finalScore() {
  if (playerScore === 5) {
    score.textContent = "Player Wins!";
    score.style.color = "green";
    score.style.fontSize = "50px";
    container.append(score);
  } else if (computerScore === 5) {
    score.textContent = "Computer Wins!";
    score.style.color = "red";
    score.style.fontSize = "50px";
    container.append(score);
  }
}

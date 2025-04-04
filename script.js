"use strict";

// Logic for Computer choice
const computersChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice =
    computersChoices[Math.floor(Math.random() * computersChoices.length)];
  return computerChoice;
}

getComputerChoice();

// Logic for Human choice

function getHumanChoice() {
  let humanChoice = prompt("Enter your choice");
  return humanChoice;
}

console.log(getHumanChoice());

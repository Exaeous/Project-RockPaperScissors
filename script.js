"use strict";

// Logic for Computer choice
const computersChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  let computerChoice =
    computersChoices[Math.floor(Math.random() * computersChoices.length)];
  return computerChoice;
}

getComputerChoice();

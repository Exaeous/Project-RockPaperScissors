"use strict";

// Logic to get Computers choice
const computersChoices = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return computersChoices[Math.floor(Math.random() * computersChoices.length)];
}

console.log(getComputerChoice());

// Logic to get Humans choice
function getHumanChoice() {
  return prompt("Enter your choice");
}

console.log(getHumanChoice());

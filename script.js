console.log("Hello world")

//Create a function that will randomly return either "Rock", "Paper", "Scissors".
//This function will provide the computer's play, so will be named computerPlay.
//This function will generate a random number, then return one of the abover strings
//depending on the number generated (i.e. 0-0.33 return "Rock", 0.34-0.66 return "Paper", etc.)


function computerPlay() {
    randNum = Math.floor(Math.random() * 100);
    if (33 < randNum && randNum < 66) {
        return "rock";
    } else if (randNum < 33) {
        return "paper";
    } else {
        return "scissors";
    }
}

// console.log("Computer plays " + computerPlay());

//Create a function that plays a single round of Rock-Paper-Scissor.
//The function will take two parameters - one for the players selecetion,
//and one for the computer's selection. It should return a string announcing a winner,
//somthing like "You lose! Paper beats rock!" I plan to have three separate conditionals,
//each addressing a particular outcome with a corresponding return string indicating 
//who won. The playerSelection parameter needs to be case-insensitive, amd it needs to
//be entered via a prompt window.

const promptMessage = "The computer wants to play! Please enter one of the following: rock, paper, or scissors"

let playerSelection = prompt(promptMessage);

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {

    let newAnswer = playerSelection.toLowerCase();

    if (newAnswer == computerSelection) {
        return "It's a tie!";
    } else if (newAnswer == "rock" && computerSelection == "scissors") {
        return "You win! Rock crushes Scissors!"
    } else if (newAnswer == "rock" && computerSelection == "paper") {
        return "You lose! Paper (somehow) smothers Rock!"
    } else if (newAnswer == "scissors" && computerSelection == "paper") {
        return "You win! Scissors cut up Paper!"
    } else if (newAnswer == "scissors" && computerSelection == "rock") {
        return "You lose! Rock crushes scissors!"
    } else if (newAnswer == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors cut up Paper!"
    } else if (newAnswer == "paper" && computerSelection == "rock") {
        return "You win! Paper (somehow) smothers Rock"
    }
}

console.log(playRound(playerSelection, computerSelection));






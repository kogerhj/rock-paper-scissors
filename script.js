console.log("Hello world")

//Create a function that will randomly return either "Rock", "Paper", "Scissors".
//This function will provide the computer's play, so will be named computerPlay.
//This function will generate a random number, then return one of the abover strings
//depending on the number generated (i.e. 0-0.33 return "Rock", 0.34-0.66 return "Paper", etc.)


function computerPlay() {
    randNum = Math.floor(Math.random() * 100);
    if (33 < randNum && randNum< 66) {
        return "Rock";
    } else if (randNum < 33) {
        return "Paper"; 
    } else {
        return "Scissors";
    }
}

// console.log("Computer plays " + computerPlay());

//Create a function that plays a single round of Rock-Paper-Scissor.
//The function will take two parameters - one for the players selecetion,
//and one for the computer's selection. It should return a string announcing a winner,
//somthing like "You lose! Paper beats rock!" I plan to have three separate conditionals,
//each addressing a particular outcome with a corresponding return string indicating 
//who won. The playerSelection parameter needs to be case-insensitive.

const playerSelection = "Scissors";

const computerSelection = computerPlay();

function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return "It's a tie!";
    } else if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You win! Rock crushes Scissors!"
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return "You lose! Paper (somehow) smothers Rock!"
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You win! Scissors cut up Paper!"
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return "You lose! Rock crushes scissors!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return "You lose! Scissors cut up Paper!"
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return "You win! Paper (somehow) smothers Rock"
    }
}



console.log(playRound(playerSelection, computerSelection));



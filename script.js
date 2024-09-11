
function getComputerChoice() {
    let optionsArray = ["rock", "paper", "scissors"]; 
    randNum = Math.floor(Math.floor(Math.random() * 3));
    return optionsArray[randNum];
}

console.log("Computer plays " + getComputerChoice());

//This is the message users get when they open the webpage, prompting them to enter their play
const promptMessage = "The computer wants to play! Please enter one of the following: rock, paper, or scissors"

//This will tie the above promptMessage variable to the playerSelection variable, which will be used
//in the playRound() function
// let playerSelection = prompt(promptMessage);

let playerSelection = "rock";

//This will tie the computerPlay function above to the computerSelection parameter in the
//playRound function
const computerSelection = getComputerChoice();

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
    } else {
        return "Sorry, that is not a valid answer - please check spelling and try again."
    }
}

function game() {
   for (let i = 1; i <= 5; i++) {
      console.log(playRound(playerSelection, computerSelection))
   }
}
   





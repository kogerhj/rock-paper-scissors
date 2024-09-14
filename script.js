
const promptMessage = "The computer wants to play! Please enter one of the following: rock, paper, or scissors"


function getComputerChoice() {
    let optionsArray = ["rock", "paper", "scissors"];
    randNum = Math.floor(Math.floor(Math.random() * 3));
    return optionsArray[randNum];
}

function getHumanChoice() {
    let answer = prompt(promptMessage).toLowerCase();
    return answer;
}

const computerSelection = getComputerChoice();

const playerSelection = getHumanChoice();




function game() {

    let humanScore = 0;

    let computerScore = 0;

    function playRound(playerSelection, computerSelection) {

        if (playerSelection == computerSelection) {
            return "It's a tie!";
        } else if (playerSelection == "rock" && computerSelection == "scissors") {
            humanScore++;
            // return "You win! Rock crushes Scissors!"
        } else if (playerSelection == "rock" && computerSelection == "paper") {
            computerScore++;
            // return "You lose! Paper (somehow) smothers Rock!"
        } else if (playerSelection == "scissors" && computerSelection == "paper") {
            humanScore++;
            // return "You win! Scissors cut up Paper!"
        } else if (playerSelection == "scissors" && computerSelection == "rock") {
            computerScore++;
            // return "You lose! Rock crushes scissors!"
        } else if (playerSelection == "paper" && computerSelection == "scissors") {
            computerScore++;
            // return "You lose! Scissors cut up Paper!"
        } else if (playerSelection == "paper" && computerSelection == "rock") {
            humanScore++;
            // return "You win! Paper (somehow) smothers Rock"
        } else {
            // return "Sorry, that is not a valid answer - please check spelling and try again."
        }
    }

    for (let i = 0; i <= 1; i++) {
        getComputerChoice();
        getHumanChoice();

        
        playRound(playerSelection, computerSelection);
        console.log(humanScore, computerScore);
    }
}

game();








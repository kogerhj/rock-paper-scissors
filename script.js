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

console.log(computerPlay());



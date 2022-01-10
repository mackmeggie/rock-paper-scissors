
const computerSelection = computerPlay();
let playerSelection = prompt("Please select an option: rock, paper or scissors.")

let playerScore = 0;
let computerScore = 0;

// create function for computer to randomly select rock, paper, or scissors//
function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3);
    return options[random]
}

// create function to play 1 round between computer and player//
function oneRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() == "rock"  && computerSelection == "scissors") {
        playerScore++;
        console.log("You win! Rock beats Scissors.")
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock") {
        computerScore++;
        console.log("You lost. Rock beats Scissors.")
    }

    else if (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper") {
        playerScore++;
        console.log("You win! Scissors beats paper.")
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") {
        computerScore++;
        console.log("You lost. Scissors beats paper.")
    }

    else if (playerSelection.toLowerCase() == "rock" && computerSelection == "paper") {
        computerScore++;
        console.log("You lost. Paper beats rock.")
    }

    else if (playerSelection.toLowerCase() == "paper" && computerSelection == "paper") {
        playerScore++;
        console.log("You win! Paper beats rock.")
    }

    else if (playerSelection.toLowerCase() == computerSelection) {
        console.log("You tied! You and the computer selected the same option.")
    } 
    
}

// create function to play 5 rounds //
function game() {
    for(var i=0; i<=4; i++) {
        const computerSelection = computerPlay();
        let playerSelection = prompt("Please select an option: rock, paper or scissors.")
        oneRound(playerSelection, computerSelection);
        console.log("Player's score = " + playerScore);
        console.log("Computer's score = " + computerScore);
    }
    if (playerScore > computerScore) {
        console.log("You beat the computer!")
    }
    else if (playerScore == computerScore) {
        console.log("You tied with the computer!")
    }
    else {
        console.log("Oh no! You lost to the computer!")
    }
}

game();
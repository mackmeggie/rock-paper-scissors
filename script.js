
const computerSelection = computerPlay();

let playerScore = 0;
let computerScore = 0;
let roundCount = 0;

// create function for computer to randomly select rock, paper, or scissors//
function computerPlay() {
    const options = ["rock", "paper", "scissors"]
    let random = Math.floor(Math.random() * 3);
    return options[random]
}

//create function to track 5 rounds and announce winner
function fullGame(roundCount, playerScore, computerScore) {
    if (roundCount == 5 && playerScore > computerScore){
       alert("You won! You beat the computer!") 
    }

    else if (roundCount == 5 && playerScore < computerScore) {
        alert("You lost! Computers will take over the world!")
    }
}

// create function to play 1 round between computer and player//
function oneRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock'  && computerSelection == "scissors") {
        playerScore++;
        roundCount++;
        document.getElementById('container').textContent = "You win! Rock beats Scissors.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == "scissors" && computerSelection == "rock") {
        computerScore++;
        roundCount++;
        document.getElementById('container').textContent = "You lost. Rock beats Scissors.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        playerScore++;
        roundCount++;
        document.getElementById('container').textContent = "You win! Scissors beats paper.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == "paper" && computerSelection == "scissors") {
        computerScore++;
        roundCount++;
        document.getElementById('container').textContent = "You lost. Scissors beats paper.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == "rock" && computerSelection == "paper") {
        computerScore++;
        roundCount++
        document.getElementById('container').textContent = "You lost. Paper beats rock.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == "paper" && computerSelection == "paper") {
        playerScore++;
        roundCount++;
        document.getElementById('container').textContent = "You win! Paper beats rock.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }

    else if (playerSelection == computerSelection) {
        roundCount++;
        document.getElementById('container').textContent = "You tied! You and the computer selected the same option.";
        document.getElementById('score').textContent = "Round:" + roundCount + "\nPlayer Score:" + playerScore + "\nComputer Score:" + computerScore;
    }
}



const Rock = document.querySelector('#Rock');

Rock.addEventListener('click', () => {
    let playerSelection = 'rock';
    const computerSelection = computerPlay();
    oneRound(playerSelection, computerSelection);
    fullGame(roundCount, playerScore, computerScore);
});

const Paper = document.querySelector('#Paper');

Paper.addEventListener('click', () => {
    let playerSelection = 'paper';
    const computerSelection = computerPlay();
    oneRound(playerSelection, computerSelection);
    fullGame(roundCount, playerScore, computerScore);
});

const Scissors = document.querySelector('#Scissors');

Scissors.addEventListener('click', () => {
    let playerSelection = 'scissors';
    const computerSelection = computerPlay();
    oneRound(playerSelection, computerSelection);
    fullGame(roundCount, playerScore, computerScore);
});


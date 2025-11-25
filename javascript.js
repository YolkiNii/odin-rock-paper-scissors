let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const computerChoice = Math.floor(Math.random() * 3);
    let outcome = "";

    switch(computerChoice) {
        case 0:
            outcome = "rock";
            break;
        case 1:
            outcome = "paper";
            break;
        case 2:
            outcome = "scissors";
            break;
        default:
            outcome = "rock";
    }

    return outcome;
}

function getHumanChoice() {
    const humanChoice = prompt("Choose rock, paper, or scissors.");

    return humanChoice;
}

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowered = humanChoice.toLowerCase();

    if (humanChoiceLowered === computerChoice) {
        console.log(
            `You and the computer both picked "${humanChoiceLowered}". It's a draw!`
        );
        return;
    }

    if (
        (humanChoiceLowered === "rock" && computerChoice === "scissors") || 
        (humanChoiceLowered === "scissors" && computerChoice === "paper") ||
        (humanChoiceLowered === "paper" && computerChoice === "rock")
    ) {
        console.log(
            `You won! You chose ${humanChoiceLowered}, the computer chose ${computerChoice}.`
        );
    }
    else {
        console.log(
            `You lost! You chose ${humanChoiceLowered}, the computer chose ${computerChoice}.`
        )
    }

    return;
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log("Hello World");
console.log(humanSelection);
console.log(computerSelection);

playRound(humanSelection, computerSelection);
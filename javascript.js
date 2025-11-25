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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
            humanScore++;
        }
        else {
            console.log(
                `You lost! You chose ${humanChoiceLowered}, the computer chose ${computerChoice}.`
            )
            computerScore++;
        }

        return;
    }

    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());
    playRound(getHumanChoice(), getComputerChoice());

    if (humanScore > computerScore) {
        console.log("You won with a score of " + humanScore + "!");
    }
    else if (humanScore < computerScore) {
        console.log(
            "You lost, the computer scored " + computerScore +
            " and you scored " + humanScore + "."
        )
    }
    else {
        console.log(
            "You and the computer both scored " + humanScore + ", " +
            "the game is a draw."
        );
    }
}

playGame();
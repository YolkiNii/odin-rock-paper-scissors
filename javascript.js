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
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const humanChoiceLowered = humanChoice.toLowerCase();
    const resultReport = document.querySelector("#results");

    if (humanChoiceLowered === computerChoice) {
        resultReport.textContent = `You and the computer both picked "${humanChoiceLowered}". It's a draw!`
        return "draw";
    }

    if (
        (humanChoiceLowered === "rock" && computerChoice === "scissors") || 
        (humanChoiceLowered === "scissors" && computerChoice === "paper") ||
        (humanChoiceLowered === "paper" && computerChoice === "rock")
    ) {
        resultReport.textContent = `You won! You chose ${humanChoiceLowered}, the computer chose ${computerChoice}.`;
        return "human";
    }
    resultReport.textContent = `You lost! You chose ${humanChoiceLowered}, the computer chose ${computerChoice}.`

    return "computer";
}

function createSelectionButtons() {
    const selections = ["Rock", "Paper", "Scissors"];

    const selectionBtns = selections.map((selection) => {
        const selectionBtn = document.createElement("button");
        selectionBtn.textContent = selection;
        return selectionBtn
    });

    return selectionBtns;
}

const body = document.querySelector("body");
const selectionsContainer = document.createElement("div")
const selectionButtons = createSelectionButtons();

for (const selection of selectionButtons) {
    selectionsContainer.appendChild(selection);
}
body.appendChild(selectionsContainer);
selectionsContainer.addEventListener("click", (event) => {
    const selection = event.target.textContent;
    const resultReport = document.querySelector("#results");
    switch (playRound(selection, getComputerChoice())) {
        case "human":
            humanScore++;
            break;
        case "computer":
            computerScore++;
            break;
    };

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore > computerScore) {
            resultReport.textContent = "You won with a score of " + humanScore + "!";
        }
        else {
            resultReport.textContent = "You lost, the computer scored " + computerScore +
                " and you scored " + humanScore + "."
        }
        humanScore = 0;
        computerScore = 0;
    }
    else {
        ongoingScores = document.createTextNode(
            ` Your score: ${humanScore} Computer score: ${computerScore}.`
        )
        resultReport.appendChild(ongoingScores);
    }
});
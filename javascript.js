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

console.log("Hello World");
console.log(getHumanChoice())
console.log(getComputerChoice())
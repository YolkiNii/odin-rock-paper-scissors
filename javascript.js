console.log("Hello World");

function getComputerChoice() {
    const choice = Math.floor(Math.random() * 3)
    let outcome = ""

    switch(choice) {
        case 0:
            outcome = "rock"
            break
        case 1:
            outcome = "paper"
            break
        case 2:
            outcome = "scissors"
            break
        default:
            outcome = "rock"
    }

    return outcome
}

console.log(getComputerChoice())
// creo las variables que van a tener los puntajes de los jugadores (usuario y compu)
let scoreHuman = 0;
let scorePc = 0;

// funcion para obtener eleccion de usuario:
function getHumanChoice(){
    let userInput = prompt("Please enter rock, paper or scissors: ").toLowerCase();
    while (userInput !== "rock" && userInput !== "paper" && userInput !== "scissors"){
        userInput =  prompt("Invalid choice, please enter rock, paper or scissors: ").toLowerCase();
    }
    return userInput;
};

// funcion para que la compu haga su jugada:
function getComputerChoice(){
    let randomNumber = Math.floor(Math.random()*3); /* Aqui genero tres posibles numeros random y entero */
    if (randomNumber === 0){
        return "rock";
    } else if (randomNumber === 1){
        return "paper";
    } else {
        return "scissors";
    }
};

// let humanChoice = getHumanChoice();
// let computerChoice = getComputerChoice();

// funcion para ir sumando los puntajes:   --> para eso tuve que decirle a la pc cuales son las jugadas ganadoras
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It is a Tie!";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ){ scoreHuman++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        scorePc++;
        return "Bad luck, you lost. You can try again" ;
    };
}

// funcion para jugar diferentes rondas:
function playGame() {
    scoreHuman = 0;
    scorePc = 0;
    for (let i = 0; i < 3; i++) {
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
        console.log(`Round: ${i + 1}`);
        console.log(`Your choice: ${humanChoice}`);
        console.log(`Computer choice: ${computerChoice}`);
        console.log(playRound(humanChoice, computerChoice));
        console.log(`Your score: ${scoreHuman}`);
        console.log(`Computer score: ${scorePc}`);
        console.log("-------------------------------");
    };
    if (scoreHuman > scorePc){
        console.log("Congratulations! YOU WIN the game!!");
    } else if( scoreHuman < scorePc){
        console.log("Sorry, You lost the game");
    } else {
        console.log("You tied the game.");
    }
};


playGame();
// variables para almacenar los puntajes de los jugadores (usuario y computadora)
let scoreHuman = 0;
let scorePc = 0;

// funcion para obtener la eleccion de la computadora:
function getComputerChoice(){
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * choices.length); /* Aqui genero tres posibles numeros random y entero */
    return choices[randomIndex];
};

// funcion para jugar una ronda y ver quien gana--> para eso tuve que decirle a la pc cuales son las jugadas ganadoras
function playRound(humanChoice, computerChoice){
    if (humanChoice === computerChoice) {
        return "It is a Tie! You can try again";
    } else if ((humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
        ){ scoreHuman++;
            return `You win! ${humanChoice} beats ${computerChoice}`;
    } else {
        scorePc++;
        return `Bad luck, you lost. ${computerChoice} beats ${humanChoice} You can try again` ;
    };
};

// Función para actualizar el resultado y puntajes en el DOM
function updateResults(result) {
    document.getElementById('result').textContent = result;
    document.getElementById('score').textContent = `Score - You: ${scoreHuman} Computer: ${scorePc}`;
};

// Usando el DOM y eventos para manejar la eleccion del jugador
document.getElementById('rock').addEventListener('click', function() {
    let computerChoice = getComputerChoice(); // Obtener la elección de la computadora
    let result = playRound('rock', computerChoice); // Jugar la ronda y obtener el resultado
    updateResults(result); // Actualizar el DOM con el resultado y los puntajes
});

document.getElementById('paper').addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    let result = playRound('paper', computerChoice);
    updateResults(result);
});

document.getElementById('scissors').addEventListener('click', function(){
    let computerChoice = getComputerChoice();
    let result = playRound('scissors', computerChoice);
    updateResults(result);
});

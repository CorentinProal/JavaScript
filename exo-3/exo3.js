// Fonction pour obtenir le choix du joueur
function getPlayerChoice(playerInput) {
    // Convertir l'entrée en minuscules
    const normalizedInput = playerInput.toLowerCase();
    // Liste des choix valides
    const validChoices = ['rock', 'paper', 'scissors'];

    // Vérifier si l'entrée est valide
    if (validChoices.includes(normalizedInput)) {
        return normalizedInput;
    } else if (normalizedInput === 'bomb') {
        return 'bomb'; // Code secret pour gagner
    } else {
        console.error("Invalid choice. Please choose 'rock', 'paper', or 'scissors'.");
        return null;
    }
}

// Fonction pour obtenir le choix de l'ordinateur
function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

// Fonction pour déterminer le gagnant
function findWinner(playerChoice, computerChoice) {
    if (playerChoice === 'bomb') {
        return 'Won'; // Le code secret fait toujours gagner
    }

    if (playerChoice === computerChoice) {
        return 'Tied';
    }

    if (
        (playerChoice === 'rock' && computerChoice === 'scissors') ||
        (playerChoice === 'paper' && computerChoice === 'rock') ||
        (playerChoice === 'scissors' && computerChoice === 'paper')
    ) {
        return 'Won';
    } else {
        return 'Lost';
    }
}

// Fonction pour jouer le jeu
function playGame() {
    // Demander le choix du joueur
    var playerInput = prompt("Your choice (rock, paper, scissors) ?");

    // Obtenir le choix du joueur en validant l'entrée
    const uChoice = getPlayerChoice(playerInput);

    // Si le choix du joueur est invalide, arrêter la fonction
    if (uChoice === null) return;

    // Obtenir le choix de l'ordinateur
    const computerChoice = getComputerChoice();

    // Afficher les choix dans la console
    console.log(`Player choice: ${uChoice}`);
    console.log(`Computer choice: ${computerChoice}`);

    // Déterminer et afficher le résultat
    const result = findWinner(uChoice, computerChoice);
    console.log(`Result: ${result}`);
}

// Lancer le jeu
playGame();

function getComputerChoice() {
    // I have decided to choose based on whether the forst 2 digits are: even, odd or prime
    let randomNumber = Math.random() * 100;
    let number = Math.floor(randomNumber);

    function isPrime(n) { 
        if (n <= 1) return false; 
        if (n == 2 || n == 3) return true; 
        if (n % 2 == 0 || n % 3 == 0) return false; 
        for (let i = 5; i <= Math.sqrt(n); i += 6) 
            if (n % i == 0 || n % (i + 2) == 0) return false; 
        return true; 
    }

    function getFirstTwoDigits(num) {
        let numString = num.toString();
        let firstTwoDigitsString = numString.slice(0, 2);
        return parseInt(firstTwoDigitsString);
    }

    let firstTwoDigit = getFirstTwoDigits(number);
    let result;

    if (isPrime(number)) {
        result = "rock";
    } else if (firstTwoDigit % 2 === 0) {
        result = "paper";
    } else {
        result = "scissors";
    }
    
    return result;
}

let humanChoice;
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    const rules = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (humanChoice === computerChoice) {
        displayResult.innerHTML = `Both choices are the same: ${humanChoice}. It's a tie!`;
    } else if (rules[humanChoice] === computerChoice) {
        displayResult.innerHTML = `"${humanChoice}" is stronger than "${computerChoice}". You win!!!`;
        humanScore++;
    } else {
        displayResult.innerHTML = `"${computerChoice}" is stronger than "${humanChoice}". You lose!!`;
        computerScore++;
    }
    updateScore();
    checkWinner();
}

function updateScore() {
    scoreDisplay.innerHTML = `Human: ${humanScore} - Computer: ${computerScore}`;
}

function checkWinner() {
    if (humanScore >= 5) {
        displayResult.innerHTML = "You reached 5 points! You win the game!";
        resetGame();
    } else if (computerScore >= 5) {
        displayResult.innerHTML = "Computer reached 5 points! You lose the game!";
        resetGame();
    }
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;
    updateScore();
}

let buttonRock = document.createElement("button");
let buttonPaper = document.createElement("button");
let buttonScissors = document.createElement("button");

buttonRock.textContent = "Rock";
buttonPaper.textContent = "Paper";
buttonScissors.textContent = "Scissors";

let buttonStyle = "background-color: #333; border: 2px dotted; border-radius: 20px; padding: 15px; font-size: 30px; text-align: center; cursor: pointer; max-width: 190px; color: #fff; text-decoration: none;";
buttonRock.setAttribute("style", buttonStyle);
buttonPaper.setAttribute("style", buttonStyle);
buttonScissors.setAttribute("style", buttonStyle);

buttonRock.addEventListener("click", function(){
    humanChoice = "rock";
    playRound(humanChoice, getComputerChoice());
});

buttonPaper.addEventListener("click", function(){
    humanChoice = "paper";
    playRound(humanChoice, getComputerChoice());
});

buttonScissors.addEventListener("click", function(){
    humanChoice = "scissors";
    playRound(humanChoice, getComputerChoice());
});

let displayResult = document.createElement("div");
let scoreDisplay = document.createElement("div");

displayResult.setAttribute("style", "margin-top: 20px; font-size: 24px; color: #000;");
scoreDisplay.setAttribute("style", "margin-top: 10px; font-size: 20px; color: #000;");

document.body.appendChild(buttonRock);
document.body.appendChild(buttonPaper);
document.body.appendChild(buttonScissors);
document.body.appendChild(scoreDisplay);
document.body.appendChild(displayResult);



// Initial score display
updateScore();

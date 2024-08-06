function getComputerChoice() {
    // Generate a random number and scale it up to a range
    let randomNumber = Math.random() * 100;

    // Convert the random number into an integer
    let number = Math.floor(randomNumber);

    // A function to test whether a number is prime
    function isPrime(n) { 
        if (n <= 1) 
            return false; 
        
        if (n == 2 || n == 3) 
            return true; 
        
        if (n % 2 == 0 || n % 3 == 0) 
            return false; 
        
        for (var i = 5; i <= Math.sqrt(n); i = i + 6) 
            if (n % i == 0 || n % (i + 2) == 0) 
                return false; 
        
        return true; 
    }
    
    // Function to get the first 2 digits of a number
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
        result = "scissors"; // Corrected spelling to "scissors"
    }
        
    return result;
}

function getHumanChoice() {
    // Prompt the user for input and convert it to lowercase
    let humanChoice;
    do {
        humanChoice = prompt("Enter either rock, paper, or scissors").toLowerCase();
    } while (!["rock", "paper", "scissors"].includes(humanChoice));

    return humanChoice; // Return the valid user choice
}

let humanScore = 0; // Define outside of the function to keep track across rounds
let computerScore = 0; // Define outside of the function to keep track across rounds

function playRound(humanChoice, computerChoice) {
    const rules = {
        'rock': 'scissors',
        'paper': 'rock',
        'scissors': 'paper'
    };

    if (humanChoice === computerChoice) {
        console.log(`Both choices are the same: ${humanChoice}. It's a tie!`);
    } else if (rules[humanChoice] === computerChoice) {
        console.log(`"${humanChoice}" is stronger than "${computerChoice}". You win!!!`);
        humanScore++;
    } else {
        console.log(`"${computerChoice}" is stronger than "${humanChoice}". You lose!!`);
        computerScore++;
    }
}

// Run multiple rounds
for (let i = 1; i <= 5; i++) {
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();

    playRound(humanChoice, computerChoice);

    // Output the scores after each round
    console.log(`Scores after round ${i}: Human ${humanScore} - Computer ${computerScore}`);
}

// Display final scores
console.log(`Final Scores: Human ${humanScore} - Computer ${computerScore}`);

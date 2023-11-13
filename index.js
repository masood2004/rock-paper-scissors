let userScore = 0;
let computerScore = 0;
let roundScore = 0;
const userScoreSpan = document.getElementById('user-score');
const computerScoreSpan = document.getElementById('computer-score');
const scoreBoardDiv = document.querySelector('.score-board');
const resultDiv = document.querySelector('.result > p');
const rockDiv = document.getElementById('r');
const paperDiv = document.getElementById('p');
const scissorDiv = document.getElementById('s');
const roundNum = document.getElementById("round-number");

function getComputerChoice() {
    const choices = ['r', 'p', 's'];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === 'r') return "Rock";
    if (letter === 'p') return "Paper";
    if (letter === 's') return "Scissor";
}

function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    userScore++;
    roundScore++;
    roundNum.innerHTML = roundScore;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats  ${convertToWord(computerChoice)}${smallCompWord} . You win!🔥`
    userChoiceDiv.classList.add('green-glow');
    setTimeout( () => {
        userChoiceDiv.classList.remove('green-glow');
    }, 300);
}

function lose(userChoice, computerChoice) {
    const userChoiceDiv = document.getElementById(userChoice);
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    computerScore++;
    roundScore++;
    roundNum.innerHTML = roundScore;
    userScoreSpan.innerHTML = userScore;
    computerScoreSpan.innerHTML = computerScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to  ${convertToWord(computerChoice)}${smallCompWord} . You lost...😓`
    userChoiceDiv.classList.add('red-glow');
    setTimeout( () => {
        userChoiceDiv.classList.remove('red-glow');
    }, 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "user".fontsize(3).sub();
    const userChoiceDiv = document.getElementById(userChoice);
    roundScore++;
    roundNum.innerHTML = roundScore;
    resultDiv.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals  ${convertToWord(computerChoice)}${smallCompWord} . It's a Draw -_-`
    userChoiceDiv.classList.add('gray-glow');
    setTimeout( () => {
        userChoiceDiv.classList.remove('gray-glow');
    }, 300);
}

function game(userChoice) {
    const computerChoice = getComputerChoice();

    switch(userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "sr":
        case "ps":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}   

rockDiv.addEventListener('click', () => {
    game('r');
});

paperDiv.addEventListener('click', () => {
    game('p');
});

scissorDiv.addEventListener('click', () => {
    game('s');
});
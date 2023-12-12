
 
  
function getComputerChoice() {
    
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';
  let answer;
  random = Math.floor(Math.random() * 3);

  if (random === 0) {
    answer = rock;
  } else if (random === 1) {
    answer = paper;
  } else {
    answer = scissors;
  }  
  return answer;
}

let random; 


function singleRound(playerSelection, computerSelection) {
  
  computerSelection = getComputerChoice().toUpperCase();

  if (computerSelection == playerSelection) {
    referee = 'tie';
  } else if (computerSelection == 'ROCK' && playerSelection == 'SCISSORS') {
    referee = 'computer wins';
  } else if (computerSelection == 'ROCK' && playerSelection == 'PAPER') {
    referee = 'you win';
  } else if (computerSelection == 'PAPER' && playerSelection == 'SCISSORS') {
    referee = 'you win';
  } else if (computerSelection == 'PAPER' && playerSelection == 'ROCK') {
    referee = 'computer wins';
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
    referee = 'computer wins';
  } else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
    referee = 'you win';
  }

  return referee;
}

let referee;
let computerSelection;
let playerSelection;

let rockBtn = document.querySelector('#rock');
let paperBtn = document.querySelector('#paper');
let scissorsBtn = document.querySelector('#scissors');
let resultsDiv = document.querySelector('#results');

let yourScore = 0;
let computerScore = 0;

rockBtn.addEventListener('click', () => {
  singleRound('ROCK', computerSelection);
  console.log(referee);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

paperBtn.addEventListener('click', () => {
  singleRound('PAPER', computerSelection);
  console.log(referee);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});

scissorsBtn.addEventListener('click', () => {
  singleRound('SCISSORS', computerSelection);
  console.log(referee);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
  }
});




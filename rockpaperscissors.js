
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
let resultsDivTwo = document.querySelector('#resultsTwo');
let refereeDiv = document.querySelector('#referee');
let resultsDivFull = document.querySelector('.resultsdivfull');
let fullDiv = document.querySelector('.fulldiv');

let yourScore = 0;
let computerScore = 0;

addEventListener('load', () => {
  resultsDiv.textContent = 'Hit one button to start!'
})

rockBtn.addEventListener('click', () => {
  singleRound('ROCK', computerSelection);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} `;
  resultsDivTwo.textContent = `Computer\'s score: ${computerScore}`;
  refereeDiv.textContent = `${referee}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Play again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Try again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  }
});

paperBtn.addEventListener('click', () => {
  singleRound('PAPER', computerSelection);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} `;
  resultsDivTwo.textContent = `Computer\'s score: ${computerScore}`;
  refereeDiv.textContent = `${referee}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Play again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Try again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  }
});

scissorsBtn.addEventListener('click', () => {
  singleRound('SCISSORS', computerSelection);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  resultsDiv.textContent = `Your score: ${yourScore} `;
  resultsDivTwo.textContent = `Computer\'s score: ${computerScore}`;
  refereeDiv.textContent = `${referee}`;
  if (yourScore >= 5) {
    resultsDiv.textContent = 'Your Score is 5, you won!!!';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Play again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  } else if (computerScore >= 5) {
    resultsDiv.textContent = 'You lost! The computer has won 5 times.';
    resultsDivTwo.textContent = '';
    refereeDiv.textContent = '';
    rockBtn.disabled = true;
    paperBtn.disabled = true;
    scissorsBtn.disabled = true;
    let reloadButton = document.createElement('button');
    reloadButton.setAttribute('id', 'reloadButton');
    reloadButton.textContent = 'Try again';
    reloadButton.addEventListener('click', () => {
      location.reload();
    });
    fullDiv.appendChild(reloadButton);
  }
});








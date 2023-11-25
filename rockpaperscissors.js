
 
  
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
  
  playerSelection = prompt('enter something').toUpperCase();
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

  console.log(referee);
}

let referee;
let computerSelection;
let playerSelection;


function game() {
  for (i = 0; i < 5; i++) {
    singleRound(playerSelection, computerSelection);
  }
}

game();



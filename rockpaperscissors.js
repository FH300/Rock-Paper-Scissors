
 
  
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

  return referee;
}

let referee;
let computerSelection;
let playerSelection;


function game() {
  
  let yourScore = 0;
  let computerScore = 0 ;
  let yourCount = 'Your score is: '
  let computerCount = 'The computers score is: '
  
  for (i = 0; i < 5; i++) {
    singleRound(playerSelection, computerSelection);
    console.log(referee);
  
    if (referee == 'computer wins') {
      computerScore++;
    } else if (referee == 'you win') {
      yourScore++;
    }

    console.log( yourCount + yourScore);
    console.log(computerCount + computerScore);    
  }
}

game();



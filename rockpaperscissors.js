
 let random; 
  
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


function singleRound(playerSelection, computerSelection) {

  let referee;
  
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
  }else if (computerSelection == 'SCISSORS' && playerSelection == 'PAPER') {
    referee = 'computer wins';
  }else if (computerSelection == 'SCISSORS' && playerSelection == 'ROCK') {
    referee = 'you win';
  }
  return referee;
}


const computerSelection = getComputerChoice().toUpperCase();
let playerSelection;


function game() {

  let refereeanswer;
  let round = singleRound(computerSelection, playerSelection);
  
  playerSelection = prompt('Enter Rock, Paper, Scissors').toUpperCase();
  getComputerChoice();
  console.log(random);
  console.log(computerSelection);
  console.log(playerSelection);

  if (round == 'tie') {
    refereeanswer = 'tie';
    console.log(refereeanswer);
  } else if (round == 'you win') {
    refereeanswer = 'you win';
    console.log(refereeanswer);
  } else {
    refereeanswer = 'computer wins';
  } return refereeanswer;
}

for(let i = 0; i < 5; i++) {
  game();
}

console.log(game());




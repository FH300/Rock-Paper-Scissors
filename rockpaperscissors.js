
 
  
function getComputerChoice() {
    
  let random = Math.floor(Math.random() * 3);
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';
  let answer;

  if (random === 0) {
    answer = rock;
  } else if (random === 1) {
    answer = paper;
  } else {
    answer = scissors;
  }  
  return answer;
}

//console.log(getComputerChoice());


function getMyChoice() {
  
  const answerRock = 'Rock';
  const answerPaper = 'Paper';
  const answerScissors = 'Scissors';
  let answer;
  
  let x = prompt('Choose one: Rock, Paper, Scissors!').toUpperCase();
  if (x == 'ROCK') {
    answer = answerRock;
  } else if (x == 'PAPER') {
    answer = answerPaper;
  } else if (x == 'SCISSORS') {
    answer = answerScissors;
  }
  return answer;
}

//console.log(getMyChoice());



function singleRound(playerSelection, computerSelection) {
  
  
  let referee;
  
  if (computerSelection == playerSelection) {
    referee = 'tie';
  } else {
    referee = 'win';
  }
  return referee;
}


const computerSelection = getComputerChoice();
const playerSelection = getMyChoice();
console.log(computerSelection);
//console.log(playerSelection);
console.log(singleRound(playerSelection, computerSelection));



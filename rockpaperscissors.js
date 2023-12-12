
 
  
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


//function game() {
  
  //let yourScore = 0;
  //let computerScore = 0 ;
  //let yourCount = 'Your score is: '
  //let computerCount = 'The computers score is: '
  
  //for (i = 0; i < 5; i++) {
    //singleRound(playerSelection, computerSelection);
    //console.log(referee);
  
    //if (referee == 'computer wins') {
      //computerScore++;
    //} else if (referee == 'you win') {
      //yourScore++;
    //}

    //console.log( yourCount + yourScore);
    //console.log(computerCount + computerScore);    
  //}

  //let winner;
  
  //if (yourScore > computerScore) {
    //winner = 'YOU WON THE GAME!!'
  //} else if (yourScore < computerScore) {
    //winner = 'YOU LOST, GAME OVER!!'
  //} else {
    //winner = 'IT\'S A TIE, YOU NEED TO PLAY AGAIN!!'
  //}
   //console.log(winner);
//}

//game();


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
  console.log(yourScore);
  console.log(computerScore);
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
});

paperBtn.addEventListener('click', () => {
  singleRound('PAPER', computerSelection);
  console.log(referee);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  console.log(yourScore);
  console.log(computerScore);
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
});

scissorsBtn.addEventListener('click', () => {
  singleRound('SCISSORS', computerSelection);
  console.log(referee);
  if (referee == 'you win') {
    yourScore++;
  } else if (referee == 'computer wins') {
    computerScore++;
  }
  console.log(yourScore);
  console.log(computerScore);
  resultsDiv.textContent = `Your score: ${yourScore} ` + `Computer\'s score: ${computerScore}`;
});




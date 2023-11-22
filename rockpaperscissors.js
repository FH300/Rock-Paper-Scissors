
 
  
function getComputerChoice() {
    
  let random = Math.floor(Math.random() * 3);
  const rock = 'Rock';
  const paper = 'Paper';
  const scissors = 'Scissors';
  let answer

  if (random === 0) {
    answer = rock;
  } else if (random === 1) {
    answer = paper;
  } else {
    answer = scissors;
  }  
  return answer;
}


let x;
let y;
let answerTrue = 'true';

function test() {
  prompt('hallo', x);

  if (x === 2) {
  answerTrue = answerTrue;
}
return answerTrue;
}

console.log(test());


// function singleRound(playerSelection, computerSelection) {
  
//}
 

//??????????????

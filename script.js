function computerPlay() {
  let decisionMaker;
  decisionMaker = Math.floor(Math.random() * 3 + 1)
  if (decisionMaker == 1) {
    return "rock"
  } else if (decisionMaker == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase()
  console.log(`${playerSelection} vs ${computerSelection}`);
  if (playerSelection === 'rock' && computerSelection === 'scissors') {
    console.log('You win!');
    return 'player';
  } else if (playerSelection === 'rock' && computerSelection === 'paper') {
    console.log('You lose!');
    return 'computer';
  } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    console.log('You win!');
    return 'player';
  } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    console.log('You lose!');
    return 'computer';
  } else if (playerSelection === 'paper' && computerSelection === 'rock') {
    console.log('You win!');
    return 'player';
  } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
    console.log('You lose!');
    return 'computer'
  } else if (playerSelection === computerSelection) {
    console.log('It\'s a draw');
    return 'draw';
  } else {
    console.log('Wrong input. You lose!');
    return 'computer'
  }
}

function game() {
  let roundResult = 'nothing';
  let playerChoice = 'nothing';
  let playerScore = 0;
  let computerScore = 0;
  for (let i = 0; i < 5; i++) {
    playerChoice = prompt('Rock, Paper, Scissors!');
    roundResult = playRound(playerChoice, computerPlay());
    if (roundResult === 'player') {
      playerScore += 1
    } else if (roundResult === 'computer') {
      computerScore += 1
    }
  }
  console.log(`Final score is ${playerScore}-${computerScore}`);
}
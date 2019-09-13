function computerPlay() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}

function playRound(p1selection, p2selection) {
  p1s = p1selection.toLowerCase();
  p2s = p2selection.toLowerCase();
  if (p1s == p2s) {
    return "It's a tie!";
  };
  if (p1s == 'rock' & p2s == 'scissors') {
    return 'Player 1 wins! Rock beats Scissors';
  };
  if (p1s == 'rock' & p2s == 'paper') {
    return 'Player 2 wins! Paper beats Rock';
  };
  if (p1s == 'paper' & p2s == 'scissors') {
    return 'Player 2 wins! Scissors beats Paper';
  };
  if (p1s == 'paper' & p2s == 'rock') {
    return 'Player 1 wins! Paper beats Rock';
  };
  if (p1s == 'scissors' & p2s == 'paper') {
    return 'Player 1 wins! Scissors beats Paper';
  };
  if (p1s == 'scissors' & p2s == 'rock') {
    return 'Player 2 wins! Rock beats Scissors';
  };
}

function gameAgainstComputer() {
  let i;
  for (i = 0; i < 5; i++) {
    let p1selection = prompt("Choose Rock, Paper, or Scissors")
    let p2selection = computerPlay()
    console.log(playRound(p1selection, p2selection))
  }
}

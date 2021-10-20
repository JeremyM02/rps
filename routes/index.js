var express = require('express');
var router = express.Router();
let pcChoice = getPcChoice(['rock', 'paper', 'scissors']);

/* GET home page. */
router.get('/', function(req, res) {

  res.render('choices', {
    pcChoice: pcChoice
  });
});

/* GET turn */
router.get('/turn', function(req, res) {
  let playerChoice = req.query.choice;
  let winner = pickWinner(playerChoice, pcChoice);
  res.render('result', {
  playerChoice: playerChoice,
  pcChoice: pcChoice,
  winner: winner
  });
})

module.exports = router;

function getRandomInt(max) {
  return Math.floor( Math.random() * max);
}

function getPcChoice(options) {
  let choiceIndex = getRandomInt(3);
  return options[choiceIndex];
}

function pickWinner(playerChoice, pcChoice) {
  if (playerChoice === pcChoice) {
    return 'draw';
  }

  // PLAYER CHOICE IS ROCK
  if (playerChoice === 'rock') {
    if (pcChoice === 'paper') {
      return 'pc';
    }
    if (pcChoice === 'scissors') {
      return 'player';
    }
  }

  //PLAYER CHOICE IS PAPER
  if (playerChoice === 'paper') {
    if (pcChoice === 'rock') {
      return 'player';
    }
    if (pcChoice === 'scissors') {
      return 'pc';
    }
  }

  //PLAYER CHOICE IS SCISSORS
  if (playerChoice === 'scissors') {
    if (pcChoice === 'rock') {
      return 'pc';
    }
    if (pcChoice === 'paper') {
      return 'player';
    }
  }
  return 'invalid';
}

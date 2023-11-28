// 1. Declare Variables
var rock = document.getElementById('rock');
var rockShadow = document.getElementById('rock-shadow');
var paper = document.getElementById('paper');
var paperShadow = document.getElementById('paper-shadow');
var scissors = document.getElementById('scissors');
var scissorsShadow = document.getElementById('scissors-shadow');

// 2. Define Functions
function rel() {
  rock.removeEventListener('click', rockFunc);
  rock.style.cursor = 'auto';
  paper.removeEventListener('click', paperFunc);
  paper.style.cursor = 'auto';
  scissors.removeEventListener('click', scissorsFunc);
  scissors.style.cursor = 'auto';
}
function rps() {
  var arrStr = ['rock', 'paper', 'scissors'];
  var random = arrStr[Math.floor(Math.random() * arrStr.length)];
  return random;
}

function score(result) {
  var score = 0;
  if (result == 'win') {
    message = 'You Win!';
    score = score + 1;
  } else if (result == 'lose') {
    score = score - 1;
    message = 'You Lost.';
  } else {
    message = 'You Tied.';
  }
  if (score < 0) {
    score = '−&hairsp;' + Math.abs(score);
  }
  if (score > 0) {
    score = '+&hairsp;' + Math.abs(score);
  }
  setTimeout(function() {
    var div = document.createElement('div');
    div.setAttribute('class', 'fadeIn');
    div.setAttribute('id', 'score');
    div.innerHTML = '<h3>' + message + '</h3>';
    document.getElementById('main').appendChild(div);
  }, 660);
}

// 3. Assign Listeners

// Rock
var rockFunc = function(e) {
  e.preventDefault();
  rel();
  var random = rps();
  rock.classList.add('bounce');
  rockShadow.classList.add('shrink');
  paper.classList.add('fadeOut');
  paperShadow.classList.add('fadeOut');
  scissors.classList.add('fadeOut');
  scissorsShadow.classList.add('fadeOut');
  setTimeout(function() {
    scissors.src = 'i/' + random + '.png';
    if (random == 'rock') {
      score('tie');
    } else if (random == 'paper') {
      score('lose');
    } else {
      score('win');
    }
    scissors.classList.add('fadeIn');
    scissorsShadow.classList.add('fadeIn');
  }, 1000);
  setTimeout(function() {
    if (random == 'paper') { // lose
      scissors.classList.remove('fadeOut');
      scissors.classList.remove('fadeIn');
      scissorsShadow.classList.remove('fadeOut');
      scissorsShadow.classList.remove('fadeIn');
      scissors.classList.add('winBounce');
      scissorsShadow.classList.add('winShrink');
    }
    if (random == 'scissors') { // win
      rock.classList.remove('bounce');
      rockShadow.classList.remove('shrink');
      void rock.offsetWidth;
      void rockShadow.offsetWidth;
      rock.classList.add('winBounce');
      rockShadow.classList.add('winShrink');
    }
    if (random == 'rock') { //tie
      rock.classList.remove('bounce');
      rockShadow.classList.remove('shrink');
      void rock.offsetWidth;
      void rockShadow.offsetWidth;
      scissors.classList.remove('fadeOut');
      scissors.classList.remove('fadeIn');
      scissorsShadow.classList.remove('fadeOut');
      scissorsShadow.classList.remove('fadeIn');
      rock.classList.add('bounce');
      rockShadow.classList.add('shrink');
      scissors.classList.add('bounce');
      scissorsShadow.classList.add('shrink');
    }
  }, 1660);
};
rock.addEventListener('click', rockFunc);

// Paper
var paperFunc = function(e) {
  e.preventDefault();
  rel();
  var random = rps();
  paper.classList.add('bounce');
  paperShadow.classList.add('shrink');
  rock.classList.add('fadeOut');
  rockShadow.classList.add('fadeOut');
  scissors.classList.add('fadeOut');
  scissorsShadow.classList.add('fadeOut');
  setTimeout(function() {
    paper.classList.add('slide');
    paperShadow.classList.add('slide')
  }, 500);
  setTimeout(function() {
    scissors.src = 'i/' + random + '.png';
    if (random == 'rock') {
      score('win');
    } else if (random == 'paper') {
      score('tie');
    } else {
      score('lose');
    }
    scissors.classList.add('fadeIn');
    scissorsShadow.classList.add('fadeIn');
  }, 1500);
  setTimeout(function() {
    if (random == 'scissors') { // lose
      scissors.classList.remove('fadeOut');
      scissors.classList.remove('fadeIn');
      scissorsShadow.classList.remove('fadeOut');
      scissorsShadow.classList.remove('fadeIn');
      scissors.classList.add('winBounce');
      scissorsShadow.classList.add('winShrink');
    }
    if (random == 'rock') { // win
      paper.classList.remove('bounce');
      paper.classList.add('left');
      paper.classList.remove('slide');
      paperShadow.classList.add('left');
      paperShadow.classList.remove('shrink');
      void paper.offsetWidth;
      void paperShadow.offsetWidth;
      paper.classList.add('winBounce');
      paperShadow.classList.add('winShrink');
    }
    if (random == 'paper') { //tie
      paper.classList.remove('bounce');
      paper.classList.add('left');
      paper.classList.remove('slide');
      paperShadow.classList.add('left');
      paperShadow.classList.remove('shrink');
      void paper.offsetWidth;
      void paperShadow.offsetWidth;
      scissors.classList.remove('fadeOut');
      scissors.classList.remove('fadeIn');
      scissorsShadow.classList.remove('fadeOut');
      scissorsShadow.classList.remove('fadeIn');
      paper.classList.add('bounce');
      paperShadow.classList.add('shrink');
      scissors.classList.add('bounce');
      scissorsShadow.classList.add('shrink');
    }
  }, 2120);
};
paper.addEventListener('click', paperFunc);

// Scissors
var scissorsFunc = function(e) {
  e.preventDefault();
  rel();
  var random = rps();
  scissors.classList.add('bounce');
  scissorsShadow.classList.add('shrink');
  paper.classList.add('fadeOut');
  paperShadow.classList.add('fadeOut');
  rock.classList.add('fadeOut');
  rockShadow.classList.add('fadeOut');
  setTimeout(function() {
    rock.src = 'i/' + random + '.png';
    if (random == 'rock') {
      score('lose');
    } else if (random == 'paper') {
      score('win');
    } else {
      score('ties');
    }
    rock.classList.add('fadeIn');
    rockShadow.classList.add('fadeIn');
  }, 1000);
  setTimeout(function() {
    if (random == 'rock') { // lose
      rock.classList.remove('fadeOut');
      rock.classList.remove('fadeIn');
      rockShadow.classList.remove('fadeOut');
      rockShadow.classList.remove('fadeIn');
      rock.classList.add('winBounce');
      rockShadow.classList.add('winShrink');
    }
    if (random == 'paper') { // win
      scissors.classList.remove('bounce');
      scissorsShadow.classList.remove('shrink');
      void scissors.offsetWidth;
      void scissorsShadow.offsetWidth;
      scissors.classList.add('winBounce');
      scissorsShadow.classList.add('winShrink');
    }
    if (random == 'scissors') { //tie
      scissors.classList.remove('bounce');
      scissorsShadow.classList.remove('shrink');
      void scissors.offsetWidth;
      void scissorsShadow.offsetWidth;
      rock.classList.remove('fadeOut');
      rock.classList.remove('fadeIn');
      rockShadow.classList.remove('fadeOut');
      rockShadow.classList.remove('fadeIn');
      scissors.classList.add('bounce');
      scissorsShadow.classList.add('shrink');
      rock.classList.add('bounce');
      rockShadow.classList.add('shrink');
    }
  }, 1660);
};
scissors.addEventListener('click', scissorsFunc);
function reloadPage() {
    window.location.reload();
}


//home buttons
let homeBtn1 = document.getElementById('home-btn-1').addEventListener('click', addOneToHomeScore);
let homeBtn2 = document.getElementById('home-btn-2').addEventListener('click', addTwoToHomeScore);
let homeBtn3 = document.getElementById('home-btn-3').addEventListener('click', addThreeToHomeScore);

// guest buttons
let guestBtn1 = document.getElementById('guest-btn-1').addEventListener('click', addOneToGuestScore);
let guestBtn2 = document.getElementById('guest-btn-2').addEventListener('click', addTwoToGuestScore);
let guestBtn3 = document.getElementById('guest-btn-3').addEventListener('click', addThreeToGuestScore);
 

// leaderboard

let gameResetEl = document.getElementById('game-reset').addEventListener('click', resetGame);


let homeScore = 0;
let guestScore = 0;
let homeScoreEl = document.getElementById('home-score');
let guestScoreEl = document.getElementById('guest-score');
let timerEl = document.getElementById('timer');

homeScoreEl.textContent = 0;
guestScoreEl.textContent = 0;




//Home score functions

function addOneToHomeScore(){
  homeScore += 1;
  homeScoreEl.textContent = homeScore;
}

function addTwoToHomeScore() {
  homeScore += 2;
  homeScoreEl.textContent = homeScore;
}

function addThreeToHomeScore() {
  homeScore += 3;
  homeScoreEl.textContent = homeScore;
}




// Guest Score functions 

function addOneToGuestScore() {
  guestScore += 1;
  guestScoreEl.textContent = guestScore;
}

function addTwoToGuestScore() {
  guestScore += 2;
  guestScoreEl.textContent = guestScore;
}

function addThreeToGuestScore() {
  guestScore += 3;
  guestScoreEl.textContent = guestScore;
}

//Reset Function

function resetGame() {
  homeScoreEl.textContent = 0;
  guestScoreEl.textContent = 0;
  homeScore = 0;
  guestScore = 0;
}


let stopageTime = new Date("Jul 21, 2022 15:30:40").getTime()
  
let count = setInterval(function () {
  let now = new Date().getTime()
  

// hours lefts

let t = stopageTime - now;

let hours = Math.floor((t % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
let minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
let seconds = Math.floor((t % (1000 * 60)) / 1000);

  timerEl.textContent = hours + ":" + minutes + ":" + seconds;

  if (t < 0) {
    clearInterval(count);
    timerEl.textContent = 0;
  }
}, 1000)

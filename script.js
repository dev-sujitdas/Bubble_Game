// function to start the game..
function startgame() {        
  document.querySelector("#bottom").innerHTML = `<h1 id="h1">Let's Start The Game</h1> <button class="start" type="button">Start</button>`;    
  let button = document.getElementsByClassName("start")[0];
  button.addEventListener("click", clickStart);
}
function clickStart() {
  makeBubble();
  getHit();
  runTimer();
}

startgame();

// function for Creating Bubbles..
function makeBubble() {
let clutter = "";

for (let i = 1; i <= 102; i++) {
  let rn = Math.floor(Math.random() * 10);
  clutter += `<div class="bubble">${rn}</div>`;
}
document.querySelector("#bottom").innerHTML = clutter;
}

// function for Timer..
let timer = 60;
function runTimer() {
let timerInterval = setInterval(function () {
  if (timer > 0) {
    timer--;
    document.querySelector("#timerval").textContent = timer;
  } else {
    clearInterval(timerInterval);
    document.querySelector("#hitval").textContent = "0";
    document.querySelector("#scoreval").textContent = "0";
    document.querySelector("#bottom").innerHTML = `<h2 id="h1">Game Over</h2> <h1>Your score is..</h1> <h1>${score}</h1> <button class="retry" type="button">Retry</button>`;          
    gameReload();
  }
}, 1000);
}

// timer for retry

let retryTimer=60;
function rTimer(){
  let timeInit = setInterval(function (){
    if (retryTimer > 0){
      retryTimer --;
      document.querySelector("#timerval").textContent = retryTimer;
    }else{
    clearInterval(timeInit);
    document.querySelector("#hitval").textContent = "0";
    document.querySelector("#scoreval").textContent = "0";
    document.querySelector("#bottom").innerHTML = `<h2 id="h1">Game Over</h2> <h1>Your score is..</h1> <h1>${score}</h1> <button class="retry" type="button">Retry</button>`;          
    }

  }, 1000);
}

//function for Retry..

function gameReload(){
  let button = document.getElementsByClassName("retry")[0];
  button.addEventListener("click", hitRetry);
  }
  function hitRetry(){
   makeBubble();
   getHit();   
   rTimer();   
  }

// function for Hit..
let hit = 0;
function getHit(){  
  hit = Math.floor(Math.random()*10);
  document.querySelector("#hitval").textContent = hit;     
}

// function for Score..
let score = 0;
function increaseScore(){
  score += 10;
  document.querySelector("#scoreval").textContent = score;
}

document.querySelector("#bottom").addEventListener("click", function(details){
  let clickedNum =(Number(details.target.textContent));
  if(clickedNum === hit){
      increaseScore();        
      makeBubble();
      getHit();        
  }
})


  

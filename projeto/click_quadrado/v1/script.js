// script.js
const startButton = document.getElementById("start-button");
const square = document.getElementById("square");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameContainer = document.getElementById("game-container");
const gameArea = document.getElementById("game-area");

let score = 0;
let timeLeft = 30;
let gameInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Pontos: ${score}`;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;
  startButton.disabled = true;

  gameInterval = setInterval(updateTimer, 1000);

  showSquare();
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;

  if (timeLeft <= 0) {
    endGame();
  }
}

function showSquare() {
  const areaWidth = gameArea.clientWidth - 50; 
  const areaHeight = gameArea.clientHeight - 50; 

  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);

  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;
  square.style.display = "block";
}

function handleSquareClick() {
  score++;
  scoreDisplay.textContent = `Pontos: ${score}`;
  showSquare();
}

function endGame() {
  clearInterval(gameInterval);
  square.style.display = "none";
  startButton.disabled = false;
  alert(`Fim de jogo! Sua pontuação foi: ${score}`);
}

startButton.addEventListener("click", startGame);
square.addEventListener("click", handleSquareClick);

// script.js
const startButton = document.getElementById("start-button");
const blueSquare = document.getElementById("blue-square");
const redSquare = document.getElementById("red-square");
const scoreDisplay = document.getElementById("score");
const timerDisplay = document.getElementById("timer");
const gameArea = document.getElementById("game-area");

let score = 0;
let timeLeft = 30;
let gameInterval;
let repositionInterval;

function startGame() {
  score = 0;
  timeLeft = 30;
  scoreDisplay.textContent = `Pontos: ${score}`;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;
  startButton.disabled = true;

  // Atualiza o timer a cada segundo
  gameInterval = setInterval(updateTimer, 1000);

  // Reposiciona os quadrados a cada 2 segundos
  startRepositionInterval();

  // Mostra os quadrados pela primeira vez
  repositionSquares();
}

function updateTimer() {
  timeLeft--;
  timerDisplay.textContent = `Tempo: ${timeLeft}s`;

  if (timeLeft <= 0) {
    endGame(`Fim de jogo! Sua pontuação foi: ${score}`);
  }
}

function startRepositionInterval() {
  clearInterval(repositionInterval); // Limpa qualquer intervalo existente
  repositionInterval = setInterval(repositionSquares, 2000);
}

function repositionSquares() {
  repositionSquare(blueSquare);
  repositionSquare(redSquare);
}

function repositionSquare(square) {
  const areaWidth = gameArea.clientWidth - 25; // Largura máxima permitida
  const areaHeight = gameArea.clientHeight - 25; // Altura máxima permitida

  const randomX = Math.floor(Math.random() * areaWidth);
  const randomY = Math.floor(Math.random() * areaHeight);

  square.style.left = `${randomX}px`;
  square.style.top = `${randomY}px`;
  square.style.display = "block";
}

function handleBlueSquareClick() {
  score++;
  scoreDisplay.textContent = `Pontos: ${score}`;

  // Reposiciona os quadrados imediatamente
  repositionSquares();

  // Reinicia o intervalo de reposicionamento
  startRepositionInterval();
}

function handleRedSquareClick() {
  endGame("Você clicou no quadrado vermelho! Fim de jogo.");
}

function endGame(message) {
  clearInterval(gameInterval);
  clearInterval(repositionInterval);
  blueSquare.style.display = "none";
  redSquare.style.display = "none";
  startButton.disabled = false;
  alert(message);
}

// Event Listeners
startButton.addEventListener("click", startGame);
blueSquare.addEventListener("click", handleBlueSquareClick);
redSquare.addEventListener("click", handleRedSquareClick);

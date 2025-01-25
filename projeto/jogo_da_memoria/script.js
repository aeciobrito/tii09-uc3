const board = document.getElementById("board");
const moveCountElement = document.getElementById("moveCount");
const restartButton = document.getElementById("restartButton");

let moveCount = 0;
let flippedCards = [];
let matchedCards = [];

let catImages = []; // Armazenará as URLs das imagens dos gatinhos

// Função para buscar imagens de gatos na Cat API
async function fetchCatImages() {
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=8");
    const data = await response.json();
    // Armazena as URLs das imagens dos gatos
    catImages = data.map(cat => cat.url);
    prepareGame();
}

// Função para preparar o jogo com as imagens de gatos
function prepareGame() {
    // Verifica se as imagens foram carregadas
    if (catImages.length < 8) {
        alert("Não foi possível carregar as imagens de gatos. Tente novamente.");
        return;
    }

    // Duplica as imagens para criar os pares
    const imagesForGame = [...catImages, ...catImages];
    const shuffledImages = shuffleArray(imagesForGame);

    // Cria o tabuleiro com as cartas
    shuffledImages.forEach((image, index) => createCard(image, index));
}

// Função para embaralhar o array
function shuffleArray(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Função para criar uma carta com a imagem do gato
function createCard(image, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    card.dataset.image = image;
    card.dataset.index = index;

    card.addEventListener("click", () => flipCard(card));

    const img = document.createElement("img");
    img.src = image;
    img.alt = "Gatinho";
    img.style.display = "none"; // Imagem oculta inicialmente
    card.appendChild(img);

    board.appendChild(card);
}

// Função para virar a carta e mostrar a imagem
function flipCard(card) {
    if (flippedCards.length === 2 || card.classList.contains("flipped") || matchedCards.includes(card.dataset.index)) {
        return;
    }

    card.classList.add("flipped");
    const img = card.querySelector("img");
    img.style.display = "block"; // Exibe a imagem da carta

    flippedCards.push(card);

    if (flippedCards.length === 2) {
        moveCount++;
        moveCountElement.textContent = moveCount;

        const [firstCard, secondCard] = flippedCards;
        if (firstCard.dataset.image === secondCard.dataset.image) {
            matchedCards.push(firstCard.dataset.index, secondCard.dataset.index);
            flippedCards = [];
            checkGameOver();  // Verifica se o jogo acabou
        } else {
            setTimeout(() => {
                firstCard.classList.remove("flipped");
                secondCard.classList.remove("flipped");
                firstCard.querySelector("img").style.display = "none"; // Oculta a imagem
                secondCard.querySelector("img").style.display = "none"; // Oculta a imagem
                flippedCards = [];
            }, 1000);
        }
    }
}

// Função para verificar se o jogo terminou
function checkGameOver() {
    if (matchedCards.length === catImages.length * 2) {
        setTimeout(() => {
            alert(`Você ganhou o jogo! Total de jogadas: ${moveCount}`);
        }, 500);
    }
}

// Função para reiniciar o jogo
function restartGame() {
    moveCount = 0;
    moveCountElement.textContent = moveCount;
    flippedCards = [];
    matchedCards = [];
    board.innerHTML = "";
    fetchCatImages(); // Carregar novas imagens
}

restartButton.addEventListener("click", restartGame);

// Inicia o jogo ao carregar a página
fetchCatImages();

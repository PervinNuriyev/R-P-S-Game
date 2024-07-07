const playerScoreDiv = document.getElementById("player-score");
const computerScoreDiv = document.getElementById("computer-score");
const resultDiv = document.getElementById("result");

const playerImage = document.getElementById("player-image");
const computerImage = document.getElementById("computer-image");

document
  .querySelector(".rockButton")
  .addEventListener("click", () => playGame("Rock"));
document
  .querySelector(".paperButton")
  .addEventListener("click", () => playGame("Paper"));
document
  .querySelector(".scissorsButton")
  .addEventListener("click", () => playGame("Scissors"));
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice) {
  const computerChoice = getComputerChoice();
  const winner = determineWinner(playerChoice, computerChoice);

  updateScores(winner);

  displayResult(playerChoice, computerChoice, winner);
}

function getComputerChoice() {
  const choices = ["Rock", "Paper", "Scissors"];

  const randomIndex = Math.floor(Math.random() * 3);

  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "Draw";
  }

  if (
    (player === "Rock" && computer === "Scissors") ||
    (player === "Paper" && computer === "Rock") ||
    (player === "Scissors" && computer === "Paper")
  ) {
    return "Player";
  } else {
    return "Computer";
  }
}

function updateScores(winner) {
  if (winner === "Player") {
    playerScore++;
  } else if (winner === "Computer") {
    computerScore++;
  }

  playerScoreDiv.textContent = playerScore;
  computerScoreDiv.textContent = computerScore;
}

function displayResult(playerChoice, computerChoice, winner) {
  const images = {
    Rock: "./r.webp",
    Paper: "./p.jpg",
    Scissors: "./s.webp",
  };

  playerImage.src = images[playerChoice];
  computerImage.src = images[computerChoice];

  resultDiv.textContent = `Your choice: ${playerChoice}, Computer's choice: ${computerChoice}. ${winner} wins!`;
}

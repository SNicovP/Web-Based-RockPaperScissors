function getRandomComputerResult() {
    const options = ["Klip", "Papier", "Skêr"];
    const randomIndex = Math.floor(Math.random() * options.length);
    return options[randomIndex];
  }
  
function hasPlayerWonTheRound(player, computer) {
  return (
    (player === "Klip" && computer === "Skêr") ||
    (player === "Skêr" && computer === "Papier") ||
    (player === "Papier" && computer === "Klip")
  );
}

let playerScore = 0;
let computerScore = 0;

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();

  if (hasPlayerWonTheRound(userOption, computerResult)) {
    playerScore++;
    return `Speler kies ${userOption}, Robot kies ${computerResult}. Speler wen! ${userOption} oorwin ${computerResult}`;
  } else if (computerResult === userOption) {
    return `Dit is 'n gelykopspel! Altwee kies ${userOption}`;
  } else {
    computerScore++;
    return `Speler kies ${userOption}, Robot kies ${computerResult}. Robot wen! ${computerResult} oorwin ${userOption}`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.querySelector(".options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  if (playerScore === 3) {
    winnerMsgElement.innerText = "Speler het die spel gewen! Geluk!";
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }else if (computerScore === 3) {
    winnerMsgElement.innerText = "Robor het die spel gewen! Duiwels!"    
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
  }
};

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  computerScoreSpanElement.innerText = computerScore;
  playerScoreSpanElement.innerText = playerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  roundResultsMsg.innerText = '';
  winnerMsgElement.innerHTML = '';
  }

resetGameBtn.addEventListener("click", resetGame);

const KlipBtn = document.getElementById("Klip-btn");
const PapierBtn = document.getElementById("Papier-btn");
const SkêrBtn = document.getElementById("Skêr-btn");

KlipBtn.addEventListener("click", function () {
  showResults("Klip");
});

PapierBtn.addEventListener("click", function () {
  showResults("Papier");
});

SkêrBtn.addEventListener("click", function () {
  showResults("Skêr");
});
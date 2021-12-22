const p1 = {
  score: 0,
  button: document.querySelector("#pOneBtn"),
  display: document.querySelector("#pOneDisplay"),
};

const p2 = {
  score: 0,
  button: document.querySelector("#pTwoBtn"),
  display: document.querySelector("#pTwoDisplay"),
};

const resetBtn = document.querySelector("#reset");
const winScore = document.querySelector("#winning-score");

let winningScore = 0;
let isGameOver = false;

winScore.addEventListener("change", () => {
  winningScore = parseInt(winScore.value);
  reset();
});

function updateScore(player, opponent) {
  if (!isGameOver) {
    if (player.score !== winningScore) {
      player.score += 1;
      if (player.score === winningScore) {
        isGameOver = true;
        player.display.classList.add("has-text-success");
        opponent.display.classList.add("has-text-danger");

        player.button.disabled = true;
        opponent.button.disabled = true;
      }
    }
    player.display.innerHTML = player.score;
  }
}

p1.button.addEventListener("click", () => {
  updateScore(p1, p2);
});

p2.button.addEventListener("click", () => {
  updateScore(p2, p1);
});

function reset() {
  isGameOver = false;
  for (let p of [p1, p2]) {
    p.score = 0;
    p.display.innerHTML = p1.score;
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

resetBtn.addEventListener("click", reset);

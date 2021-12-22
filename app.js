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

let p1Score = 0;
let p2Score = 0;
let winningScore = 0;
let isGameOver = false;

winScore.addEventListener("change", () => {
  winningScore = parseInt(winScore.value);
  reset();
});

const checkWinner = () => {
  if (p1Score > p2Score) {
    p1Display.style.color = "green";
    p2Display.style.color = "red";
  } else {
    p2Display.style.color = "green";
    p1Display.style.color = "red";
  }

  p1Btn.disabled = true;
  p2Btn.disabled = true;
};

p1Btn.addEventListener("click", () => {
  if (!isGameOver) {
    if (p1Score !== winningScore) {
      p1Score += 1;
      if (p1Score === winningScore) {
        isGameOver = true;
        checkWinner();
      }
      p1Display.innerHTML = p1Score;
    }
  }
});

p2Btn.addEventListener("click", () => {
  if (!isGameOver) {
    if (p2Score !== winningScore) {
      p2Score += 1;
      if (p2Score === winningScore) {
        isGameOver = true;
        checkWinner();
      }
      p2Display.innerHTML = p2Score;
    }
  }
});

function reset() {
  p1Score = 0;
  p2Score = 0;
  p1Display.innerHTML = p1Score;
  p2Display.innerHTML = p2Score;
  p2Display.style.color = "black";
  p1Display.style.color = "black";
  isGameOver = false;

  p1Btn.disabled = false;
  p2Btn.disabled = false;
}

resetBtn.addEventListener("click", reset);

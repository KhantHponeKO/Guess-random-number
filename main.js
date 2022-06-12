const resultSms = document.querySelector(".info");
let guess = document.querySelector(".guess");
const score = document.querySelector(".score");
const highestRank = document.querySelector(".high-score");
const answerShow = document.querySelector(".correct-answer");
const restart = document.querySelector(".restart");

let randomAns, chances, gamePlay;
let rank = 0;

//init
const init = function () {
  randomAns = Math.floor(Math.random() * 20 + 1);
  chances = 10;
  gamePlay = true;
  score.textContent = `⛑️ Chances : ${chances}`;
  answerShow.textContent = "?";
  resultSms.textContent = "guessing ...";
  document.querySelector("body").style.backgroundColor = "#444";
};
init();
//Click Events
document.querySelector(".guess-check").addEventListener("click", function () {
  if (!gamePlay) return;
  const guessNum = +guess.value;
  guess.value = "";

  //Check

  if (!guessNum) {
    resultSms.textContent = "😒 No Answer ?";
  } else {
    if (guessNum === randomAns) {
      //changeSms
      resultSms.textContent = "💥 Correct Answer !!!";
      //Show Ans on ?
      document.querySelector("body").style.backgroundColor = "green";
      answerShow.textContent = randomAns;
      //update HighScore
      if (chances > rank) {
        rank = chances;
        highestRank.textContent = `🎖️ Heigh-score :${rank}`;
      }
      gamePlay = false;
    }
    if (guessNum !== randomAns) {
      if (chances > 1) {
        resultSms.textContent =
          guessNum > randomAns ? "💹 Too High" : "⬇️ Too Low";
        //score -
        chances--;
        score.textContent = `⛑️ Chances : ${chances}`;
      } else {
        resultSms.textContent = " 😂😂😂😂You Lost";
      }
    }
  }
});

//Restart
restart.addEventListener("click", function () {
  init();
});

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
  score.textContent = `âï¸ Chances : ${chances}`;
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
    resultSms.textContent = "ð No Answer ?";
  } else {
    if (guessNum === randomAns) {
      //changeSms
      resultSms.textContent = "ð¥ Correct Answer !!!";
      //Show Ans on ?
      document.querySelector("body").style.backgroundColor = "green";
      answerShow.textContent = randomAns;
      //update HighScore
      if (chances > rank) {
        rank = chances;
        highestRank.textContent = `ðï¸ Heigh-score :${rank}`;
      }
      gamePlay = false;
    }
    if (guessNum !== randomAns) {
      if (chances > 1) {
        resultSms.textContent =
          guessNum > randomAns ? "ð¹ Too High" : "â¬ï¸ Too Low";
        //score -
        chances--;
        score.textContent = `âï¸ Chances : ${chances}`;
      } else {
        resultSms.textContent = " ððððYou Lost";
      }
    }
  }
});

//Restart
restart.addEventListener("click", function () {
  init();
});

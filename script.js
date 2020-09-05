var mainMenuStartQuizBtn = document.getElementById("start-quiz");
var timer = document.getElementById("countdown");
var mainContainer = document.querySelector(".container")
var count = 75;

function mainTimer() {
  var setTimer = setInterval(function () {
    count--;
    timer.textContent = count;

    if (count === 0) {
      clearInterval(setTimer);
    }
  }, 1000);
}

mainMenuStartQuizBtn.addEventListener("click", function(){
    mainTimer();
    mainContainer.innerHTML = "";
});
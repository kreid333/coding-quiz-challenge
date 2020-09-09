// Defining global variables
var mainPageStartQuizBtn = document.getElementById("start-quiz");
var timer = document.getElementById("countdown");
var headText = document.getElementById("top-section");
var mainText = document.getElementById("main-section");
var bottomText = document.getElementById("bottom-section");

// Defining question sets in objcets
var questionOne = {
  question: "Commonly used data types DO NOT include:",
  answers: ["1. Strings", "2. Booleans", "3. Alerts", "4. Numbers"],
  correctAnswer: "3. Alerts",
};

var questionTwo = {
  question: "The condition in an if/else statement is enclosed within _____.",
  answers: [
    "1. Quotes",
    "2. Curly Brackets",
    "3. Parentheses",
    "4. Square Brackets",
  ],
  correctAnswer: "3. Parentheses",
};

var questionThree = {
  question: "Arrays in Javascript can be used to store _____.",
  answers: [
    "1. Numbers and Strings",
    "2. Other Arrays",
    "3. Booleans",
    "4. All of the above",
  ],
  correctAnswer: "4. All of the above",
};

var questionFour = {
  question:
    "String values must be enclosed within _____ when being assigned to variables.",
  answers: ["1. Commas", "2. Curly Brackets", "3. Quotes", "4. Parentheses"],
  correctAnswer: "3. Quotes",
};

var questionFive = {
  question:
    "A very useful tool used during development and debugging for printing content to the debugger is:",
  answers: [
    "1. JavaScript",
    "2. Terminal/Bash",
    "3. For Loops",
    "4. Console.log",
  ],
  correctAnswer: "4. Console.log",
};

// Array of question Objects
var questionArray = [
  questionOne,
  questionTwo,
  questionThree,
  questionFour,
  questionFive,
];

//Creating Buttons
var buttonOne = document.createElement("button");
var buttonTwo = document.createElement("button");
var buttonThree = document.createElement("button");
var buttonFour = document.createElement("button");

// Creating question heading
var newHeadText = document.createElement("h2");

// Count variable
var count = 75;

// Defining mainTimer funciton
function mainTimer() {
  var setTimer = setInterval(function () {
    count--;
    timer.textContent = count;

    if (count <= 0) {
      clearInterval(setTimer);
    } else if (newHeadText.textContent === "All done!") {
      clearInterval(setTimer);
    }
  }, 1000);
}

// Defining clearPage function
function clearPage() {
  headText.innerHTML = "";
  mainText.innerHTML = "";
  bottomText.innerHTML = "";
}

// Defining pageLayout, how the page will look after the home screen button is clicked
function pageLayout() {
  newHeadText.textContent = questionOne.question;
  headText.appendChild(newHeadText);

  // Creating Rows
  var rowOne = document.createElement("div");
  rowOne.setAttribute("class", "row");
  mainText.appendChild(rowOne);

  var rowTwo = document.createElement("div");
  rowTwo.setAttribute("class", "row");
  mainText.appendChild(rowTwo);

  var rowThree = document.createElement("div");
  rowThree.setAttribute("class", "row");
  mainText.appendChild(rowThree);

  var rowFour = document.createElement("div");
  rowFour.setAttribute("class", "row");
  mainText.appendChild(rowFour);

  // Creating Columns
  var colOne = document.createElement("div");
  colOne.setAttribute("class", "col-sm-12 text-center");
  rowOne.appendChild(colOne);

  var colTwo = document.createElement("div");
  colTwo.setAttribute("class", "col-sm-12 text-center");
  rowTwo.appendChild(colTwo);

  var colThree = document.createElement("div");
  colThree.setAttribute("class", "col-sm-12 text-center");
  rowThree.appendChild(colThree);

  var colFour = document.createElement("div");
  colFour.setAttribute("class", "col-sm-12 text-center");
  rowFour.appendChild(colFour);

  // Creating buttons
  buttonOne.setAttribute("class", "btn");
  buttonOne.textContent = questionOne.answers[0];
  colOne.appendChild(buttonOne);

  buttonTwo.setAttribute("class", "btn");
  buttonTwo.textContent = questionOne.answers[1];
  colTwo.appendChild(buttonTwo);

  buttonThree.setAttribute("class", "btn");
  buttonThree.textContent = questionOne.answers[2];
  colThree.appendChild(buttonThree);

  buttonFour.setAttribute("class", "btn");
  buttonFour.textContent = questionOne.answers[3];
  colFour.appendChild(buttonFour);
}

// Setting up page layout for next five questions
mainPageStartQuizBtn.addEventListener("click", function () {
  clearPage();
  timer.textContent = "75";
  mainTimer();
  pageLayout();
});

// Defining a function that changes the text within the seleced elements so a "new page" appears
function changeContent(questionNumber) {
  newHeadText.textContent = questionNumber.question;
  buttonOne.textContent = questionNumber.answers[0];
  buttonTwo.textContent = questionNumber.answers[1];
  buttonThree.textContent = questionNumber.answers[2];
  buttonFour.textContent = questionNumber.answers[3];
}

// function for finish page
function finishPage() {
  clearPage();
  newHeadText.textContent = "All done!";
  headText.appendChild(newHeadText);

  // Creating Row One
  var rowOne = document.createElement("div");
  rowOne.setAttribute("class", "row");
  mainText.appendChild(rowOne);

  // Creating Column One  
  var colOne = document.createElement("div");
  colOne.setAttribute("class", "col-sm-12 text-center");
  rowOne.appendChild(colOne);

  // Creating text that displays your score
  var thisIsYourScore = document.createElement("p");
  thisIsYourScore.textContent = "Your final score is " + count++ + ".";
  colOne.appendChild(thisIsYourScore);

  // Creating Row Two
  var rowTwo = document.createElement("div");
  rowTwo.setAttribute("class", "row");
  mainText.appendChild(rowTwo);

  // Creating Column Two
  var colTwo = document.createElement("div");
  colTwo.setAttribute("class", "col-sm-12 text-center");
  rowOne.appendChild(colTwo);

  // Creating form
  var form = document.createElement("form");
  colTwo.appendChild(form);

  // Creating label
  var label = document.createElement("label");
  label.setAttribute("for", "initials");
  label.setAttribute("style", "padding-right: 10px");
  label.textContent = "Enter intials:";
  form.appendChild(label);

  // Creating input
  var input = document.createElement("input");
  input.setAttribute("id", "initials");
  form.appendChild(input);

  // Creating button
  var submitButton = document.createElement("button");
  submitButton.setAttribute("class", "btn");
  submitButton.setAttribute("type", "submit");
  submitButton.setAttribute("style", "margin-left: 10px");
  submitButton.textContent = "Submit";
  form.appendChild(submitButton);
}

// Incrementer for question array Index
var incrementer = 0;

// Button click events
buttonOne.addEventListener("click", function () {
  if (
    buttonOne.textContent === questionOne.answers[0] ||
    buttonOne.textContent === questionTwo.answers[0] ||
    buttonOne.textContent === questionThree.answers[0] ||
    buttonOne.textContent === questionFour.answers[0]
  ) {
    incrementer++;
    count -= 15;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Wrong!";
  } else if (buttonOne.textContent === questionFive.answers[0]) {
    count -= 15;
    finishPage();
    bottomText.textContent = "Wrong!";
  }
});

buttonTwo.addEventListener("click", function () {
  if (
    buttonTwo.textContent === questionOne.answers[1] ||
    buttonTwo.textContent === questionTwo.answers[1] ||
    buttonTwo.textContent === questionThree.answers[1] ||
    buttonTwo.textContent === questionFour.answers[1]
  ) {
    incrementer++;
    count -= 15;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Wrong!";
  } else if (buttonTwo.textContent === questionFive.answers[1]) {
    count -= 15;
    finishPage();
    bottomText.textContent = "Wrong!";
  }
});

buttonThree.addEventListener("click", function () {
  if (buttonThree.textContent === questionOne.correctAnswer) {
    incrementer++;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Correct!";
  } else if (buttonThree.textContent === questionTwo.correctAnswer) {
    incrementer++;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Correct!";
  } else if (buttonThree.textContent === questionFour.correctAnswer) {
    incrementer++;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Correct!";
  } else if (buttonThree.textContent === questionFive.answers[2]) {
    count -= 15;
    finishPage();
    bottomText.textContent = "Wrong!";
  } else {
    incrementer++;
    count -= 15;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Wrong!";
  }
});

buttonFour.addEventListener("click", function () {
  if (buttonFour.textContent === questionThree.correctAnswer) {
    incrementer++;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Correct!";
  } else if (buttonFour.textContent === questionFive.correctAnswer) {
    finishPage();
    bottomText.textContent = "Correct!";
  } else {
    incrementer++;
    count -= 15;
    changeContent(questionArray[incrementer]);
    bottomText.textContent = "Wrong!";
  }
});

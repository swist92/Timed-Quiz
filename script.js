// User will click on start button
// Timer jumps from 0 to 75 seconds
// & Show the first question (call showQuestions)
// Then user clicks on answer
// Timer goes up or down based on whether or not right answer (if/else)
// Repeat 4 more times
// After last question, show all done page with score & stop timer
// User will enter initials, submit form & save to local storage
// Then show highscores
// Aside: if time reaches 0, show out of time message

// Defining ---|--- grabbing from DOM
var beginQuiz = document.querySelector("#startQuiz");
var $timer = document.querySelector("#timer");
var $startBtn = document.querySelector("#start-game");
var $questionContainer = document.querySelector("#question-container");

// Defining variables
var questionIndex = 0;
var numCorrect = 0;
var timeLeft = 75;
var timeInterval;

// Make a question array
var questions = [
  {
    question: "What is Sarah's favorite color",
    answers: ["Orange", "Green", "Purple", "Yellow"],
    correctAnswer: "Purple",
  },
  {
    question: "What is Sarah's favorite book?",
    answers: ["The Great Gatsby", "Great Expectations", "Sense & Sensibility", "The Two Towers"],
    correctAnswer: "The Two Towers",
  },
  {
    question: "What is Sarah's favorite anime?",
    answers: ["Attack on Titan", "Demon Slayer", "My Hero Academia", "Tokyo Ghoul"],
    correctAnswer: "Attack on Titan",
  },
  {
    question: "What is Sarah's favorite country to visit?",
    answers: ["UK", "South Korea", "Morocco", "Japan"],
    correctAnswer: "South Korea",
  },
  {
    question: "What is Sarah's favorite flavor of ice cream?",
    answers: ["Chocolate", "Peanut Butter", "Rocky Road", "Coffee"],
    correctAnswer: "Rocky Road",
  },
];

$timer.textContent = 0;

function startQuiz() {
  beginQuiz.style.display = "none";
  // Start the clock
  timer();
  // & Show the first question (aka call showQuestions)
  renderQuestion();
}

function timer() {
  $timer.textContent = timeLeft + " seconds remaining";
  timeLeft--;
  timeInterval = setInterval(function() {
    $timer.textContent = timeLeft + " seconds remaining";
    timeLeft--;
    if (timeLeft === 0) {
      timerEl.textContent = "";
      clearInterval(timeInterval);
    }
  }, 1000);
}

function renderQuestion() {
  // Empty your answers div
  var question = questions[questionIndex];
  var $question = document.querySelector("#question");
  var $answers = document.querySelector("#answers");
  $question.textContent = question.question;

  for (var i = 0; i < question.answers.length; i++) {
    var $btn = document.createElement("button");
    $btn.textContent = question.answers[i];
    $btn.setAttribute("class", "btn btn-primary ml-3");
    $btn.setAttribute("id", "answer" + (i + 1));
    // Give each $btn a value that is same as the textContent
    $answers.append($btn);
  }

  document.querySelector("#answer1").addEventListener("click", evaluateAnswer);
  document.querySelector("#answer2").addEventListener("click", evaluateAnswer);
  document.querySelector("#answer3").addEventListener("click", evaluateAnswer);
  document.querySelector("#answer4").addEventListener("click", evaluateAnswer);
}

// This is the function that runs when you click on an answer button
function evaluateAnswer(e) {
  // If they are right, nothing happens
  // if event.target.value does not match("Purple"), then minus 10 seconds, and tell them wrong!

  questionIndex++;
    
  // showquestion 2
  renderQuestion();
}

beginQuiz.addEventListener("click", startQuiz);
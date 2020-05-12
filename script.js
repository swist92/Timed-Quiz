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


// Defining ---|--- grabbing
var beginQuiz = document.querySelector("#startQuiz");

beginQuiz.addEventListener("click", startQuiz);

function startQuiz() {
    // Timer jumps from 0 to 75 seconds
    // & Show the first question (aka call showQuestions)
    renderQuestion();
}

var questions = [{
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
  answers: ["Attack on Titan", "Demon Slayer", "Death Note", "Tokyo Ghoul"],
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

var questionIndex = 0;
var time = 100;
var $time = document.querySelector("#timer");

$timer.textContent = time;
var timer = setInterval(function () {
  time--;
}, 1000);

function renderQuestion(){
  var question = questions[questionIndex];
  var $question = document.querySelector("#question");
  var $answers = document.querySelector("#answers");
  $question.textContent = question.question;

  for(var i = 0; i < question.answers.length; i++){
    var $btn = document.createElement("button");
    $btn.textContent = question.answers[i];
    $btn.setAttribute("class", "btn btn-primary ml-3");
    $answers.append($btn);
  }
};

document
  .querySelector("#answer")
  .addEventListener("click", function(e) {
      if(!e.target.matches("button")) return;
      questionIndex++;
      renderQuestion();
  })
 

function evaluateAnswer() {
    // If they are right, nothing happens
    // If they are wrong, lose 10 seconds
    // if event.target.id does not match("sarah"), then minus 10 seconds, and tell them wrong!

    // showquestion 2
    renderQuestion();
}

  function countdown() {
    var timeLeft = 90;
    var timeInterval = setInterval(function () {
      timerEl.textContent = timeLeft + " seconds remaining";
      timeLeft--;
      if (timeLeft === 0) {
        timerEl.textContent = "";
        speedRead();
        clearInterval(timeInterval);
      }
    }, 1000);
  }
  function clickExample(event) {
    console.log(event);
    console.log(event.target.id);

}

beginQuiz.addEventListener("click", clickExample);






//   var q1 = document.querySelector(".q1");
//   var example = document.querySelector("#a1");
//   document.getElementById("a1");
//   q1.textContent = "Question#2";
//   a1.textContent = "phoebe";
//   var questions = [
//     {
//       question1: "who let the dogs out?",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "c",
//     },
//     {
//       question2: "q2",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "d",
//     },
//     {
//       question3: "q3",
//       answers: {
//         a: "a",
//         b: "b",
//         c: "c",
//         d: "d",
//       },
//       correctAnswer: "b",
//     },
//   ];
//   function showQuestions(questions, quizContainer) {
//     var output = [];
//     var answers;
//     for (var i = 0; i < questions.length; i++) {
//       answers = [];
//       for (letter in questions[i].answers) {
//         answers.push(
//           "<label>" +
//             '<input type="radio" name="question' +
//             i +
//             '" value="' +
//             letter +
//             '">' +
//             letter +
//             ": " +
//             questions[i].answers[letter] +
//             "</label>"
//         );
//       }
//       output.push(
//         '<div class="question">' +
//           questions[i].question +
//           "</div>" +
//           '<div class="answers">' +
//           answers.join("") +
//           "</div>"
//       );
//     }
//   }
//   showQuestions(questions);
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
var potato = document.querySelector("#startQuiz");

potato.addEventListener("click", startQuiz);

function startQuiz() {
    // Timer jumps from 0 to 75 seconds
    // & Show the first question (aka call showQuestions)
    showQuestions();
}

function showQuestions() {
    // Grab the question holder and answer holders
    var question = document.querySelector(".question");
    var answer1 = document.querySelector("#sarah");
    var answer2 = document.querySelector("#hannah");
    var answer3 = document.querySelector("#kate");
    var answer4 = document.querySelector("#danny");

    // Display the question
    question.textContent = "Question 1: What is my name?"

    // Display answers
    answer1.textContent = question[2].answer[2];
    answer2.textContent = "Hannah";
    answer3.textContent = "Kate";
    answer4.textContent = "Danny";

    // Add event listeners to the buttons
    answer1.addEventListener("click", evaluateAnswer);
    answer2.addEventListener("click", evaluateAnswer);
    answer3.addEventListener("click", evaluateAnswer);
    answer4.addEventListener("click", evaluateAnswer);
}

function evaluateAnswer() {
    // If they are right, ntohign happens
    // If they are wrong, lose 10 seconds
    // if event.target.id does not match("sarah"), then minus 10 seconds, and tell them wrong!

    // showquestion 2
    showQuestions();
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

function clickExample(event) {
    console.log(event);
    console.log(event.target.id);

}

potato.addEventListener("click", clickExample);
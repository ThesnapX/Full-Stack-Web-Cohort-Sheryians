// DOM Elements
const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("score");
const finalScoreSpan = document.getElementById("final-score");
const maxScoreSpan = document.getElementById("max-score");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

// Array of objects which contains all the quiz question along with thier option and thier correct answers
const quizQuestions = [
  {
    question: "What is the capital of India?",
    answers: [
      { text: "Bihar", correct: false },
      { text: "Maharashtra", correct: false },
      { text: "Delhi", correct: true },
      { text: "Punjab", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// QUIZZ Variables
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false; //This will help to not quickly select a diffrent answer

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// EventListners

startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

// All Required Functions
function startQuiz() {
  // this function will start the quizz from begining by making all value to 0 add making a new fresg start
  currentQuestionIndex = 0;
  score = 0;
  scoreSpan.textContent = score;

  startScreen.classList.remove("active");
  quizScreen.classList.add("active");

  showQuestion();
}
function showQuestion() {
  // this is function is for to showing the question and answer for quizz section
  answersDisabled = false;
  const currentQuestion = quizQuestions[currentQuestionIndex];
  currentQuestionSpan.textContent = currentQuestionIndex + 1;
  questionText.textContent = currentQuestion.question;

  answersContainer.innerHTML = ""; //To get rid of previous question
  currentQuestion.answers.forEach((answer) => {
    //loop for answers object in question aray which will genrate answer button how much that object contains the element
    const button = document.createElement("button");
    button.textContent = answer.text; //to add the content of the answer object into the button
    button.classList.add("answer-btn");
    // what is dataset? it's a property of the button element that allows you to store custom data
    button.dataset.correct = answer.correct;

    button.addEventListener("click", selectAnswer);

    answersContainer.appendChild(button);
  });

  // Progress Bar - just simple percentage formula used here
  const progressPrecent = (currentQuestionIndex / quizQuestions.length) * 100;
  progressBar.style.width = progressPrecent + "%";
}

function selectAnswer(event) {
  if (answersDisabled) return;
  answersDisabled = true;
  const selectedButton = event.target;
  const isCorrect = selectedButton.dataset.correct === "true"; //the correct should be same as the the above button.dataset

  // To convert answersContainer.children to array as it is a html blocks
  // console.log(answersContainer.children)
  Array.from(answersContainer.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    } else if (button === selectedButton) {
      button.classList.add("incorrect");
    }
  });

  // if answer correct then + the score
  if (isCorrect) {
    score++;
    scoreSpan.textContent = score;
  }

  setTimeout(() => {
    // to check if more questions are there or not. using setTimout because to give a delay before going to next question
    currentQuestionIndex++;
    if (currentQuestionIndex < quizQuestions.length) {
      // if more question then show question function will run
      showQuestion();
    } else {
      // if the questions are over from the array hen show result function will run
      showResults();
    }
  }, 1000);
}

function showResults() {
  quizScreen.classList.remove("active");
  resultScreen.classList.add("active");

  finalScoreSpan.textContent = score;
  const percentage = (score / quizQuestions.length) * 100;

  // to display custom output for every score
  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You are Genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great Job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good Effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else if (percentage >= 100) {
    resultMessage.textContent = "Keep studing! You'll get better!";
  }
}
function restartQuiz() {
  resultScreen.classList.remove("active");
  startQuiz();
}

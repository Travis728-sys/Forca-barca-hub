const quizData = [
  {
    question: "Who is FC Barcelona's all-time top scorer?",
    options: ["Ronaldinho", "Lionel Messi", "Xavi", "Luis Suárez"],
    answer: "Lionel Messi"
  },
  {
    question: "What is the name of Barcelona’s stadium?",
    options: ["Bernabéu", "Etihad", "Camp Nou", "Anfield"],
    answer: "Camp Nou"
  },
  {
    question: "What year was FC Barcelona founded?",
    options: ["1899", "1905", "1910", "1923"],
    answer: "1899"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const resultEl = document.getElementById("result");

function loadQuestion() {
  const current = quizData[currentQuestion];
  questionEl.textContent = current.question;
  optionsEl.innerHTML = "";

  current.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("quiz-option");
    btn.addEventListener("click", () => checkAnswer(option));
    optionsEl.appendChild(btn);
  });
}

function checkAnswer(selected) {
  const correct = quizData[currentQuestion].answer;
  const allOptions = document.querySelectorAll(".quiz-option");

  allOptions.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) {
      btn.style.backgroundColor = "green";
    } else if (btn.textContent === selected) {
      btn.style.backgroundColor = "red";
    }
  });

  if (selected === correct) {
    score++;
  }

  nextBtn.style.display = "block";
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
    nextBtn.style.display = "none";
  } else {
    showResult();
  }
});

function showResult() {
  document.getElementById("quiz-container").style.display = "none";
  resultEl.style.display = "block";
  resultEl.innerHTML = `<h3>Quiz Complete!</h3><p>Your Score: ${score} / ${quizData.length}</p>`;
}

// Start quiz
loadQuestion();

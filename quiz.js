// quiz.js

const questions = [
  {
    question: "Who is FC Barcelona’s all-time top scorer?",
    options: ["Lionel Messi", "Luis Suárez", "Ronaldinho", "César Rodríguez"],
    answer: "Lionel Messi"
  },
  {
    question: "What year was FC Barcelona founded?",
    options: ["1899", "1902", "1910", "1923"],
    answer: "1899"
  },
  {
    question: "Which stadium is home to FC Barcelona?",
    options: ["Santiago Bernabéu", "Camp Nou", "Wanda Metropolitano", "Mestalla"],
    answer: "Camp Nou"
  },
  {
    question: "Who wore the #6 shirt before becoming Barcelona’s head coach?",
    options: ["Iniesta", "Xavi", "Busquets", "Puyol"],
    answer: "Xavi"
  }
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");
const scoreEl = document.getElementById("score");

function loadQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach(option => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.onclick = () => selectAnswer(option, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(selected, correct) {
  const buttons = optionsEl.querySelectorAll("button");
  buttons.forEach(btn => {
    btn.disabled = true;
    if (btn.textContent === correct) btn.style.background = "green";
    else if (btn.textContent === selected) btn.style.background = "red";
  });

  if (selected === correct) score++;
  scoreEl.textContent = `Score: ${score}/${questions.length}`;
}

nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    questionEl.textContent = "Quiz Completed!";
    optionsEl.innerHTML = "";
    nextBtn.style.display = "none";
  }
});

window.onload = loadQuestion;

const questions = [
  {
    question: "Who is Barcelona's all-time top scorer?",
    options: ["Ronaldinho", "Lionel Messi", "Luis Suárez", "Neymar"],
    answer: "Lionel Messi",
  },
  {
    question: "What are Barcelona's iconic colors?",
    options: ["Red & White", "Blue & Red", "Black & Yellow", "Green & White"],
    answer: "Blue & Red",
  },
  {
    question: "What is the name of Barcelona's stadium?",
    options: ["Santiago Bernabéu", "Wanda Metropolitano", "Camp Nou", "Old Trafford"],
    answer: "Camp Nou",
  },
];

let currentQuestion = 0;
let score = 0;

const questionEl = document.getElementById("question");
const optionsEl = document.getElementById("options");
const nextBtn = document.getElementById("nextBtn");

function showQuestion() {
  const q = questions[currentQuestion];
  questionEl.textContent = q.question;
  optionsEl.innerHTML = "";

  q.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.textContent = option;
    btn.classList.add("option-btn");
    btn.onclick = () => selectAnswer(btn, q.answer);
    optionsEl.appendChild(btn);
  });
}

function selectAnswer(button, correctAnswer) {
  const isCorrect = button.textContent === correctAnswer;
  if (isCorrect) {
    score++;
  }

  button.classList.add(isCorrect ? "correct" : "incorrect");

  Array.from(optionsEl.children).forEach((btn) => {
    btn.disabled = true;
    if (btn.textContent === correctAnswer) {
      btn.classList.add("correct");
    }
  });
}

nextBtn.onclick = () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
};

function showScore() {
  questionEl.textContent = `🎉 Quiz Complete!`;
  optionsEl.innerHTML = `
    <p style="font-size: 1.3rem; margin-top: 20px;">
      Your score: <strong>${score}</strong> out of <strong>${questions.length}</strong>
    </p>
    <button onclick="restartQuiz()" style="margin-top: 20px; padding: 10px 20px; background: #a50044; color: white; border: none; border-radius: 6px; cursor: pointer;">Restart Quiz</button>
  `;
  nextBtn.style.display = "none";
}

function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  nextBtn.style.display = "inline-block";
  showQuestion();
}


showQuestion();

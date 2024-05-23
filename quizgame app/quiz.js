const questionJSON = [
  {
    category: "Food & Drink",
    id: "qa-1",
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac1?",
  },
  {
    category: "Food & Drink",
    id: "qa-2",
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac2?",
  },
  {
    category: "Food & Drink",
    id: "qa-3",
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac3?",
  },
  {
    category: "Food & Drink",
    id: "qa-4",
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac4?",
  },
  {
    category: "Food & Drink",
    id: "qa-5",
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac5?",
  },
];

// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three ",
//   options: ["Two", "Three ", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

// const { correctAnswer, options, question } = questionObj;

let score = 0;
let currentQuestion = 0;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");
const nextEl = document.getElementById("next");

function showQuestion() {
  const { correctAnswer, options, question } = questionJSON[currentQuestion];
  questionEl.textContent = question;

  let shuffledOptionsArray = shuffledOptions(options);

  shuffledOptionsArray.forEach((option) => {
    const newButton = document.createElement("button");
    newButton.textContent = option;
    optionEl.appendChild(newButton);
    newButton.addEventListener("click", () => {
      if (newButton.textContent === correctAnswer) {
        score++;
      } else {
        score = score - 0.25;
      }
      scoreEl.textContent = `score:${score}`;
      nextQuestion();
    });
  });
}

showQuestion();

nextEl.addEventListener("click", () => {
  nextQuestion();
});

function shuffledOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

function nextQuestion() {
  currentQuestion++;
  optionEl.textContent = "";
  if (currentQuestion >= questionJSON.length) {
    questionEl.textContent = "Quiz Completed";
    nextEl.remove();
  } else {
    showQuestion();
  }
}

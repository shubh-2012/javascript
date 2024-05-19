const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three ",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

const { correctAnswer, options, question } = questionObj;

const questionEl = document.getElementById("question");
const optionEl = document.getElementById("options");
const scoreEl = document.getElementById("score");

questionEl.textContent = question;
let score = 0;

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
    questionEl.textContent = "Quiz Completed";
    optionEl.textContent = "";
  });
});

function shuffledOptions(options) {
  for (let i = options.length - 1; i >= 0; i--) {
    const j = Math.floor(Math.random() * i + 1);
    [options[i], options[j]] = [options[j], options[i]];
  }
  return options;
}

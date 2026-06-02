# 🎮 Quiz Game

## 📌 Overview

Quiz Game is an interactive web application built using **React.js** and **CSS**.
The game presents multiple-choice questions to the user, calculates the score in real time, and displays the final result at the end.

This project was created to practice **React fundamentals, state management, and dynamic UI rendering**.

---

## ✨ Features

* 🧠 Multiple-choice questions system
* ⚡ Real-time score tracking
* 🔄 Dynamic question rendering
* 📊 Final result display at the end
* 🎯 Simple and interactive UI
* 📱 Responsive design

---

## 🛠️ Technologies Used

* React.js
* CSS3
* JavaScript (ES6)

---

## ⚙️ How It Works

The application uses React state management to control:

* Current question index
* User score
* Answer selection

Based on user interaction, the UI updates dynamically without page reload.

---

### 📌 Core Concept Example

```js id="quiz_logic"
const [currentQuestion, setCurrentQuestion] = useState(0);
const [score, setScore] = useState(0);

function handleAnswer(isCorrect) {
  if (isCorrect) {
    setScore(score + 1);
  }
  setCurrentQuestion(currentQuestion + 1);
}
```

---

## 🧠 Learning Outcomes

* React components structure
* useState hook usage
* Event handling in React
* Conditional rendering
* Dynamic UI updates
* Component-based architecture

---

## 🚀 Future Improvements

* ⏱️ Add timer for each question
* 🏆 Add leaderboard system
* 🎨 Improve UI/UX design
* 📊 Add progress bar
* 🌐 Fetch questions from API

---

## 👨‍💻 Author

Huzaifa Anwar

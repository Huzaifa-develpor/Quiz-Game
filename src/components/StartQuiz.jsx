import React, { useState } from 'react';
import quiz from './questions';
import Result from './Result';
import './StartQuiz.css';

const shuffleQuiz = (array) => {
  let shuffled = [...array];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled.slice(0, 10);
};

const currentSessionQuestions = shuffleQuiz(quiz);

const StartQuiz = () => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState(null);
  const [showResult, setShowResult] = useState(false);

  const checkResult = (e) => {
    setSelected(e.target.value);
  };

  const next = () => {
    if (selected === null) {
      alert("Please select an option!");
      return;
    }
    
    if (selected === currentSessionQuestions[index].correctAnswer) {
      setScore(score + 1);
    }
    
    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((currVal) => {
      currVal.checked = false;
    });

    if (index + 1 === currentSessionQuestions.length) {
      setShowResult(true);
    } else {
      setIndex(index + 1);
    }
    setSelected(null);
  };

  if (showResult) {
    return (
      <Result 
        score={score} 
        total={currentSessionQuestions.length} 
        onRestart={() => {
          setIndex(0);
          setScore(0);
          setSelected(null);
          setShowResult(false);
        }}
        onGoHome={() => {
          window.location.reload();
        }}
      />
    );
  }

  return (
    <>
      <div className="container">
        <h2 id='quizh'>Quiz Game</h2>
        <div className="quiz">
          <h3 id='no'>Question {index + 1} of {currentSessionQuestions.length}</h3>
          <div className='quest'>
            <p>{currentSessionQuestions[index].question}</p>
          </div>
          <div className="option-list">
            <div className="option">
              <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={currentSessionQuestions[index].options[0]} />
              <p>{currentSessionQuestions[index].options[0]}</p>
            </div>

            <div className="option">
              <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={currentSessionQuestions[index].options[1]} />
              <p>{currentSessionQuestions[index].options[1]}</p>
            </div>

            <div className="option">
              <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={currentSessionQuestions[index].options[2]} />
              <p>{currentSessionQuestions[index].options[2]}</p>
            </div>

            <div className="option">
              <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={currentSessionQuestions[index].options[3]} />
              <p>{currentSessionQuestions[index].options[3]}</p>
            </div>
          </div>
          <div className="next">
            <button className='second-btn' onClick={next}>Next</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartQuiz;
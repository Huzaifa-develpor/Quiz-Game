import React, { useState } from 'react';
import quiz from './questions';
import Result from './Result';
import './StartQuiz.css'

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
    if (selected === quiz[index].correctAnswer) {
      setScore(score + 1);
    }
    const checked = document.querySelectorAll(".checkedValue");
    checked.forEach((currVal) => {
      currVal.checked = false
    })

    if (index + 1 === quiz.length) {
      setShowResult(true);
    } else {
      setIndex(index + 1);
    }
    setSelected(null);
  };

  if (showResult) {
    return <Result score={score} total={quiz.length} />;
  }

  return (
    <>

      <div className="container">
        <h2 id='quizh'>Quiz Game</h2>
        <div className="quiz">
          <h3 id='no'>Question {index+1} of 10</h3>
          <div className='quest'>
            <p>{quiz[index].question}</p>
          </div>
            <div className="option-list">
          <div className="option">
            <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={quiz[index].options[0]} />
            <p>{quiz[index].options[0]}</p>
          </div>

          <div className="option">
            <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={quiz[index].options[1]} />
            <p>{quiz[index].options[1]}</p>
          </div>

          <div className="option">
            <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={quiz[index].options[2]} />
            <p>{quiz[index].options[2]}</p>
          </div>

          <div className="option">
            <input name='select' type="radio" className='checkedValue' onChange={checkResult} value={quiz[index].options[3]} />
            <p>{quiz[index].options[3]}</p>
          </div>
        </div>
        <div className="next">
        <button className='second-btn' onClick={next}>Next</button>
      </div>
        </div>
      </div>
    </>
  )
}

export default StartQuiz

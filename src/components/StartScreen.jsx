import React from 'react';
import './StartScreen.css';

const StartScreen = ({ onStartClick }) => {
  return (
    <div className="container-start">
    <div className="start">
      <h2 id="quiz">Quiz Game</h2>
      <button id="first-btn" onClick={onStartClick}>Play Now</button>
    </div>
    </div>
  );
};

export default StartScreen;

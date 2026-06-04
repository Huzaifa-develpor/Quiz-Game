import React from 'react';
import './Result.css';

const Result = ({ score, total, onRestart, onGoHome }) => {
  return (
    <div className="result">
      <div className="circle">
        <h2>Quiz Finished!</h2>
        <p>Your Score: {score} / {total}</p>
      </div>
      
      {/* Action Buttons Container */}
      <div className="result-buttons">
        <button className="result-btn restart-btn" onClick={onRestart}>
          🔄 Play Again
        </button>
        <button className="result-btn home-btn" onClick={onGoHome}>
          Home
        </button>
      </div>
    </div>
  );
};

export default Result;
import React from 'react';
import './Result.css';

const Result = ({ score, total, onRestart, onGoHome }) => {
  return (
    <div className="result-container">
      <div className="result-card">
        <div className="score-circle">
          <h2>Quiz Finished!</h2>
          <p className="score-text">{score}<span> / {total}</span></p>
        </div>
        
        <div className="result-actions">
          <button className="res-btn play-again" onClick={onRestart}>
            🔄 Play Again
          </button>
          <button className="res-btn go-home" onClick={onGoHome}>
            🏠 Home
          </button>
        </div>
      </div>
    </div>
  );
};

export default Result;
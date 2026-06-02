import React from 'react';
import'./Result.css';

const Result = ({ score, total }) => {
  return (
    <div className="result">
      <div className="circle">
      <h2>Quiz Finished!</h2>
      <p>Your Score: {score} / {total}</p>
      </div>
    </div>
  );
};

export default Result;

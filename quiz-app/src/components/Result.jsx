import React from "react";

const Result = ({ score, onTryAgain, timeUp }) => {
  return (
    <div className="result-container">
      <h2>{timeUp ? "Time's Up!" : "Quiz Completed!"}</h2>
      <p>Your Score: {score} out of 10</p>
      <p>Thank you for playing!</p>
      <button onClick={onTryAgain}>Try Again</button>
    </div>
  );
};

export default Result; 
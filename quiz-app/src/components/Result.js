import React from "react";

const Result = ({ score }) => {
  return (
    <div className="result-container">
      <h2>Quiz Completed!</h2>
      <p>Your Score: {score} out of 3</p>
      <p>Thank you for playing!</p>
      <button onClick={() => window.location.reload()}>Try Again</button>
    </div>
  );
};

export default Result; 
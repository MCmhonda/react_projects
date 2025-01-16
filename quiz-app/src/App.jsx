import React, { useState } from "react";
import Quiz from "./components/Quiz.jsx";
import Result from "./components/Result.jsx";
import Menu from "./components/Menu.jsx";

const App = () => {
  const [score, setScore] = useState(0);
  const [gameState, setGameState] = useState("menu");
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState(null);
  const [timeUp, setTimeUp] = useState(false);

  const categories = [
    { id: "general", name: "General Knowledge" },
    { id: "science", name: "Science" },
    { id: "history", name: "History" },
    { id: "geography", name: "Geography" },
    { id: "mathematics", name: "Mathematics" },
    { id: "technology", name: "Technology & Computers" }
  ];

  const difficulties = [
    { id: "easy", name: "Easy" },
    { id: "medium", name: "Medium" },
    { id: "hard", name: "Hard" }
  ];

  const handleQuizCompletion = (finalScore, isTimeUp = false) => {
    setScore(finalScore);
    setTimeUp(isTimeUp);
    setGameState("result");
  };

  const handleSelectCategory = () => {
    setGameState("category");
  };

  const handleCategorySelect = (categoryId) => {
    setSelectedCategory(categoryId);
    setGameState("difficulty");
  };

  const handleDifficultySelect = (difficultyId) => {
    setSelectedDifficulty(difficultyId);
    setGameState("playing");
  };

  const handleTryAgain = () => {
    setScore(0);
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setGameState("menu");
  };

  const handleQuit = () => {
    setScore(0);
    setSelectedCategory(null);
    setSelectedDifficulty(null);
    setGameState("menu");
  };

  const renderContent = () => {
    switch (gameState) {
      case "menu":
        return <Menu onSelectCategory={handleSelectCategory} />;
      case "category":
        return (
          <div className="category-container">
            <h2>Select Category</h2>
            <div className="category-buttons">
              {categories.map(category => (
                <button 
                  key={category.id}
                  className="category-button" 
                  onClick={() => handleCategorySelect(category.id)}
                >
                  {category.name}
                </button>
              ))}
            </div>
            <button className="back-button" onClick={() => setGameState("menu")}>
              Back to Menu
            </button>
          </div>
        );
      case "difficulty":
        return (
          <div className="difficulty-container">
            <h2>Select Difficulty</h2>
            <div className="difficulty-buttons">
              {difficulties.map(difficulty => (
                <button
                  key={difficulty.id}
                  className="difficulty-button"
                  onClick={() => handleDifficultySelect(difficulty.id)}
                >
                  {difficulty.name}
                </button>
              ))}
            </div>
            <button className="back-button" onClick={() => setGameState("category")}>
              Back to Categories
            </button>
          </div>
        );
      case "playing":
        return (
          <Quiz 
            onComplete={handleQuizCompletion} 
            onQuit={handleQuit}
            category={selectedCategory}
            difficulty={selectedDifficulty} 
          />
        );
      case "result":
        return <Result score={score} onTryAgain={handleTryAgain} timeUp={timeUp} />;
      default:
        return <Menu onSelectCategory={handleSelectCategory} />;
    }
  };

  return (
    <div className="app-container">
      <h1>Quiz App</h1>
      {renderContent()}
      <div className="footer">
        <div className="signature">MCmhonda</div>
        <div className="copyright">© 2024 All rights reserved</div>
      </div>
    </div>
  );
};

export default App;

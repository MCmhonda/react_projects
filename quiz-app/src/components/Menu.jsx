import React from "react";

const Menu = ({ onSelectCategory }) => {
  return (
    <div className="menu-container">
      <h2>Welcome to the Quiz!</h2>
      <div className="menu-buttons">
        <button className="menu-button" onClick={onSelectCategory}>
          Choose Category
        </button>
      </div>
    </div>
  );
};

export default Menu; 
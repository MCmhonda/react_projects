import React from "react";
import "./Preloader.css";

const Preloader = () => {
  return (
    <div className="preloader">
      <div className="loader-container">
        <div className="pillar pillar1"></div>
        <div className="pillar pillar2"></div>
        <div className="pillar pillar3"></div>
        <div className="pillar pillar4"></div>
      </div>
    </div>
  );
};

export default Preloader; 
import React, { useState, useEffect } from "react";
import Preloader from "./components/Preloader";
import "./App.css";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Preloader />;
  }

  return (
    <div className="app">
      <h1 className="fancy-text">Hello World!</h1>
    </div>
  );
};

export default App;

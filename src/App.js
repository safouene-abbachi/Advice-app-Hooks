import React, { useState, useEffect } from "react";

import "./App.css";
import axios from "axios";

const App = () => {
  const [advice, setAdvice] = useState("");

  useEffect(() => {
    const effect = async () => {
      await fetchAdvice(advice);
    };
    effect();
  });

  async function fetchAdvice() {
    try {
      const getAdvice = await axios.get("https://api.adviceslip.com/advice");

      const { advice } = getAdvice.data.slip;

      setAdvice(advice);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div className="App">
      <div className="card">
        <h1 className="heading">{advice}</h1>
        <button className="button" onClick={fetchAdvice}>
          <span>Give me advice !</span>
        </button>
      </div>
    </div>
  );
};

export default App;

import React, { useState } from "react";
import Dice from "./components/Dice";
import "./App.css";

const App = () => {
  const [diceValues, setDiceValues] = useState([1, 1]);

  const rollDice = (index) => {
    const newDiceValues = [...diceValues];
    newDiceValues[index] = Math.floor(Math.random() * 6) + 1;
    setDiceValues(newDiceValues);
  };
  return (
    <div className="app">
      <h1>Roll the Dice</h1>
      <div className="dice-container">
        {diceValues.map((value, index) => (
          <Dice key={index} value={value} onClick={() => rollDice(index)} />
        ))}
      </div>
    </div>
  );
};
export default App;

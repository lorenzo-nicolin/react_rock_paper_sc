import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  function check() {
    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const randomChoice1 = choices[Math.floor(Math.random() * choices.length)];

    if (randomChoice === randomChoice1) {
      console.log("It's a tie!");
    }
  }

  return (
    <>
      <div>
        <h3>Rock Paper Scissors</h3>
      </div>

      <div className="Test">
        <button onClick={check}>Play</button>
      </div>
    </>
  );
}

export default App;

import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const choices = ["rock", "paper", "scissors"];

  function check() {
    console.log("run check...");

    const randomChoice = choices[Math.floor(Math.random() * choices.length)];
    const randomChoice1 = choices[Math.floor(Math.random() * choices.length)];

    console.log(randomChoice);
    console.log(randomChoice1);

    // Determine the winner
    if (randomChoice === randomChoice1) {
      console.log("It's a tie!");
    } else if (
      (randomChoice === "rock" && randomChoice1 === "scissors") ||
      (randomChoice === "scissors" && randomChoice1 === "paper") ||
      (randomChoice === "paper" && randomChoice1 === "rock")
    ) {
      console.log("Player 1 wins!");
    } else {
      console.log("Player 2 wins!");
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

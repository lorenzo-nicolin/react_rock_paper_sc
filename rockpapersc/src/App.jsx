import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  function check() {
    console.log("aaa");
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

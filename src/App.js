import "./styles.css";
import { useState } from "react";
export default function App() {
  return (
    <div className="App">
      <Counter />
    </div>
  );
}
function Counter() {
  const [count, setCount] = useState(0);
  const [step, setStep] = useState(1);
  function dec() {
    setCount((c) => c - step);
  }
  function inc() {
    setCount((c) => c + step);
  }

  function stepDec() {
    setStep((c) => c - 1);
  }
  function stepInc() {
    setStep((c) => c + 1);
  }
  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div>
      <div>
        <button onClick={stepDec}>-</button>
        <span>Step: {step}</span>
        <button onClick={stepInc}>+</button>
      </div>
      <div>
        <button onClick={dec}>-</button>
        <span>Count: {count}</span>
        <button onClick={inc}>+</button>
      </div>
      <p>
        <span>
          {count === 0
            ? "Today is "
            : count > 0
            ? `${count} days from today is `
            : `${Math.abs(count)} days ago was `}
        </span>
        <span>{date.toDateString()}</span>
      </p>
    </div>
  );
}

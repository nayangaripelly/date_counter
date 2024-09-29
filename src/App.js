import { useState } from "react";

export default function App() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(0);

  function handleNextStep() {
    setStep((step) => step + 1);
  }

  function handlePreviousStep() {
    setStep((step) => step - 1);
  }

  function handleNextCount() {
    setCount((count) => count + step);
  }

  function handlePreviousCount() {
    setCount((count) => count - step);
  }

  const date = new Date();
  date.setDate(date.getDate() + count);
  return (
    <div className="App">
      <div className="differ">
        <button onClick={handlePreviousStep}>-</button>
        <p>Step : {step}</p>
        <button onClick={handleNextStep}>+</button>
      </div>
      <div className="differ">
        <button onClick={handlePreviousCount}>-</button>
        <p>Count : {count}</p>
        <button onClick={handleNextCount}>+</button>
      </div>
      <p>
        {count === 0 && "Today"} {count > 0 && `after ${count} Days`}
        {count < 0 && `before ${Math.abs(count)} Days`} is {date.toDateString()}
      </p>
    </div>
  );
}

import { useState } from "react";

const Challenge1 = () => {
  const [count, setCount] = useState(0);

  function incrementCounter() {
    setCount(count + 1);
  }
  function resetCounter() {
    setCount(0);
  }
  function decrementCounter() {
    setCount(count - 1);
  }
  return (
    <div>
      <span>{count}</span>
      <br />
      <button onClick={incrementCounter}>+</button>
      <button onClick={resetCounter}>0</button>
      <button onClick={decrementCounter}>-</button>
    </div>
  );
};

export default Challenge1;
// 🔥 Challenge 1 — Counter

// Ek React component banao:

// Requirements
// Initial count 0
// +1 button
// -1 button
// Reset button
// Current count screen par show ho
// useState use karna hai
// Direct state mutation allowed nahi

// Expected:
// Count: 0
// [-]  [+]  [Reset]

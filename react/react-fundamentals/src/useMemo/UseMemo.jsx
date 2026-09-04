// import { useState } from "react";

// function App() {
//   const [number, setNumber] = useState(10);
//   const [count, setCount] = useState(0);

//   function calculate() {
//     console.log("CALCULATION RUNNING");

//     return number * 100;
//   }

//   const result = calculate();

//   return (
//     <div>
//       <h1>Result: {result}</h1>

//       <button onClick={() => setNumber(number + 1)}>Change Number</button>

//       <button onClick={() => setCount(count + 1)}>Change Count</button>

//       <h2>Count: {count}</h2>
//     </div>
//   );
// }

// export default App;

import { useMemo, useState } from "react";

function App() {
  const [number, setNumber] = useState(10);
  const [count, setCount] = useState(0);

  function calculate() {
    console.log("CALCULATION RUNNING");

    return number * 100;
  }

  const result = useMemo(() => {
    return calculate();
  }, [number]);

  return (
    <div>
      <h1>Result: {result}</h1>

      <button onClick={() => setNumber(number + 1)}>Change Number</button>

      <button onClick={() => setCount(count + 1)}>Change Count</button>

      <h2>Count: {count}</h2>
    </div>
  );
}

export default App;

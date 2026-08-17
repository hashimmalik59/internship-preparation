import { useState } from "react";
import Counter from "./challenges/Counter";
import Display from "./challenges/Display";

const App = () => {
  const [count, setCount] = useState(0);
  function handleCount() {
    setCount(count + 1);
  }
  return (
    <div className="flex gap-2">
      <Counter onIncrement={handleCount} />
      <Display showCount={count} />
    </div>
  );
};

export default App;

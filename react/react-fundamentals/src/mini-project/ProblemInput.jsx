import { useState } from "react";

const ProblemInput = () => {
  const [input, setInput] = useState("");

  function handleInput(e) {
    setInput(e.target.value);
    console.log(e.target.value);
  }

  function handleGetValue(e) {
    e.preventDefault();
    console.log(input);
  }
  return (
    <form onSubmit={handleGetValue} className="flex flex-col gap-2 m-2">
      <input
        type="text"
        placeholder="text..."
        value={input}
        className="border rounded p-2"
        onChange={handleInput}
      />
      <button className="bg-green-600 text-white rounded px-3 py-1">
        Submit
      </button>
    </form>
  );
};

export default ProblemInput;

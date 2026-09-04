import { useState } from "react";

const OnSubmit = () => {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    console.log(text);
  }

  return (
    <div>
      <form
        className="border flex flex-col gap-2 justify-center items-center m-2 p-2 rounded"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Text"
          className="border border-gray-400 rounded p-2 w-full"
          onChange={handleText}
          value={text}
        />
        <input
          type="submit"
          value="Submit"
          className="bg-green-600 rounded p-2 text-white w-full"
        />
      </form>
    </div>
  );
};

export default OnSubmit;

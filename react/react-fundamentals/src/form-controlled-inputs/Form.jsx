import { useState } from "react";

const Form = () => {
  const [text, setText] = useState("");

  function handleText(e) {
    setText(e.target.value);
  }

  return (
    <div className="border flex flex-col justify-center items-center gap-2 m-2 p-2">
      <input
        type="text"
        placeholder="Write something here..."
        className="border rounded p-2"
        onChange={handleText}
        value={text}
      />
      <h1>Text: {text}</h1>
    </div>
  );
};

export default Form;

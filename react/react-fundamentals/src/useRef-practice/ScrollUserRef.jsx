import { useRef } from "react";

const ScrollDemo = () => {
  const boxRef = useRef(null);

  const scrollToBottom = () => {
    boxRef.current.scrollTop = boxRef.current.scrollHeight;
  };

  return (
    <div className="m-4 flex flex-col gap-2">
      {/* Scrollable Box */}
      <div
        ref={boxRef}
        className="h-32 w-64 overflow-y-scroll border p-2 flex flex-col gap-2 bg-gray-50 rounded"
      >
        <p>Line 1</p>
        <p>Line 2</p>
        <p>Line 3</p>
        <p>Line 4</p>
        <p>Line 5</p>
        <p>Line 6</p>
        <p>Line 7</p>
        <p>Line 8</p>
      </div>

      {/* Button to trigger scroll */}
      <button
        onClick={scrollToBottom}
        className="w-64 bg-green-600 text-white p-2 rounded cursor-pointer"
      >
        Scroll to Bottom
      </button>
    </div>
  );
};

export default ScrollDemo;

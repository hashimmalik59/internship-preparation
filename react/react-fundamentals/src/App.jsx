import { useEffect, useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  const [like, setLike] = useState(0);
  useEffect(() => {
    document.title = `My page ${count}`;
    console.log("hello");
  }, [count, like]);
  return (
    <div>
      <h1>Hello React</h1>
      <button
        onClick={() => setCount(count + 1)}
        className="bg-green-600 text-white"
      >
        Count: {count}
      </button>
      <br />
      <button
        onClick={() => setLike(like + 1)}
        className="bg-green-600 text-white"
      >
        Like: {like}
      </button>
    </div>
  );
};

export default App;

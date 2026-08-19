// import { useState } from "react";
// import LikeButton from "./challenges/LikeButton";
// import LikeDisplay from "./challenges/LikeDisplay";
// import ConditionalRendering from "./challenges/ConditionalRendering";
// import ImageObject from "./challenges/ImageObject";

import { useState } from "react";

// import ListRendering from "./challenges/ListRendering";

const App = () => {
  // const [like, setLike] = useState(0);
  // function handleLike() {
  //   setLike(like + 1);
  // }
  const [count, setCount] = useState(0);

  return (
    <div>
      {/* <ImageObject />
      <LikeButton onLike={handleLike} />
      <LikeDisplay displayLike={like} /> */}
      {/* <ConditionalRendering /> */}
      {/* <ListRendering /> */}
      <br />
      <span className={!count && "text-red-600"}>{count}</span>
      <button
        onClick={() => setCount((prevCount) => prevCount + 1)}
        className="bg-green-600 text-white border rounded px-2 font-extrabold"
      >
        +
      </button>
      <button
        onClick={() => setCount(0)}
        className="bg-red-600 text-white border rounded px-2 font-extrabold"
      >
        0
      </button>
      <button
        onClick={() => setCount((prevCount) => prevCount - 1)}
        className="bg-gray-600 text-white border rounded px-2 font-extrabold"
      >
        -
      </button>
    </div>
  );
};

export default App;

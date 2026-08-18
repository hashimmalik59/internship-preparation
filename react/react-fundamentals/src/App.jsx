import { useState } from "react";
import LikeButton from "./challenges/LikeButton";
import LikeDisplay from "./challenges/LikeDisplay";

const App = () => {
  const [like, setLike] = useState(0);
  function handleLike() {
    setLike(like + 1);
  }
  return (
    <div>
      <LikeButton onLike={handleLike} />
      <LikeDisplay displayLike={like} />
    </div>
  );
};

export default App;

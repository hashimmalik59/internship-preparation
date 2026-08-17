// import { useState } from "react";

// import Challenge1 from "./challenges/01-challenge";
import { use, useState } from "react";
import Challenge2 from "./challenges/02-challenge";

// const App = () => {
//   const [count, setCount] = useState(0);
//   function increaseCount() {
//     setCount((prev) => prev + 1);
//   }
//   return (
//     <div>
//       <button onClick={increaseCount}>Count</button>
//       {count}
//     </div>
//   );
// };

// export default App;

// function App() {
// return (
//     <div>
//       <User name="Hashim" />
//       <User name="Qazi" />
//       <User name="Shafqat" />
//       <User name="Hakeem" />
//     </div>
//   );
// }
// export default App;

// function User(props) {
//   return (
//     <div>
//       <span>Hello {props.name}</span>
//       <br />
//     </div>
//   );
// }

const App = () => {
  const [name, setName] = useState("Hashim");
  const [age, setAge] = useState(24);
  function changeName() {
    setName("Ali");
  }
  function handleBirthday() {
    if (age < 25) setAge(age + 1);
  }

  return (
    <div>
      {/* <Challenge1 /> */}
      <Challenge2 username={name} userAge={age} />
      <button onClick={changeName}>Change name</button>
      <button onClick={handleBirthday}>Birthday</button>
    </div>
  );
};

export default App;

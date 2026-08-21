import { useRef } from "react";

const MutableStorage = () => {
  // const [count, setCount] = useState(0);

  // 1. Yahan useRef bana jo 0 se start ho (jaise: const countRef = useRef(0))
  const countRef = useRef(0);

  // 2. Yeh check karne ke liye ke component re-render ho raha hai ya nahi
  console.log("Component re-rendered!");

  return (
    <div className="m-4">
      <button
        onClick={() => {
          // setCount(count + 1);
          // console.log("Counter value:", count);
          countRef.count++;
          console.log("CountRef value:", countRef.current);
          // 3. Yahan countRef.current ki value 1 se barha (++)
          // aur console.log karwa kar value check kar
        }}
        className="bg-purple-600 text-white p-2 rounded"
      >
        Click Me
      </button>
    </div>
  );
};

export default MutableStorage;

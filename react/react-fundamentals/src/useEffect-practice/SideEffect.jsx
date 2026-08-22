import { useState, useEffect } from "react";

const UserProfile = () => {
  const [user, setUser] = useState(null);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ali");

  function handleCount() {
    setCount(count + 1);
  }
  function handleName() {
    setName("Umar");
  }
  useEffect(() => {
    console.log("API");
    // API call
    fetch("https://jsonplaceholder.typicode.com/users/1")
      .then((res) => res.json())
      .then((data) => setUser(data));
  }, [count, name]); // Empty array matlab: Yeh sirf ek baar chalega jab component pehli dafa load hoga.

  if (!user) return <p>Loading...</p>;

  return (
    <>
      <div className="p-4 border m-4">
        <h2 className="text-xl font-bold">{user.name}</h2>
        <p>Email: {user.email}</p>
      </div>
      <button className="bg-green-600" onClick={handleCount}>
        Count: {count}
      </button>
      <button onClick={handleName}>Name: {name}</button>
    </>
  );
};
export default UserProfile;

// [] : aik hi baar chalana useEffect ko first time

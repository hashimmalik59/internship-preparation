import { useEffect, useState } from "react";

const App = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUser() {
      const res = await fetch("https://dummyjson.com/users");
      const data = await res.json();
      console.log(data);
      setUsers(data.users);
    }
    fetchUser();
  }, []);

  return (
    <div>
      <h1>useEffect API call</h1>
      <ul className="flex flex-wrap">
        {users.map((user) => (
          <li key={user.id}> {user.firstName} |</li>
        ))}
      </ul>
    </div>
  );
};

export default App;

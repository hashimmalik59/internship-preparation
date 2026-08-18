import { useState } from "react";

const ConditionalRendering = () => {
  const [login, setLogin] = useState(false);
  const [name, setName] = useState("Hashim");
  function handleLogin() {
    setLogin(!login);
    setName(name);
  }

  return (
    <div className="h-[100vh] w-[100%] flex items-center justify-center flex-col gap-10">
      <h1 className="text-4xl">{login ? `Welcome ${name}` : "Login first"}</h1>
      <button
        onClick={handleLogin}
        style={{
          backgroundColor: login ? "green" : "red",
        }}
        className="font-bold text-white rounded px-2 py-1"
      >
        {!login ? "login" : "logout"}
      </button>
    </div>
  );
};

export default ConditionalRendering;

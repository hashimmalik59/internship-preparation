import { useState } from "react";

const FormValidator = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (email.length > 5 && password.length > 5) {
      console.log("Successfullu logged in");
    }
  }

  return (
    <div>
      <form
        className="border flex flex-col justify-center gap-5 m-2 p-2"
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="email"
          className="border w-full p-2"
          onChange={handleEmail}
          value={email}
        />
        <input
          type="password"
          placeholder="password"
          className="border w-full p-2"
          onChange={handlePassword}
          value={password}
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 text-white p-2 w-full"
        />
      </form>
    </div>
  );
};

export default FormValidator;

import { useState } from "react";

const FormValidator = () => {
  return (
    <div>
      <form className="border flex flex-col justify-center gap-5 m-2 p-2">
        <input type="email" placeholder="email" className="border w-full p-2" />
        <input
          type="password"
          placeholder="password"
          className="border w-full p-2"
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

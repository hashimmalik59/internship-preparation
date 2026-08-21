import { useEffect, useRef } from "react";

const UseRef = () => {
  const emailRef = useRef(null);
  const passRef = useRef(null);
  useEffect(() => {
    emailRef.current.focus();
  }, []);
  return (
    <div className="m-2 flex flex-col gap-1">
      <input
        type="email"
        placeholder="email"
        ref={emailRef}
        className="border rounded p-2"
      />
      <input
        type="password"
        placeholder="password"
        ref={passRef}
        className="border rounded p-2"
      />
      <button
        onClick={() => {
          if (emailRef.current.value === "") {
            emailRef.current.focus();
          } else passRef.current.focus();
        }}
        className="rounded p-2 bg-blue-500 text-white"
      >
        Login
      </button>
    </div>
  );
};

export default UseRef;

const Login = () => {
  return (
    <div className="m-10">
      <form className="border border-gray-400 rounded flex flex-col gap-2 items-center justify-center p-2">
        <h1 className="text-blue-600 font-extrabold text-3xl uppercase">
          Login
        </h1>
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded p-2 w-full"
        />
        <input
          type="password"
          placeholder="Password"
          className="border border-gray-300 rounded p-2 w-full"
        />
        <input
          type="submit"
          value="Login"
          className="bg-blue-600 text-white rounded p-2 w-full"
        />
      </form>
    </div>
  );
};

export default Login;

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div className="flex justify-between m-2">
      <h1 className="font-extrabold">Home</h1>
      <div className="flex gap-1">
        <Link to="/login" className="bg-blue-600 text-white rounded px-2">
          Login
        </Link>
        <Link to="/register" className="bg-orange-600 text-white rounded px-2">
          Register
        </Link>
      </div>
    </div>
  );
};

export default Home;

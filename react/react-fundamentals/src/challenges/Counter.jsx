const Counter = ({ onIncrement }) => {
  return (
    <button className="border px-2" onClick={onIncrement}>
      Count
    </button>
  );
};

export default Counter;

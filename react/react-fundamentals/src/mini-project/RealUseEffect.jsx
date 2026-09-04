import { useEffect, useState } from "react";

const RealUseEffect = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [name, setName] = useState("Ahmad");

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch("https://dummyjson.com/products");
      const data = await response.json();
      setProducts(data.products);
    }
    fetchProducts();
  }, [count, name]); // Dependency

  function handleCount() {
    setCount(count + 1);
  }
  function handleName() {
    setName("Muhammad");
  }

  return (
    <div>
      <h1>Products</h1>

      <ul className="grid grid-cols-2">
        {products.map((product) => (
          <li key={product.id}>
            {product.title} — ${product.price}
          </li>
        ))}
      </ul>
      <button
        onClick={handleCount}
        className="bg-blue-600 text-white rounded m-2 px-2"
      >
        Count: {count}
      </button>
      <button
        onClick={handleName}
        className="bg-green-600 text-white rounded m-2 px-2"
      >
        Name: {name}
      </button>
    </div>
  );
};

export default RealUseEffect;

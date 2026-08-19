const ListRendering = () => {
  const productData = [
    { id: 1, title: "17 Pro Max", price: "1500$", isStock: true },
    { id: 2, title: "S26 Ultra", price: "1300$", isStock: true },
    { id: 3, title: "Google Pixel 10 Pro", price: "1200$", isStock: false },
  ];
  const productsList = productData.map((product) => (
    <li style={{ color: product.isStock ? "green" : "red" }} key={product.id}>
      {product.isStock && `${product.title} | ${product.price}`}
    </li>
  ));
  return (
    <div>
      <ul>{productsList}</ul>
    </div>
  );
};

export default ListRendering;

// function main() {
//   // Synchronous(line by line) execution
//   console.log("1st");
//   console.log("2nd");
//   console.log("3rd");
//   console.log("4th");
// }
// main();

function addToCartProduct() {
  console.log("Add to cart product");
}

function increaseQuantity() {
  console.log("Increase the quantity of product");
}

function orderNow() {
  console.log("Order now for order");
}

function proceedToOrder() {
  console.log("Proceed to order");
}

function deliverOrder() {
  addToCartProduct();
  increaseQuantity();
  orderNow();
  proceedToOrder();
}
deliverOrder();

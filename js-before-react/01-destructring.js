// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Yahan destructuring ka code khud likh:
// const [firstColor, secondColor] = colors;

// console.log(firstColor, secondColor); // Expected output: Red Green

const colors = ["Red", "Green", "Blue", "Yellow"];

// Yahan destructuring kar ke Green ko skip kar:
const [firstColor, , thirdColor] = colors;

console.log(firstColor, thirdColor); // Expected output: Red Blue

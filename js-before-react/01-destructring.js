// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Yahan destructuring ka code khud likh:
// const [firstColor, secondColor] = colors;

// console.log(firstColor, secondColor); // Expected output: Red Green

// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Yahan destructuring kar ke Green ko skip kar:
// const [firstColor, , thirdColor] = colors;

// console.log(firstColor, thirdColor); // Expected output: Red Blue

const scores = [90, 80];

// Yahan destructuring kar ke teesri value ke liye default value set kar:
const [math = 90, english = 80, science = 50] = scores;

console.log(math, english, science); // Expected output: 90 80 50

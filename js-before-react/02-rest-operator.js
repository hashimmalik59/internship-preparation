// const numbers = [10, 20, 30, 40, 50];
// Task:
// Array destructuring aur rest operator (...) ka use kar ke pehli do values ko first aur second variables mein nikal, aur baqi saari values ko ek array mein remaining naam ke variable ke andar pack kar. Phir unhein print kar.

// const [firstNum, secondNum, ...otherNums] = numbers;

// console.log(numbers);
// console.log(firstNum);
// console.log(secondNum);
// console.log(otherNums);

// Micro-Task: Rest Parameter in Functions
// Task:
// Ek function bana (chahe regular ya arrow function) jiska naam collectArgs ho. Yeh function rest operator (...) ka use kare taake hum isko jitne marzi numbers pass karein, woh sab ek array ke andar pack ho jayein. Phir function us array ko console log kare.

// Misal ke tor par:
// collectArgs(1, 2, 3, 4, 5); call karne par output [1, 2, 3, 4, 5] aana chahiye.

// function collectArgs(...allArrNums) {
//   console.log(allArrNums);
// }
// collectArgs(1, 2, 3, 4, 5);

// Micro-Task: Rest Parameter with Regular Parameters
// Task:
// Ek function banao jiska naam summarizeScores ho.

// Yeh function pehla argument ek string (studentName) le.

// Baqi saari values ko rest parameter (...scores) ke zariye ek array mein pack kare.

// Function console log kare: Name aur uske scores ka array.

// Misal ke tor par:
// summarizeScores("Ali", 80, 85, 90);
// Output aana chahiye: Ali [80, 85, 90]

// function summarizeScores(studentName, ...scores) {
//   console.log(studentName, scores);
// }
// summarizeScores("Hashim", 90, 96, 99, 92);

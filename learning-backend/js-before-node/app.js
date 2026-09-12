// JavaScript essentials before backend
// 1. Fundamentals of Javascript
// 2. array and object
// 3. function return
// 4. async js coding
// 5. forEach map filter find indexOf

const nums = [1, 2, 3, 4, 5];

nums.forEach((num, index) => console.log(`${index}: ${num} Hello`));

const updateNums = nums.map((num) => num * 3);

console.log(updateNums);

const newNums = nums.filter((num) => num > 3);

console.log(newNums);

const findNum = nums.find((num) => num > 2);

console.log(findNum);

const indexNum = nums.indexOf(4);

console.log(indexNum);

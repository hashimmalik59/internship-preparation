// Take a number and print whether it's positive, negative, or zero.

// 1. Understand: Take a number and checks it positive, negative, or zero
// 2. Example: Input(2) is greater than 0 then positive
// 3. Break: Input(2) is greater than 0 then positive, if input(-3) is less than 0 then negative otherwise 0

function checkPositiveNegative(num) {
    if (typeof num === "number" && !Number.isNaN(num)) {
        if (num > 0) return "positive";
        if (num < 0) return "negative";
        else return "zero";
    } else return "invalid number";
}
// console.log(checkPositiveNegative(4));
// console.log(checkPositiveNegative(-2));
// console.log(checkPositiveNegative(0));
// console.log(checkPositiveNegative("hello"));
// console.log(checkPositiveNegative(NaN));
// console.log(checkPositiveNegative(true));

// Understand: Check whether a number is even or odd
// Input: number 2
// Output: string even
// Psuedocode:
// i. num is completly divided by 2 then print "even"
// ii. otherwise "odd"

function evenOddNum(num) {
    const validNum = typeof num === "number" && !Number.isNaN(num) && Number.isInteger(num)

    if (validNum) {
        if (num % 2 === 0) return "even";
        else return "odd";
    } else return "invalid number";
}

console.log(evenOddNum(6));
console.log(evenOddNum(3));
console.log(evenOddNum("hi"));
console.log(evenOddNum(2.5))
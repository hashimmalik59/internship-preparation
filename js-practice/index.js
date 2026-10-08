// Take a number and print whether it's positive, negative, or zero.

// 1. Understand: Take a number and checks it positive, negative, or zero
// 2. Example: Input(2) is greater than 0 then positive
// 3. Break: Input(2) is greater than 0 then positive, if input(-3) is less than 0 then negative otherwise 0

function checkPositiveNegative(num) {
    if (typeof num === "number" && !Number.isNaN(num)) {
        if (num > 0) return ("positive");
        if (num < 0) return ("negative");
        else return ("zero");
    } else return ("invalid number")

}
console.log(checkPositiveNegative(4));
console.log(checkPositiveNegative(-2));
console.log(checkPositiveNegative(0));
console.log(checkPositiveNegative("hello"));
console.log(checkPositiveNegative(NaN));
console.log(checkPositiveNegative(true));
// Problem: Based on total amount check free shipping on 150Rs for shipping

//  Invalid input reject hota hai.
// Negative amount reject hoti hai.
// `0` valid input ke taur par handle hota hai.
// `2000` par free shipping milti hai.
// `2000` se kam valid amount par delivery fee lagti hai.
// Saare test cases run karke verify kiye gaye hain.

function freeShipChecker(totalAmount) {
    const validNum = Number.isFinite(totalAmount) && totalAmount >= 0;
    if (validNum) {
        if (totalAmount >= 2000) return "free shipping";
        else return "shipping fee: 150";
    } else return "invalid amount"
}
// console.log(freeShipChecker(2000));
// console.log(freeShipChecker(1000));
// console.log(freeShipChecker("hi"));
// console.log(freeShipChecker(NaN));
// console.log(freeShipChecker(-500));
// console.log(freeShipChecker(0));
// console.log(freeShipChecker(Infinity));
// console.log(freeShipChecker(-Infinity));

// Problem: Shopping discount calculator, based on total bill

// input: number
// output: string
// psuedocode:
// i. amount must valid a non-negaive number, finite, not NaN
// ii. amount is greater than and equal to 5000 than 10% discount
// iii. amoount is greater then equal to 2000 and less than 5000 then 5% discount
// iv. amount is less then 2000 then no discount

function discountChecker(totalAmount) {
    const validNum = Number.isFinite(totalAmount) && totalAmount >= 0;

    if (validNum) {
        if (totalAmount >= 5000) return "10% discount";
        if (totalAmount >= 2000) return "5% discount";
        else return "no discount";
    } else return "invalid amount"
}

console.log(discountChecker(5000));
console.log(discountChecker(2000));
console.log(discountChecker(4999));
console.log(discountChecker(1500));
console.log(discountChecker(0));
console.log(discountChecker(-500));
console.log(discountChecker("hi"));
console.log(discountChecker(NaN));
console.log(discountChecker(Infinity));
console.log(discountChecker(-Infinity));
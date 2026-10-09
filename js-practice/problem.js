// 🧩 Problem #1: Online Store — Free Shipping

// Ek online store hai.Tumhein customer ke order ki total amount milegi.

// Tumhein decide karna hai ke customer ko free delivery milegi ya delivery charges dene honge.

//     Requirements
// Input amount ek valid, non - negative number honi chahiye.
// Agar input invalid ya negative ho, return karo "invalid amount".
// Agar amount 2000 ya usse zyada hai, return karo "free shipping".
// Agar amount 2000 se kam hai, return karo "shipping fee: 150".
//     Examples
// Input	Expected output
// 2500	"free shipping"
// 2000	"free shipping"
// 1500	"shipping fee: 150"
// 0	"shipping fee: 150"
//     - 500	"invalid amount"
// "hello"	"invalid amount"
// Tumhara task

// Apna existing problem - solving framework follow karo:

// Understand: Problem apne alfaaz mein explain karo.
//     Example: Ek input aur expected output likho.
// Break down: Conditions identify karo.
//     Code: Khud function likho.
// Verify: Examples run karke outputs check karo.
//     Debug: Koi issue mile to pehle khud fix karne ki koshish karo.

// input: number(2500)
// output: output("free shipping")
// psuedocode:
// i. amount is equal to and greater than 2000 then "free shipping"
// ii. otherwise "shipping fee: 150"
// contriants:
// i. number should be positive

function freeShipChecker(totalAmount) {
    const validNum = Number.isFinite(totalAmount) && totalAmount >= 0;
    if (validNum) {
        if (totalAmount >= 2000) return "free shipping";
        else return "shipping fee: 150";
    } else return "invalid amount"
}
console.log(freeShipChecker(2000));
console.log(freeShipChecker(1000));
console.log(freeShipChecker("hi"));
console.log(freeShipChecker(NaN));
console.log(freeShipChecker(-500));
console.log(freeShipChecker(0));
console.log(freeShipChecker(Infinity));
console.log(freeShipChecker(-Infinity));
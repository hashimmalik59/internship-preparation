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
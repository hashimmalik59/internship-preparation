# Online Store — Free Shipping Checker

## Problem Statement

Ek online store customer ke order ki total amount ke mutabiq delivery charges decide karta hai. Tumhara task ek function banana hai jo amount check karke bataye ke delivery free hai ya customer ko delivery fee deni hogi.

## Requirements

1. Input ek **finite number** hona chahiye.
2. Amount negative ho, ya input valid number na ho, to `"invalid amount"` return karo.
3. Amount **2000 ya us se zyada** ho, to `"free shipping"` return karo.
4. Amount **2000 se kam** ho, to `"shipping fee: 150"` return karo.

> **Important:** Amount non-negative honi chahiye. Iska matlab `0` bhi valid hai; sirf positive numbers accept karna zaroori nahi.

## Input / Output Examples

| Input       | Expected Output       | Reason                                    |
| ----------- | --------------------- | ----------------------------------------- |
| `2500`      | `"free shipping"`     | Amount 2000 ya us se zyada hai            |
| `2000`      | `"free shipping"`     | Boundary value bhi eligible hai           |
| `1500`      | `"shipping fee: 150"` | Amount 2000 se kam hai                    |
| `0`         | `"shipping fee: 150"` | Zero valid, non-negative amount hai       |
| `-500`      | `"invalid amount"`    | Negative amount allowed nahi              |
| `"hello"`   | `"invalid amount"`    | Input number nahi hai                     |
| `NaN`       | `"invalid amount"`    | NaN valid finite number nahi hai          |
| `Infinity`  | `"invalid amount"`    | Infinite amount allowed nahi              |
| `-Infinity` | `"invalid amount"`    | Infinite aur negative amount allowed nahi |

## Problem-Solving Steps

### 1. Understand

Customer ki order amount ke basis par decide karna hai ke free shipping milegi ya 150 ki delivery fee lagegi. Invalid amount ko reject karna hai.

### 2. Example

- Input: `2500`
- Expected output: `"free shipping"`

### 3. Break Down

1. Pehle check karo ke input valid, finite number hai aur negative nahi hai.
2. Agar input invalid hai, `"invalid amount"` return karo.
3. Agar amount `2000` ya us se zyada hai, `"free shipping"` return karo.
4. Warna `"shipping fee: 150"` return karo.

### 4. Implement

Apna function khud likho. Conditions ko requirements ke mutabiq implement karo.

### 5. Verify

Upar di gayi example table ke tamam inputs run karo aur actual outputs ko expected outputs ke saath compare karo.

### 6. Debug

Agar koi output expected output se match nahi karta, to us input ko isolate karo, condition-by-condition check karo, aur khud fix karne ki koshish karo.

## Key Concepts Practised

- Function parameters aur return values
- `if/else` conditions
- Input validation
- Comparison operators (`>=`, `<`)
- `Number.isFinite()`
- Boundary values (`0`, `2000`)
- Test cases aur edge cases
- Debugging

# Problem #2: Shopping Discount Calculator

## Problem Statement

An online store offers discounts based on the total amount of a customer's order.

Create a function that receives the order amount and returns the appropriate discount message.

## Requirements

1. The order amount must be a valid, finite, non-negative number.
2. If the input is invalid or negative, return `"invalid amount"`.
3. If the amount is **5000 or more**, return `"10% discount"`.
4. If the amount is **2000 or more, but less than 5000**, return `"5% discount"`.
5. If the amount is **less than 2000**, return `"no discount"`.

## Examples

|      Input | Expected Output    |
| ---------: | ------------------ |
|     `6000` | `"10% discount"`   |
|     `5000` | `"10% discount"`   |
|     `3500` | `"5% discount"`    |
|     `2000` | `"5% discount"`    |
|     `1500` | `"no discount"`    |
|        `0` | `"no discount"`    |
|     `-100` | `"invalid amount"` |
|  `"hello"` | `"invalid amount"` |
|      `NaN` | `"invalid amount"` |
| `Infinity` | `"invalid amount"` |

## Problem-Solving Steps

Follow these steps before and while writing the solution:

1. **Understand:** Explain the problem in your own words.
2. **Example:** Choose an input and write its expected output.
3. **Break down:** Identify the conditions and decide the order in which to check them.
4. **Code:** Write the function yourself.
5. **Verify:** Run the examples and compare actual outputs with expected outputs.
6. **Debug:** If an output is wrong, investigate and fix the issue yourself before asking for help.

## Important Reminder

Check invalid inputs first. Then evaluate the discount thresholds in an order that prevents a higher threshold from being missed.

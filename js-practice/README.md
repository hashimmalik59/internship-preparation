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

## Completion Checklist

- [ ] Invalid input reject hota hai.
- [ ] Negative amount reject hoti hai.
- [ ] `0` valid input ke taur par handle hota hai.
- [ ] `2000` par free shipping milti hai.
- [ ] `2000` se kam valid amount par delivery fee lagti hai.
- [ ] Saare test cases run karke verify kiye gaye hain.

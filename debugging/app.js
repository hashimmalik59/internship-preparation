// const username = "Hashim";
// const age = 23;

// if (age >= 18) {
//   console.log("Welcome " + userName);
// }

// 1. ReferenceError: userName is not defined
// 2. kyun k username ki jagah userName mein n capital hai
// 3. 6th
// 4. N => n

// const age = 17;
// const hasID = true;

// if (age >= 18 || hasID) {
//   console.log("You can enter");
// } else {
//   console.log("You cannot enter");
// }
// 1. || ki jagah && hona chahiye
// 2. only logic error
// 3. sirf aik condition check kar raha hai
// 4. (age >= 18 && hasID)

// const users = [
//   { name: "Ali", age: 20 },
//   { name: "Hashim", age: 25 },
//   { name: "Ahmed", age: 17 },
// ];

// const adultUsers = users.filter((user) => {
//   user.age >= 18;
// });

// console.log(adultUsers);

// 1. Logical error hai
// 2. return nahi lagaya hua hai kyun k brackets hain
// 3. { name: "Ali", age: 20 }, { name: "Hashim", age: 25 },
// 4. new array

// function calculateTotal(price, quantity) {
//   const total = price * quantity;
// }

// const result = calculateTotal(500, 3);

// console.log(result);

// 1. Logic error
// 2. undefined
// 3. nahi, kyun k total ko return nahi kiya
// 4. kyun k return nahi kiya total ko

// const user = {
//   name: "Hashim",
//   address: {
//     city: "Peshawar",
//   },
// };

// console.log(user.profile.city);

// 1. Logic error
// 2. undefined
// 3. error de raha hai k progfile to hai nahi aur profile se city ko access kar rahe hain
// 4. kyun k hum address ki jagah pe profile ko le rahe hain jo hai hi nahi

// user.profile
//    ↓
// undefined
//    ↓
// undefined.city
//    ↓
// 💥 TypeError

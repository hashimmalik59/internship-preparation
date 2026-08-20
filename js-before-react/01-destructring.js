// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Yahan destructuring ka code khud likh:
// const [firstColor, secondColor] = colors;

// console.log(firstColor, secondColor); // Expected output: Red Green

// const colors = ["Red", "Green", "Blue", "Yellow"];

// // Yahan destructuring kar ke Green ko skip kar:
// const [firstColor, , thirdColor] = colors;

// console.log(firstColor, thirdColor); // Expected output: Red Blue

// const scores = [90, 80];

// Yahan destructuring kar ke teesri value ke liye default value set kar:
// const [math = 90, english = 80, science = 50] = scores;

// console.log(math, english, science); // Expected output: 90 80 50

// const user = { username: "Ali", age: 25, profession: "Developer" };
// Task:
// Object destructuring use kar ke username aur profession variables alag nikal, aur unhein console par print kar.

// const { username, profession } = user;

// console.log(user);

// console.log(username, profession);

// const student = { id: 101, name: "Ahmed", marks: 85 };
// Task:
// Object destructuring use kar ke name property ko destructure kar, lekin uska naam change kar ke studentName rakh, aur phir usay print kar.

// const { name: studentName } = student;

// console.log(student);

// console.log(studentName);

// const settings = { theme: "dark" };
// Task:
// Object destructuring use kar ke theme aur notifications variables nikal. notifications property object mein maujood nahi hai, isliye uske liye default value true set kar. Phir dono ko print kar.

// const { theme, notifications = true } = settings;

// console.log(settings);
// console.log(theme, notifications);

// const person = {
//   name: "Ali",
//   address: {
//     city: "Lahore",
//     country: "Pakistan",
//   },
// };

// const {
//   address: { city, country },
// } = person;

// console.log(city, country);

// const employee = {
//   id: 1,
//   details: {
//     department: "Engineering",
//     location: "Islamabad",
//   },
// };

// // Task: Nested destructuring use kar ke 'department' aur 'location' nikal.

// const {
//   details: { department, location: place },
// } = employee;

// console.log(department, place);

const laptop = { brand: "Dell", ram: "16GB", ssd: "512GB", processor: "i7" };

// Task: 'brand' variable alag nikal, aur baqi saari properties ko 'specs' naam ke variable mein pack kar.

const { brand, ...restSpec } = laptop;

console.log(laptop);

console.log(brand);
console.log(restSpec);

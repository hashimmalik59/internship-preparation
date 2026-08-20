// Task ki W Wazahat:
// Tujhe ek naya array banana hai allMembers ke naam se. Uske andar:

// groupA ki sari values spread karni hain (...groupA).

// groupB ki sari values spread karni hain (...groupB).

// Sath mein ek string "Zain" bhi add karni hai.

// Ab is logic ko use kar ke code khud likh aur yahan bhej.

// const groupA = ["Ali", "Ahmed"];
// const groupB = ["Bilal", "Usman"];

// const allMembers = [...groupA, ...groupB, "Zain"];

// console.log(groupA);
// console.log(groupB);
// console.log(allMembers);

const user = { name: "Ali", age: 25, role: "Developer" };
// Task:
// Spread operator (...) ka use kar ke ek naya object updatedUser bana. Is naye object mein user ki saari properties honi chahiye, lekin sath mein age ki value update ho kar 26 aur ek nayi property city: "Lahore" bhi add honi chahiye. Phir updatedUser ko print kar.

const updatedUser = { ...user, age: 26, city: "Peshawar" };

console.log(user);
console.log(updatedUser);

let name = "Alex";       // can change
const birthYear = 1999; // cannot change
var city = "Lincoln";    // older syntax

console.log(`Hello, name is ${name}, born in ${birthYear}, from ${city}.`);
// Template literals use backticks ` and ${} for variables
// Use const by default, let if you need to reassign, avoid var

//Data Types

let age = 25; //num
let fulName = "Alex Still"; //string
let height = 6.1; //float (this returns a num unsure why?)
let isLearning = true; //bool
let hobby = undefined; //undefined
let car = null; //null

console.log(age, fulName, height, isLearning, hobby, car);
console.log(typeof age, typeof fulName, typeof height, typeof isLearning, typeof hobby, typeof car);
//typeof operator shows data type

// Arrays

let fruits = ["apple", "banana", "cherry"];
console.log(fruits);
console.log(fruits[1]);

fruits.push("tomato"); //adds to end
console.log(fruits);

// Objects

let user = {
    name: "Alexander",
    age: 25,
    city: "Lincoln",
    role: "QA Engineer"
}

console.log(user);
console.log(user.name);
user.age = 26;
console.log(user);

let users = [
  { name: "Alexander", role: "Tester" },
  { name: "Anna", role: "Developer" }
];



users.push({ name: "Charlie", role: "QA" });

users.forEach(user => {
  console.log(`${user.name} is a ${user.role}`);
});


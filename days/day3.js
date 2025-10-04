// greet user function, taking name as an argument

function greetUser(name) {
  console.log(`Hello, ${name}! Welcome to QA Automation.`);
}

greetUser("Alex");
greetUser("Anna");

// String concatenation and manipulation

// Joining two strings, adding a space in between
function joinStringsWithSpace(str1, str2) {
  return str1 + " " + str2;
}

// Joining two strings without space
function joinStringWithNoSpace(str1, str2) {
  return str1 + str2;
}

// Convert string to uppercase
function toUpperCase(str) {
  return str.toUpperCase();
}

console.log(joinStringsWithSpace("Hello", "World")); // "Hello World"
console.log(joinStringWithNoSpace("Hello", "World")); // "HelloWorld"

// Looping through an array

let names = ["Alice", "Bob", "Charlie"];

// Loops through the names array declared above, and prints each name in the array with their index, and name
for(let i = 0; i < names.length; i++) {
  console.log(`Hello person ${i + 1}, your name is: ${names[i]}!`);
}

// Foreach loops

names.forEach(name => {
    console.log(`Hello, ${name}!`);
})

// Loops and Functions together

function runTestForUser(user) {
    console.log(`Running test for user: ${user}`);
    console.log(`Test completed for user: ${user} - Passed!`);
}

let testArray = ["Alice", "Bob", "Charlie"];

testArray.forEach(user => {
    runTestForUser(user);
});

// Can imbed function within these loops

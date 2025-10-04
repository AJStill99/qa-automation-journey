// Area where I'll write some functions to practice JS

//Constructor Function vs Class

// Older Way
function Person(name, age) {
  this.name = name;
  this.age = age;

  this.sayHello = function() {
    console.log(`Hi, my name is ${this.name} and I’m ${this.age} years old.`);
  };
}

// Create an object using the constructor
const person1 = new Person("Alice", 25);
person1.sayHello();  // Output: Hi, my name is Alice and I’m 25 years old.

// Modern Way
class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  sayHello() {
    console.log(`Hi, my name is ${this.name} and I’m ${this.age} years old.`);
  }
}

// Create an instance of the class
const person2 = new Person("Bob", 30);
person2.sayHello();  // Output: Hi, my name is Bob and I’m 30 years old.

// Both methods create objects with the same properties and methods, but the class syntax is more concise and easier to read.
// Used to create a 'blueprint' for objects



let URL = "https://example.com"; // Example URL

function joinStrings(str1, str2) {
    combinedStr = str1 + ' ' + str2;
    return combinedStr;
}

function reverseString(str) {
    return str.split('').reverse().join('');
}

function compareStrings(checkingStr, referenceStr) {
    if(checkingStr === referenceStr) {
        console.log("The strings match!");
        return true;
    } else {
        console.log("The strings do not match.");
        return false;
    }
}

const testWebsite = (url) => {
    console.log(`Testing website at ${url}`);
    // Placeholder for actual testing logic
    fetch(url)
        .then(response => {
            if (response.ok) {
                console.log(`Website ${url} is reachable.`);
            } else {
                console.log(`Website ${url} returned status: ${response.status}`);
            }
        })
        .catch(error => {
            console.log(`Error reaching website ${url}: ${error.message}`);
        })
        ;
}

testWebsite(URL);

// Exporting functions for use in other files

module.exports = { joinStrings, reverseString };


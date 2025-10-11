let age = 20;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// Can also do else if for multiple conditions

let score = 75;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 75) {
    console.log("Grade: B");
} else if (score >= 60) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Switch statement example

let day = "Tuesday";

switch (day) {
    case "Monday":
        console.log("Start of the week");
        break;
    case "Tuesday":
        console.log("Second day");
        break;
    default:
        console.log("Other day");
}

// Truthy and Falsy values

let input = "";

if (input) {
    console.log("Input exists");
} else {
    console.log("No input provided");
}
// Empty string is falsy, non-empty string is truthy

//Mini challenge - Create a user login status checker

users = [
    { username: "Alice", isLoggedIn: true },
    { username: "Bob", isLoggedIn: false },
    { username: "Charlie", isLoggedIn: false, status: "banned" }
];

function userLoginStatus(user) {
    if (user.isLoggedIn) {
        console.log("Welcome back!");
    
    } else if (user.status === "banned") {
        console.log("Access Denied. User is banned.");
    } else {
        console.log("Please log in.");
    }
}

users.forEach(user => {
    console.log(`Checking status for ${user.username}:`);
    userLoginStatus(user);
});








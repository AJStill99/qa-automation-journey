// function to run a login test
// if/else logic to check the password length is between 8 and 16 characters
// Make the function tale a user object with name and password properties

testUsers = [
    { username: "Alice", password: "password123" },
    { username: "Bob", password: "short" },
    { username: "Charlie", password: "averyverylongpassword" }
];

function runLoginTest(user) {
    // Prints this first
    console.log(`running login test for ${user.username}`);
    // Prints the outcome of this if/else block
    if(user.password.length >= 8 && user.password.length <= 16) {
        console.log(`Login test PASSED for ${user.username}`);
    } else {
        console.log(`Login test FAILED for ${user.username}`);
    }

    // function should give 2 outputs based off this logic
}

testUsers.forEach(user => {
    runLoginTest(user);
});

// I think the user argument is just a placeholder for each user in the array, so it can be called within the function


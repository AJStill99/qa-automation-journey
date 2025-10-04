const users = [
    { username: "Alice", status: "loggedIn" },
    { username: "Bob", status: "loggedOut" },
    { username: "Charlie", status: "banned" }
];

function checkUserStatus(user) {
    if (user.status === "loggedIn") {
        console.log("Welcome back!");
    } else if (user.status === "banned") {
        console.log("Access Denied. User is banned.");
    } else {
        console.log("Please log in.");
    }
}

users.forEach(user => {
    console.log(`Checking status for ${user.username}:`);
    checkUserStatus(user);
});

//Same code is in standard day 4, just did this again to check understanding



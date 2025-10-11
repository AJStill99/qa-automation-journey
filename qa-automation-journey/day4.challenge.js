const users = [
    { username: "Alice", status: "loggedIn" },
    { username: "Bob", status: "loggedOut" },
    { username: "Charlie", status: "banned" }
];

function checkUserStatus(user) {
    if (!user.status) {
    console.log(`No status provided for ${user.username}.`);
} else {
    if (user.status === "loggedIn") {
        console.log(`Welcome back, ${user.username}!`);
    } else if (user.status === "banned") {
        console.log(`Access denied for ${user.username}.`);
    } else {
        console.log(`Please log in, ${user.username}.`);
    }
}};

users.forEach(user => {
    console.log(`Checking status for ${user.username}:`);
    checkUserStatus(user);
});

//Same code is in standard day 4, just did this again to check understanding



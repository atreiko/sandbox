"use strict";

let userName;
do {
    userName = prompt("Enter your name", userName);
} while (!userName);

let userAge;
do {
    userAge = prompt("Enter your age", userAge);
} while (isNaN(userAge) || !userAge);

if (userAge < 18) {
    alert("You are not allowed to visit this website.");
} else if (userAge < 22) {
    if (confirm("Are you sure you want to continue?")) {
        alert(`Welcome ${userName}!`);
    } else {
        alert("You are not allowed to visit this website.");
    }
} else {
    alert(`Welcome ${userName}!`);
}
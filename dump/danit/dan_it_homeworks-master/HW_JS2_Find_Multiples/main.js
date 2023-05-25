"use strict";

let userNumber;
do {
    userNumber = prompt("Enter your number", userNumber);
} while (!Number.isInteger(Number(userNumber)) || userNumber === "");
if (userNumber >= 5) {
    for (let i = 5; i <= userNumber; i = i + 5) {
        console.log(i);
    }
} else {
    console.log("Sorry, no numbers");

}
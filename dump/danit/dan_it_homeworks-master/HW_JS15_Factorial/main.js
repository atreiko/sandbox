"use strict";

let userNumber;

do {
    userNumber = prompt("Enter your number", userNumber);
} while (Number.isNaN(Number(userNumber)) || (!isNatural(Number(userNumber))) || userNumber === "");


function isNatural(a) {
    if (a >= 0 && isFinite(a) && a !== null) {
        return true;
    } else {
        return false;
    }
}

function getFactorial(n) {
    let result;
    if (n < 2) {
        return result = 1;
    } else {
        return result = n * getFactorial(n - 1);
    }
}

if (userNumber) {
    alert(getFactorial(userNumber));
}
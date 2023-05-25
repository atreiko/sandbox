"use strict";


let userSerialNumber;

do {
    userSerialNumber = prompt("Enter your serial number", userSerialNumber);
    if (userSerialNumber === null) break;
} while (Number.isNaN(Number(userSerialNumber)) || (!userSerialNumber));


if (userSerialNumber >= 0) {
    alert(getFibonacciPositive(userSerialNumber));
} else if (userSerialNumber < 0) {
    alert(getFibonacciNegative(userSerialNumber));
}

// В некоторой литературе, F0 = 0, опускается, и последовательность Фибоначчи начинается с F1 = F2 = 1;

function getFibonacciPositive(n) {

    if (n === "0") {
        return 0;
    }
    let firstElement = 1;
    let secondElement = 1;
    for (let i = 3; i <= n; i++) {
        let sum = firstElement + secondElement;
        firstElement = secondElement;
        secondElement = sum;
    }
    return secondElement;

}

function getFibonacciNegative(n) {
    let firstElement = 1;
    let secondElement = -1;
    for (let i = -3; i >= n; i--) {
        let sum = firstElement - secondElement;
        firstElement = secondElement;
        secondElement = sum;
    }
    return secondElement;
}

// function getFibonacci(n) {
//     if (n <= 1) {
//         return n;
//     } else {
//         return getFibonacci(n - 1) + getFibonacci(n - 2);
//     }
// }
// alert(getFibonacci(userSerialNumber));
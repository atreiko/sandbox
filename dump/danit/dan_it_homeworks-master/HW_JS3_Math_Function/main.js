"use strict";

let userFirstNumber;
let userLastNumber;
let mathOperation;


do {
    userFirstNumber = prompt("Please, enter your first number", userFirstNumber);
} while (Number.isNaN(Number(userFirstNumber)) || userFirstNumber === "");


do {
    userLastNumber = prompt("Please, enter your second number", userLastNumber);
} while (Number.isNaN(Number(userLastNumber)) || userLastNumber === "");


function validationOperation(mathOperation) {
    return (mathOperation === "+") || (mathOperation === "-") || (mathOperation === "*") || (mathOperation === "/");
}


do {
    mathOperation = prompt("Please, enter your math operation", "+, -, *, /");
    if (mathOperation === null) {
        break;
    }
} while (!validationOperation(mathOperation));


function myCalc(a, b, operation) {
    let result;
    switch (operation) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break;
            // no default
    }
    return result;
}
alert(myCalc(userFirstNumber, userLastNumber, mathOperation));
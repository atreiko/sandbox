"user strict";

// Для всех i userFirstNumber до userLastNumber {
//     проверить, делится ли число i на какое-либо из чисел до него
//     если делится, то это i не подходит, берём следующее
//     если не делится, то i - простое число
//     }

let userFirstNumber;
let userLastNumber;

do {
    userFirstNumber = +prompt("Enter your first number", "");
} while (!Number.isInteger(Number(userFirstNumber)) || userFirstNumber === "");

do {
    userLastNumber = +prompt("Enter your second number", "");
} while (!Number.isInteger(Number(userLastNumber)) || userLastNumber === "");

if (userFirstNumber < 2) {
    userFirstNumber = 2;
}

primeNumber: for (let i = userFirstNumber; i <= userLastNumber; i++) {
    for (let j = 2; j < i; j++) {
        if (i % j === 0) {
            continue primeNumber;
        }
    }
    console.log(i);
}


// не работает от 3, 4, 5, 6, 7, 8, 9 до n
//
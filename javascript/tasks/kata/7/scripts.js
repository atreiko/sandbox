// Ваша задача - создать функцию, которая может принимать любое неотрицательное целое 
// число в качестве аргумента и возвращать его с цифрами в порядке убывания. 
// По сути, переставьте цифры, чтобы получить максимально возможное число.

// Примеры:
// Вход: 42145 Выход:54421
// Вход: 145263 Выход:654321
// Вход: 123456789 Выход:987654321

let num = 42145 

function descendingOrder(n){
    return Number([...n.toString()].sort().reverse().join(''))
}

console.log(descendingOrder(num));
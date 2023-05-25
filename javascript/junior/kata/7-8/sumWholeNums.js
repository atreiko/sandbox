// сложение всех целых чисел от 1 до заданного числа n

// Here's, an example:

// f(n=100) // returns 5050 
// It's your duty to verify that n is a valid positive integer number. 
// If not, please, return false 


function f(n) {
    if(Number.isInteger(n) && n > 0) {
        return n * (n + 1) / 2
    }
    return false
}

console.log(f(100));

// const f = (n) => (Number.isInteger(n) && n > 0) ? n * (n + 1) / 2 : false;
// Welcome. In this kata, you are asked to square every digit 
// of a number and concatenate them.

// For example, if we run 9119 through the function, 
// 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and 
// returns an integer

//@ Возвести в квадрат кадое число и сложить

function squareEveryDigit(int) {

    let result = Number([...int.toString()]
        .map(num => +num && num ** 2)
        .toString()
        .split(',')
        .join(''))
        
    return result             
}


console.log(squareEveryDigit(9119));
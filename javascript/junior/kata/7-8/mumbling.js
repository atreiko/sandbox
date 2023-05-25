//@ This time no story, no theory. 
//@ The examples below show you how to write function accum

//: A-Bb-Ccc-Dddd

function foo(str) {
    let newString = ''

    for(let i = 0; i < str.length; i++){
        newString += str[i].toUpperCase() + str[i].toLowerCase().repeat(i) + (i < str.length - 1 ? '-' : '') 
    }

    return newString
}

console.log(foo('abcd'));

//? Second:
function accum(str) {
    return [...str].map((letter, index) => {
        return letter.toUpperCase() + letter.toLowerCase().repeat(index + 1)
    }).join('-')
}


console.log(accum('abcd'));
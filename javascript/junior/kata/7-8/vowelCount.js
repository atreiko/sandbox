// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

//@ Вернуть количество гласных

const myString = 'Statisfaction'

function vowelsCount(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    let count = 0;
    let letters = Object.values(str)

    letters.forEach(letter => {
        vowels.forEach(vowel => {
            if(vowel === letter) count++
        })
    })
    
    return count
}

console.log(vowelsCount(myString));

//? --------------------------------------------------------

//@ Вернуть новую строку без гласных

function disemvowel(str) {
    var newStr = "",
        i;

    for (i = 0; i < str.length; i++) {
        if ("aeiou".includes(str[i].toLowerCase())) continue;
        newStr += str[i];
    }
    return newStr;
}

console.log(disemvowel("This website is for losers LOL!"));


//? --------------------------------------------------------
// Вернуть строку не создавая новых переменных
function disemvowel(str) {
    str = Object.values(str).filter(letter => (letter !== "a" && letter !== "e" && letter !== "i"&& letter !== "o"&& letter !== "u" && letter !== "A" && letter !== "E" && letter !== "I" && letter !== "O" && letter !== "U")).join('')
    return str
}


//? --------------------------------------------------------
// Вернуть строку не создавая новых переменных
//! Регулярное выражение
function removeVowels(str){
    return str.replace(/[aeiouAEUIOU]/g, '')
}

console.log(removeVowels("This website is for losers LOL!"));
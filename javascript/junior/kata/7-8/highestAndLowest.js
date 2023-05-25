//@ In this little assignment you are given a string 
//@ of space separated numbers, and have to return 
//@ the highest and lowest number.

//@ Example:

//@ All numbers are valid Int32, no need to validate them.
//@ There will always be at least one number in the input string.
//@ Output string must be two numbers separated by a single space, 
//@ and highest number is first.

// highAndLow("1 2 3 4 5");     return "5 1"
// highAndLow("1 2 -3 4 5");    return "5 -3"
// highAndLow("1 9 3 4 -5");    return "9 -5"

function highAndLow(numbers){
    let newNumbers = numbers
      .split(' ')
      .map(num => +num)
      .sort((a, b) => a - b)
    return `${newNumbers[newNumbers.length - 1]} ${newNumbers[0]}`
  }
  
  console.log(highAndLow('1 2 3 4'));
  console.log(highAndLow('2 4 -1 4'));
  console.log(highAndLow('-100 400 333 -101'));
  
  
  
  
  // ? return (str.split(' ').join(''))
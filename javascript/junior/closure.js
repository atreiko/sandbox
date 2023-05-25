function foo() {
    return function(number) {
        return number * 1000;
    }
}
const newNumber = foo()
console.log(newNumber(3)) //* 3000
console.log(newNumber(5)) //* 5000


//! ----------- = = ----------- = = ----------- = = ----------- = = 

var globalVar = '1'
var outerVar = '2'

function outerFunc(outerParam) {
    function innerFunc(innerParam) {
        console.log(globalVar, outerParam, innerParam)
    }
    return innerFunc
}

const x = outerFunc(outerVar)
outerVar = '3'
globalVar = '4'
x('inner') //*:  4 2 inner

// @ В результате получаем '4' '2' inner». Объяснение следующее: 
// @ когда мы вызываем функцию outerFunc и присваиваем переменной «x» 
// @ значение, возвращаемое функцией innerFunc, параметр «outerParam» 
// @ равняется '2'. Несмотря на то, что мы присвоили переменной 
// @ «outerVar» значение '3', это произошло после вызова функции 
// @ outerFunc, которая «успела» найти значение переменной «outerVar» в 
// @ цепочке областей видимости, этим значением было '2'. Когда мы 
// @ вызываем «x», которая ссылается на innerFunc, значением «innerParam» 
// @ является «inner», потому что мы передаем это значение в качестве 
// @ параметра при вызове «x». globalVar имеет значение '4', потому 
// @ что мы присвоили ей это значение перед вызовом «x».
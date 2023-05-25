//@ Напишем свои методы:

//todo :     arr.forEach(callback(currentValue[, index[, array] ] ))
//* --- forEach

const arr = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
//@ Берем массив, над которым работаем из контекста
//@ Пробегаем по его элементам
//@ Применяем callback для каждого элемента, его индекса и самого массива

//? Простой:
Array.prototype.forEach2 = function(callback) {
    let arr = this;

    for(let i = 0; i < arr.length; i++) {
    //* callback(item, index, array)
        callback(arr[i], i, arr)
    }
}

// arr.forEach2( (item, index, array) => {
//     console.log({item, index});
// })

//* ============================================================

//? C проверками:
let arr2 = [1, 2, 3] //* [1, 2, 3, , , , , , 10]
arr2[10] = 10; 

//@ Переобразуем массив над которым работаем 
//@ в объект для дальнейгих манипуляций

Array.prototype.forEach3 = function(callback, thisArg) {
    if(this == null) {
        throw new Error(`Can't iterate over undefinded or null`)
    }

    let context = this
    let O = Object(this)
    // console.log(O);
    if(arguments.length > 1) {
        context = thisArg
    }

    if(typeof callback !== 'function'){
        throw new Error(`Callback is not a function`)
    }

    let len = O.length;
    let i = 0;

    while(i < len) {
        if(i in O) {
            callback.call(context, this[i], i, O)
        }
        i++;
    }
}

console.log(' || ===== forEach ======== || ');
arr2.forEach3( (item, index, array) => {
    console.log({item, index});
})

//? ============= || ============= || ============= || ============= || 

//todo :     arr.filter(callback(element[, index, [array]])[, thisArg])
//* --- filter

let arr3 = [4, 6, 8, 9, 10, 12, -43, 53, 2, 5, 7, 31, 97, -1, 20]

Array.prototype.filter2 = function(callback, thisArg) {
    if(this == null) {
        throw new Error(`Can't iterate over undefinded or null`)
    }

    let context = this
    let O = Object(this)

    if(arguments.length > 1) {
        context = thisArg
    }

    if(typeof callback !== 'function'){
        throw new Error(`Callback is not a function`)
    }

    let len = O.length;
    let result = []

    for (let i = 0; i < len; i++) {
        if(i in O) {
            let current = this[i]
            if(callback.call(context, current, i, O)) {
                result.push(current)
            }
        }
    }
    return result
}

console.log(' || ===== filter ======== || ');
let primeNums = arr3.filter2(isPrime)
console.log(primeNums);

//? ============= || ============= || ============= || ============= || 

//todo :     arr.map(callback(element[, index, [array]])[, thisArg])
//* --- map

Array.prototype.map2 = function(callback, thisArg) {
    if(this == null) {
        throw new Error(`Can't iterate over undefinded or null`)
    }

    let context = this
    let O = Object(this)

    if(arguments.length > 1) {
        context = thisArg
    }

    if(typeof callback !== 'function'){
        throw new Error(`Callback is not a function`)
    }

    let len = O.length;

    let newArray = []

    let i = 0;

    while(i < len) {
        if(i in O) {
            let newValue = callback.call(context, this[i], i, O)
            newArray[i] = newValue;
        }
        i++;
    }
    return newArray
}

console.log(' || ===== map ======== || ');
console.log(arr3.map2((item) => item * 2));
let increase1 = num => num + 1
let mul2 = num => num * 2
console.log(arr3.filter2(isPrime).map2(mul2).map2(increase1));

//! ============= || ============= || ============= || ============= || 
//@ Проверка простое число - isPrime
//@ Простое - делится на самого себя и на еденицу
function isPrime(num) {
    if(num <= 1) 
        return false;
    else if (num === 2)
        return true;
    else {
        for(let i = 2; i < num; i++) {
            if(num % i === 0)
                return false;
            return true;
        }
    }
}

//@ Поместим в фильтр функцию проверку на простое число и получим результат
//@ проверки нашего массива на простые числа
const prime = arr3.filter(isPrime)
console.log(' || ===== isPime ======== || ');
console.log(prime);
//! ============= || ============= || ============= || ============= ||

// Клонирование объекта
const obj = {
    foo: 1,
    bar: 'str',
    baz: null,
    get x() {
        return 'string'
    }
}
//! Неглубокое копирование
//! spread оператор можно использовать только для итерабильных объектов
//! Object.assign - для любых
const clone = Object.assign({}, obj)
const secondClone = {...obj} 

// Глубокое копирование
//? С помощью lodash
//?         _.merge({}, {obj})




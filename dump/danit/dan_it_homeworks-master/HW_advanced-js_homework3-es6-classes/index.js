'use strict';

class Employee {
    constructor(options) {
        this.name = options.name;
        this.age = options.age;
        this.salary = options.salary;
    }
    get name() {
        return this._name;
    }
    set name(name) {
        this._name = name;
    }
    get age() {
        return this._age;
    }
    set age(age) {
        this._age = age;
    }
    get salary() {
        return this._salary;
    }
    set salary(salary) {
        this._salary = salary;
    }
}

const employee = new Employee({
    name: 'Jane',
    age: 28,
    salary: 1000,
});
console.log(employee);
employee.name = 'Fernando';
employee.age = 33;
employee.salary = 2000;
console.log(employee);


class Programmer extends Employee {
    constructor(options) {
        super(options);
        this.lang = options.lang;
    }
    get salary() {
        return super.salary * 3;
    }
    set salary(salary) {
        super.salary = salary;
    }
}

const programmerFirst = new Programmer({
    name: 'John',
    age: 37,
    salary: 1500,
    lang: 'fr',
});
console.log(programmerFirst);

const programmerSecond = new Programmer({
    name: 'Ros',
    age: 20,
    salary: 3000,
    lang: 'ru',
});
console.log(programmerSecond);
console.log(programmerSecond.salary);

const programmerThird = new Programmer({
    name: 'Helen',
    age: 35,
    salary: 1000,
    lang: 'en'
});
console.log(programmerThird);
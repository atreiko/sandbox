// классы
/* более продвинутая конструкция (по сравнению с обычной функцией-конструктором)
для создания объектов по определенному шаблону */
{
  class User {
    // по сути та же функция-конструктор для создания объекта
    // вызывается автоматически при вызове new User

    constructor(name) {
      this.name = name;
    }
    // все объявленные в классе методы записываются в прототип объекта
    sayHi() {
      console.log(`Hello, ${this.name}`);
    }
    // без запятой!
    sayBye() {
      console.log(`Bye, ${this.name}`);
    }

    get age() {
      return this._age;
    }

    set age(age) {
      this._age = age;
    }

    getSurname() {
      return this.surname;
    }

    setSurname(surname) {
      this.surname = surname;
    }
  }
  // класс - это по сути функция-обертка вокруг функции-конструктора и выражений, присваивающих методы в prototype (используется Object definrProperty)
  console.log(typeof User);
  // User - это на самом деле имя функции-конструктора

  // 🕮 <cyberbiont> 9919ac5f-703f-4e1a-b694-1357dd4fafdb.md

  const user = new User('Вася');
  user.sayHi();
  user.setSurname('Куролесов');
  user.age = 25;
  console.log(user.surname, user.age);
  user.setSurname('Иванов');
  console.log(user.surname, user.age);

  for (const prop in user) {
    console.log(prop);
    // 🕮 <cyberbiont> a4575c66-8ad7-47c8-aefe-f42b9109b0b6.md
  }
}

/* class expression */
{
  // по аналогии с функциями, бывают Class Expression, Named Class Expression и анонимные классы
  const User = class {
    sayHi() {
      alert('Привет');
    }
  };

  const User2 = class MyClass {
    sayHi() {
      console.log(MyClass);
    }
  };

  function makeClass(phrase) {
    // объявляем класс и возвращаем его
    return class {
      sayHi() {
        console.log(phrase);
      }
    };
  }
  const myClass = makeClass();
}

/* геттеры-сеттеры */
// можно ли в классе объявить методы get set?
// как они будут работать
// 🕮 <cyberbiont> 524342e5-da86-48fd-9115-1915dfb59d26.md

/* методы и свойства могут "общаться" друг с другом только с помощью this */
{
  class Training {
    constructor(type, time, distance) {
      this.type = type;
      this.time = time;
      this.distance = distance;
      this.start();
    }

    start() {
      this.startTimer();
      this.trackDistance();
    }

    startTimer() {
      setTimeout(() => console.log('training is over!'), this.time);
    }

    trackDistance() {
      // this.distance...
    }
  }

  const training = new Training('running', 100, 20);
}

/* Статические методы */
{
  class Training {
    constructor(type, time, distance) {
      this.type = type;
      this._time = time;
      this.distance = distance;
      this.startTimer();
    }

    startTimer() {
      setTimeout(() => console.log('training is over!'), this._time);
    }

    method() {}

    static create(type) {
      switch (type) {
        case 'running':
          return new Training('running', 30, 12);
        case 'biking':
          return new Training('biking', 90, 30);
      }
    }
  }

  console.log(Training);

  const training = Training.create('biking');
  console.log(training);
  // training.startTimer();
  // training.create();
  console.log(training.type);
}

/* приватные свойства
настоящие приватные св-ва пока не поддерживаются, но синтаксис будет выглядеть так: #propName
пока что используются защищенные св-ва _protectedProp
это просто соглашение между программистами, что такие св-ва являются внутренними
*/

/* Наследование */

class Animal {
  constructor(name) {
    this.name = name;
    this.eaten = 0;
  }

  eat(food) {
    this.eaten += food;
    console.log(`${this.name} уже съел: ${this.eaten}`);
  }
}

// Наследуем от Animal указывая "extends Animal"
class Cat extends Animal {
  // если своего конструктора нет, автоматически вызывается конструктор родителя
  meow() {
    console.log(`${this.name}: mяу!`);
  }
}

class Dog extends Animal {
  woof() {
    console.log(`${this.name}: гав!`);
  }
}

const animal = new Animal('animal');

const cat = new Cat('кот');

console.log(cat.name);
cat.eat(5);
cat.meow();
cat.eat(10);

const dog = new Dog('пес');
dog.eat(10);
dog.woof();

/* переопределение методов с помощью super */
// 🕮 <cyberbiont> 1b9c6a4d-e85f-40b5-97a9-d1d5fdf7242b.md
{
  class Cat extends Animal {
    meow() {
      console.log(`${this.name}: мяу!`);
    }

    eat(food) {
      super.eat(food); // вызываем родительский метод
      this.meow();
    }
  }

  const cat = new Cat('котяра');

  cat.eat(5);
}

class EstonianCat extends Cat {
  meow() {
    // у функций-стрелок нет своего super
    setTimeout(() => super.meow(), 2000); // вызывает родительский метод через 2 с
  }
}

const estonianCat = new EstonianCat('эстонский кот');
estonianCat.meow();

// переопределение конструктора

class Elephant extends Animal {
  constructor(name, earsDiameter) {
    // - прежде чем использовать this в конструкторе потомка,
    // ОБЯЗАТЕЛЬНО нужно вызвать конструктор родителя через super
    // при этом передаем все необходимые аргументы
    super(name);
    this.earsDiameter = earsDiameter;
  }
}

const elephant = new Elephant('Dumbo', 5);
console.log(elephant);
elephant.eat(40);
// instanceOf
// проверяет только соответствие прототипа (ссылка в [[Prototype]] объекта и .prototype класса, с которым мы сравниваем
// свойство constructor тут роли не играет
console.log(elephant instanceof Elephant);
console.log(elephant instanceof Dog);
console.log(elephant instanceof Cat);
console.log(elephant instanceof Animal);

//@ Контекст функции
    //? Потеряет контекст внутри метода sayHi()
let user = {
    firstName: "Вася",
    sayHi() {
      alert(`Привет, ${this.firstName}!`);
    }
  };
setTimeout(user.sayHi, 1000); //* // Привет, undefined!

    //? С помощью замыкания можно не потерять контекст
setTimeout(function() {
    user.sayHi(); //* Привет, Вася!
  }, 1000);

function func() {
    alert(this.firstName);
}
    //? Привязать контекст с помощью bind
let funcUser = func.bind(user);
funcUser(); //* Вася




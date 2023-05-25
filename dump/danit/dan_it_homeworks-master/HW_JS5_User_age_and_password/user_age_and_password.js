"use strict";

function createNewUser() {
    const userFirstName = prompt("Please, enter your name", "Myroslava");
    const userLastName = prompt("Please, enter your last name", "Ryzhenkova");
    const userBirthday = prompt("Please, enter your birthday", "dd.mm.yyyy");
    return {
        name: userFirstName,
        surname: userLastName,
        birthday: userBirthday,
        getAge() {
            const userBirthdayValue = this.birthday.split('.')
            const userBirthdayDate = new Date(userBirthdayValue[2], userBirthdayValue[1], userBirthdayValue[0]);
            const userAgeDifference = (Date.now() - userBirthdayDate.getTime());
            const userAge = new Date(userAgeDifference);
            return userAge.getFullYear() - 1970;
        },
        getPassword() {
            return this.name[0].toUpperCase() + this.surname.toLowerCase() + this.birthday.slice(6);
        }
    }
}

let newUser = createNewUser();

console.log(newUser);
console.log(newUser.getAge());
console.log(newUser.getPassword());
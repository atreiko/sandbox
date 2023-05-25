"use strict";

function createNewUser() {
    const firstName = prompt("Please, enter your name", "Myroslava");
    const lastName = prompt("Please, enter your last name", "Ryzhenkova");
    return {
        name: firstName,
        surname: lastName,
        getLogin() {
            return (this.name[0] + this.surname).toLowerCase();
        }
    }
}
let newUser = createNewUser();

console.log(newUser);
console.log(newUser.getLogin());
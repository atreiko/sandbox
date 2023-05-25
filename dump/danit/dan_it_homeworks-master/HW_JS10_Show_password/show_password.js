'use strict';

const itemsPassword = document.querySelectorAll('.input-icon-password');
const form = document.querySelector('.password-form');
const btnConfirm = document.querySelector('.btn');
const passEnter = document.querySelector('#password');
const passConfirm = document.querySelector('#password-check');
const errorMassage = document.createElement('span');

errorMassage.innerText = "You need to enter the same values!";
btnConfirm.before(errorMassage);
errorMassage.classList.add('validation-message');
errorMassage.classList.add('hidden');


itemsPassword.forEach((item) => item.addEventListener('click', showPassword));

btnConfirm.addEventListener('click', confirmPass);

passEnter.addEventListener('focus', () => errorMassage.classList.add('hidden'));
passConfirm.addEventListener('focus', () => errorMassage.classList.add('hidden'));

function showPassword(event) {
    console.log(event.target);
    if (event.target.id === 'pass1') {
        if (passEnter.getAttribute('type') === 'password') {
            event.target.classList.add('fa-eye-slash');
            passEnter.setAttribute('type', 'text');
        } else {
            event.target.classList.remove('fa-eye-slash');
            passEnter.setAttribute('type', 'password')
        }
    } else {
        if (passConfirm.getAttribute('type') === 'password') {
            event.target.classList.add('fa-eye-slash');
            passConfirm.setAttribute('type', 'text');
        } else {
            event.target.classList.remove('fa-eye-slash');
            passConfirm.setAttribute('type', 'password')
        }
    }
}

function confirmPass(event) {
    event.preventDefault();
    if (passEnter.value && passConfirm.value) {
        if (passEnter.value === passConfirm.value) {
            alert('You are welcome!')
        } else {
            errorMassage.classList.remove('hidden');
        }
    } else {
        alert(`You entered an empty value! Try again!`)
    }
}
'use strict';

const wrap = document.createElement('div');
document.body.append(wrap);
wrap.classList.add('wrapper');

const form = document.createElement('form');
wrap.prepend(form);

form.classList.add('form');

const spanElement = document.createElement('span');
const formInput = document.createElement('input');

form.append(spanElement);
form.append(formInput);

spanElement.textContent = 'Price, $';
spanElement.classList.add('form-title')

formInput.type = 'number';
formInput.name = 'price';
formInput.placeholder = 'Price';
formInput.classList.add('form-input');

const currentPrice = document.createElement('span');
const errorMassage = document.createElement('span');
form.prepend(currentPrice);
form.append(errorMassage);

currentPrice.classList.add('form-current-price');
errorMassage.classList.add('validation-message');


formInput.addEventListener('focus', addFocus);
formInput.addEventListener('blur', removeFocus);

function addFocus(event) {
    const elem = event.target.closest('.form-input');
    elem.classList.remove('focused');
    elem.classList.remove('green-text');
    elem.classList.remove('error');
    elem.classList.add('focused');
    if (elem.value >= 0) {
        document.querySelector('.form-current-price').innerHTML = '';
    } else {
        elem.classList.remove('error');
        document.querySelector('.validation-message').innerHTML = '';
    }
}

function removeFocus(event) {
    const elem = event.target.closest('.form-input');
    elem.classList.remove('focused');
    if (elem.value) {
        if (elem.value >= 0) {
            currentPrice.classList.add('form-current-price');
            currentPrice.innerHTML = `Текущая цена: ${formInput.value}`;
            form.insertAdjacentElement('afterbegin', currentPrice)
            formInput.currentPrice = currentPrice;
            currentPrice.insertAdjacentHTML("beforeend", '<button class="remove-button">x</button>');
            formInput.classList.add('green-text');
            document.querySelector('.form-current-price').onclick = function() {
                currentPrice.classList.add('hidden');
                formInput.value = '';
            }

        } else {
            formInput.classList.add('error');
            formInput.insertAdjacentHTML("afterend", '<span class="validation-message"> Please enter correct price </span>');
        }
    }
}
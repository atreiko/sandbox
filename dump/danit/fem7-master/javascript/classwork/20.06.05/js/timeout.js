'use strict';

function sayHi() {
  console.log('Привет');
}

// const timer = setInterval(sayHi, 1000);
const timer = setInterval(sayHi, 1000);

setTimeout(() => {
  clearInterval(timer);
}, 5000);

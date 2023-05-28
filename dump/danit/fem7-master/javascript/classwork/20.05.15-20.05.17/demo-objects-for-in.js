'use strict';

/* СПОСОБЫ ПЕРЕБОРА ОБЪЕКТОВ */

const colors = {
  red: '#ff0000',
  blue: '#0000f',
  green: '#008000',
};

for (const key in colors) {
  console.log(key);
  console.log(colors[key]);
}

for (const key of Object.keys(colors)) {
  console.log(key);
}

for (const value of Object.values(colors)) {
  console.log(value);
}

for (const [key, value] of Object.entries(colors)) {
  console.log(key);
  console.log(value);
}

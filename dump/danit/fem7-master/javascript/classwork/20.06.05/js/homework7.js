/* const array = ['hello', 'world', 'Kiev', 'Kharkiv', 'Odessa', 'Lviv'];

function create(array) {
  const ul = document.createElement('ul');

  const content = array.map((element) => `<li>${element}</li>`);

  ul.innerHTML = content.join('');
  ul.style.listStyle = 'none';
  console.log(ul);
  document.body.append(ul);
}
create(array); */

const array = ['hello', 'world', ['Kiev', ['Kharkiv', 'Odessa']], 'Lviv'];

function create(array) {
  /* let ul = document.createElement('ul');
  const transformed = walk(array);
  function walk(array) {
    return array.map((el) => {
      if (!Array.isArray(el)) return `<li>${el}</li>`;
      return walk(el);
    });
  }
  ul.innerHTML = content.join('');
  // ul.style.listStyle = 'none';
  document.body.append(ul); */

  function walk(array, ul = document.createElement('ul')) {
    // console.log(array);
    array.forEach((el) => {
      if (!Array.isArray(el)) {
        ul.insertAdjacentHTML('beforeend', `<li>${el}</li>`);
        /* const li = document.createElement('li');
        li.innerText = el;
        ul.append(li); */
      } else ul.append(walk(el));
    });
    return ul;
  }

  document.body.append(walk(array));
}
create(array);

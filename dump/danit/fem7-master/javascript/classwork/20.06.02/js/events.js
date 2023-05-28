function toggleColor(event, el) {
  console.log(event);
  console.log(el);
  el.classList.toggle('red');
}

console.log(document);
const btn3 = document.querySelector('.btn-3');

function handleClick(event) {
  console.log(event);
  this.classList.toggle('red');
}

btn3.onclick = handleClick;

const btn4 = document.querySelector('.btn-4');

btn4.addEventListener('click', handleClick);
btn4.removeEventListener('click', handleClick);

const event = new Event('mouseover');
// element.dispatchEvent(event);

function log(event) {
  if (!event.target === btn4) return;
  console.log(event);
}

document.addEventListener('mouseout', log);
// document.addEventListener('mousemove', (event) => console.log(event));

console.log('blocking');
document.addEventListener('DOMContentLoaded', () => {
  console.log('DOM Content Loaded');
});
window.addEventListener('load', () => {
  console.log('load');
});

document.addEventListener('readystatechange', () =>
  console.log(document.readyState),
);

const sleep = (ms) => {
  return new Promise((resolve) => setTimeout(() => resolve(), ms));
};

// all - выбрасывает промисы по окончанию всех в массиве
// Промисы выкинет через 4 секунды
Promise.all([sleep(2000), sleep(4000)]).then(() => {
  console.log('All promises');
});

// race - выбрасывает каждый промис по завершению
Promise.race([sleep(2000), sleep(4000)]).then(() => {
  console.log('Race promises');
});

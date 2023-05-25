"use strict";

// console.log('request data...');
// ? resolve - вызывается во время усешной асинхронной операции
// ? reject - вызов ошибки
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//             const backendData = {
//                 server: 'aws',
//                 port: 2000,
//                 status: 'working'
//             }
//             //? Когда операция закончена - вызываем resolve
//             resolve(backendData)
//     }, 2000)
// })
//? После завершения операции и вызова resolve - 
//? мы можем вызвать наш промис p и вызвать then
//? Чтоб получить доступ к backendData в then - 
//? мы просто передаем backendData в resolve
//? и принимаем ее в then из атрибута data
// p.then(data => {
//     console.log('Promise resolved', data);
// })
//* request data... 
//* Preparing data...
//* Promise resolved, {server: 'aws', port: 2000, status: 'working'}
//! -------- = = -------- = = -------- = = -------- = = -------- = = 
// console.log('request data...');
// const p = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log('Preparing data...');
//             const backendData = {
//                 server: 'aws',
//                 port: 2000,
//                 status: 'working'
//             }
//             resolve(backendData)
//     }, 2000)
// })
// //? Прокидываем backendData в resolve для модификации
// //? Модифицируем наш data в p.then --> data.modified
// //? В clientData прийдет уже модифицированные данные
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(data); //* {server: 'aws', port: 2000, status: 'working'}
//             data.modified = true
//             // reject(data) //! Пишем reject вместо resolve, чтоб отловить ошибку в catch
//             resolve(data)
//         }, 2000);
//     })
// })
//     .then(clientData => {
//         console.log('Data receiced', clientData); //* {server: 'aws', port: 2000, status: 'working', modified: true}
//     })
//     .catch(err => console.error('Error', err))
//     .finally(() => console.log('Finally'))
// //todo ---> Метод catch
// //? Если есть ошибка - ее можно отлавливать catch
// //todo ---> Метод finally
// //? Будет вызван в любом случаи
//! -------- = = -------- = = -------- = = -------- = = -------- = = 
var sleep = function sleep(ms) {
  return new Promise(function (resolve) {
    return setTimeout(function () {
      return resolve();
    }, ms);
  });
}; // sleep(2000).then(() => console.log('After 2 sec'))
// sleep(3000).then(() => console.log('After 3 sec'))
//?  all - тоже имеет then
//? Мы получим результат в then, после того, как выполнится
//? после завершения всех функция в массиве
//? То есть then выполнится после 4 секунд


Promise.all([sleep(2000), sleep(4000)]).then(function () {
  console.log('All promises');
}); //?  race - выбрасывает промис сразу по завершению

Promise.race([sleep(2000), sleep(4000)]).then(function () {
  console.log('Race promises');
}); //* сначала появится Race promises, а потом All promises
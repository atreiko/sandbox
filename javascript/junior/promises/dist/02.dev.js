"use strict";

console.log('Request data...');
var flag = true;
var p = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log('Preparing data...');
    var backendData = {
      server: 'aws',
      port: 2000,
      status: 'working'
    };
    resolve(backendData);
  }, 2000);
});
p.then(function (data) {
  console.log('Promise resolved: ', data);
  return new Promise(function (resolve, reject) {
    data.modified = true;
    resolve(data);
  });
}).then(function (data) {
  console.log('modified =>', data);
})["catch"](function (err) {
  return console.log('Error: ', err);
})["finally"](function () {
  flag = false;
  console.log(flag);
});
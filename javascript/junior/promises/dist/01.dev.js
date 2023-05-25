"use strict";

console.log('Request data...');
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
});
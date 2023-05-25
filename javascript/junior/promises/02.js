console.log('Request data...');

let flag = true;

const p = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log('Preparing data...');
    const backendData = {
      server: 'aws',
      port: 2000,
      status: 'working',
    };
    resolve(backendData);
  }, 2000);
});

p.then((data) => {
  console.log('Promise resolved: ', data);
  return new Promise((resolve, reject) => {
    data.modified = true;

    resolve(data);
  });
})
  .then((data) => {
    console.log('modified =>', data);
  })
  .catch((err) => console.log('Error: ', err))
  .finally(() => {
    flag = false;
    console.log(flag);
  });

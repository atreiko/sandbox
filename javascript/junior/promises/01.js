console.log('Request data...');

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
});

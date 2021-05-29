const request = url =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        userData: {
          name: 'Tom',
          age: 17,
        },
        source: url,
      });
    }, 1000 + Math.random() * (3000 - 1000));
  });

const getUserASAP = userId => {
  const servers = ['https://server.com/us', 'https://server.com/eu', 'https://server.com/au'];

  const userUrls = servers.map(serverUrls => `${serverUrls}/${userId}`);

  const requests = userUrls.map(userUrl => request(userUrl));

  return Promise.race(requests);
};

getUserASAP('user-id-1').then(res => console.log(res));

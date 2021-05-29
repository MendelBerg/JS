/* eslint-disable no-plusplus */
const pinger = (amount, period) => {
  console.log('Ping');
  let times = amount;

  const interval = setInterval(() => {
    if (--times === 1) {
      clearInterval(interval);
    }
    console.log('Ping');
  }, period);
};


pinger(5, 1000);
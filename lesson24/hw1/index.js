const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const getDiff = (startDate, endDate) => {
  const difference = new Date(Math.abs(endDate - startDate));

  const daysLeft = Math.floor(difference / DAY);
  const hoursLeft = Math.floor((difference % DAY) / HOUR);
  const minutesLeft = Math.floor((difference % HOUR) / MINUTE);
  const secondsLeft = Math.floor((difference % MINUTE) / SECOND);

  return `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;
};

console.log(getDiff(new Date(2011, 0, 0, 0, 0, 0), new Date(2011, 0, 0, 0, 1, 0)));



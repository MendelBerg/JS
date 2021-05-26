const getDiff = (startDate, endDate) => {
  let diff = Math.abs(startDate - endDate);
  let days = 0;
  let hours = 0;
  let minutes = 0;
  let seconds = 0;

  if (diff < 60000) {
    seconds = Math.floor(diff / 1000);
  } else if (diff < 60000 * 60) {
    minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;
    seconds = Math.floor(diff / 1000);
    
  } else if (diff < 60000 * 60 * 24) {
    hours = Math.floor(diff / (60 * 60 * 1000));
    diff -= hours * 60 * 60 * 1000;

    minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;

    seconds = Math.floor(diff / 1000);
  } else {
    days = Math.floor(diff / (60 * 60 * 1000 * 24));
    diff -= days * 60 * 60 * 1000 * 24;

    hours = Math.floor(diff / (60 * 60 * 1000));
    diff -= hours * 60 * 60 * 1000;

    minutes = Math.floor(diff / 60000);
    diff -= minutes * 60000;

    seconds = Math.floor(diff / 1000);
  }

  return `${days}d ${hours}h ${minutes}m ${seconds}s`;
};

console.log(getDiff(new Date(2011, 0, 11, 6, 8, 6), new Date(2011, 0, 1, 2, 3, 4)));

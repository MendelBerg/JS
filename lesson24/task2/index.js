const getGreenwichTime = date => {
  const formatter = new Intl.DateTimeFormat('en', {
    year: 'numeric',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });

  return formatter.format(date);
};


console.log(getGreenwichTime(new Date()));
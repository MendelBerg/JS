const delay = period => {
  const p = new Promise(resolve => {
    setTimeout(() => resolve(), period);
  });

  return p;
};


delay(3000).then(() => console.log('Done'));
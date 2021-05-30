const getMostActiveDevs = obj =>
  fetch('https://api.github.com/repos/USERID/REPOID/commits?per_page=100');


console.log(getMostActiveDevs());
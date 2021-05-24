const btnElemArr = [...document.querySelectorAll('.btn')];

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btnElemArr.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
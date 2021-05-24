const btnElemArray = [...document.querySelectorAll('.pagination__page')];

const handleClick = () => {
  console.log(event.target.dataset.pageNumber);
};

btnElemArray.forEach(btn => {
  btn.addEventListener('click', handleClick);
});
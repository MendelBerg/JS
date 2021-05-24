const inputElem = document.querySelector('.search__input');
const btnElem = document.querySelector('.search__btn');

btnElem.addEventListener('click', () => {
  console.log(inputElem.value);
});
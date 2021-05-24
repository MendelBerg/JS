const btnElem = document.querySelector('.single-use-btn');
const showMessage = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', showMessage);
};


btnElem.addEventListener('click', showMessage);
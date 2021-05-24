const inputElem = document.querySelector('.task-status');

inputElem.addEventListener('change', () => {
  console.log(inputElem.checked);
});
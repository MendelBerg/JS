const checkboxElem = document.querySelector('.task-status');

checkboxElem.addEventListener('change', event => {
  console.log(event.target.checked);
});
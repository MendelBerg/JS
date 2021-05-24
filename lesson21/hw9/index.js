function finishForm() {
  const formElem = document.querySelector('.login-form');
  const inputElem = document.createElement('input');
  const inputPasswordElem = document.querySelector('input[name="password"]');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);
  inputPasswordElem.setAttribute('type', 'password');
}

finishForm();

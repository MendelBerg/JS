function finishForm() {
  const formElem = document.querySelector('.login-form');
  const inputPasswordElem = document.querySelector('input[name="password"]');

  const inputElem = document.createElement('input');
  inputElem.setAttribute('type', 'text');
  inputElem.setAttribute('name', 'login');
  formElem.prepend(inputElem);

  inputPasswordElem.setAttribute('type', 'password');
}

finishForm();

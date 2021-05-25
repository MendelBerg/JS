const emailInputELem = document.querySelector('#email');
const passwordInputELem = document.querySelector('#password');

const emailErrorElem = document.querySelector('.error-text_email');
const passwordErrorElem = document.querySelector('.error-text_password');

const isRequired = value => (value ? undefined : 'Required');
const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const validatorsByField = {
  email: [isRequired, isEmail],
  password: [isRequired],
};

const validate = (fieldName, value) => {
  const validators = validatorsByField[fieldName];
  return validators
    .map(validator => validator(value))
    .filter(errorText => errorText)
    .join(', ');
};

const onEmailChange = event => {
  emailErrorElem.textContent = validate('email', event.target.value);
};

const onPasswordChange = event => {
  passwordErrorElem.textContent = validate('password', event.target.value);
};

emailInputELem.addEventListener('input', onEmailChange);
passwordInputELem.addEventListener('input', onPasswordChange);

const formElem = document.querySelector('.login-form');

const onFormSubmit = event => {
  event.preventDefault();
  const formData = [...new FormData(formElem)].reduce((acc, [field, value]) => ({
    ...acc,
    [field]: value,
  }), {});

  alert(JSON.stringify(formData));
};

formElem.addEventListener('submit', onFormSubmit);

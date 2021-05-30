const baseUrl = 'https://60b39c004ecdc1001747f926.mockapi.io/api/t1/user';

function createUser(userData) {
  return fetch(baseUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify(userData),
  }).then(response => response.json());
}

function clearInputs(arrInputs) {
  arrInputs.forEach(e => {
    e.value = '';
  });
}

const getInputs = () => [
  document.querySelector('input[type="email"]'),
  document.querySelector('input[name="name"]'),
  document.querySelector('input[type="password"]'),
];



const submitBtn = document.querySelector('.submit-button');
submitBtn.addEventListener('click', event => {
  event.preventDefault();

  // createUser({
  //   email: inputs[0].value,
  //   name: inputs[1].value,
  //   password: inputs[2].value,
  // }).then(res => {
  //   console.log(res);
  //   alert(res);
  //   clearInputs(inputs);
  // });
});


const isValid = arr => {
  let correct = true;
  arr.forEach(input => {
    if (!input.reportValidity()) {
      correct = false;
    }
  });

  if (correct) {
    submitBtn.removeAttribute('disabled');
  }
};

isValid(getInputs());

function finishList() {
  const listElem = document.querySelector('.list');
  const liElem = document.querySelector('.special');

  const liArray = [];
  const numbers = ['1', '4', '6', '8'];

  for (let i = 0; i < 4; i+=1) {
    liArray.push(document.createElement('li'));
    liArray[i].textContent = numbers[i];
  }

  listElem.prepend(liArray[0]);
  liElem.before(liArray[1]);
  liElem.after(liArray[2]);
  listElem.append(liArray[3]);
}

finishList();
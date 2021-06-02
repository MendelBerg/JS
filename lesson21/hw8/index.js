function finishList() {
  const listElem = document.querySelector('.list');
  const liElem = document.querySelector('.special');

  const liArray = [1, 4, 6, 8].map(num => {
    const liItem = document.createElement('li');
    liItem.textContent = num;
    return liItem;
  });

  listElem.prepend(liArray[0]);
  liElem.before(liArray[1]);
  liElem.after(liArray[2]);
  listElem.append(liArray[3]);
}

finishList();

function squaredNumbers() {
  const liElems = document.querySelectorAll('.number');

  liElems.forEach(li => {
    li.dataset.squaredNumber = li.dataset.number ** 2;
  });
}

squaredNumbers();
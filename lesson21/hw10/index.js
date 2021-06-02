function manageClasses() {
  const liElems = document.querySelectorAll('li');

  liElems[0].classList.add('selected');
  liElems[1].classList.remove('selected');
  liElems[2].classList.toggle('three_done');

  if (liElems[3].classList.contains('some-class')) {
    liElems[3].classList.add('another-class');
  }
}

// OR
function manageClasses2() {
  const liElems = ['.one', '.two', '.three', '.four'].map(className =>
    document.querySelector(className),
  );

//     ...the same code...
}

manageClasses();

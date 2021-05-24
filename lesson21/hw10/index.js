function manageClasses() {
  const liElem1 = document.querySelector('.one');
  const liElem2 = document.querySelector('.two');
  const liElem3 = document.querySelector('.three');
  const liElem4 = document.querySelector('.four');

  liElem1.classList.add('selected');
  liElem2.classList.remove('selected');
  liElem3.classList.toggle('three_done');

  if(liElem4.classList.contains('some-class')) {
    liElem4.classList.add('another-class');
  }
}

manageClasses();
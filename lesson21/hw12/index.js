function getSection(num) {
  const spanElem = document.querySelector(`span[data-number="${num}"]`);
  return spanElem.parentElement.dataset.section;
}

getSection(2);
export function getItemsList() {
  const elementList = document.querySelectorAll('.technology');
  console.dir(elementList);

  return elementList;
}

export function getItemsArray() {
  const elementArray = [...document.querySelectorAll('.tool')];
  console.dir(elementArray);

  return elementArray;
}

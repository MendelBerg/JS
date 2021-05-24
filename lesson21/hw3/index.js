export function getTitle() {
  const titleElem = document.querySelector('.title');

  return titleElem.textContent;
}

export function getDescription() {
  const titleElem = document.querySelector('.about');

  return titleElem.innerText;
}

export function getPlans() {
  const titleElem = document.querySelector('.plans');

  return titleElem.innerHTML;
}

export function getGoal() {
  const titleElem = document.querySelector('.goal');

  return titleElem.outerHTML;
}



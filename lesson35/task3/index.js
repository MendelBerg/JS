/* eslint-disable camelcase */
const baseUrl = 'https://api.github.com/users';

const avatarElem = document.querySelector('.user__avatar');
avatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

function getData(path) {
  return fetch(path).then(response => response.json());
}

const inputElem = document.querySelector('.name-form__input');
const searchBtn = document.querySelector('.name-form__btn');

searchBtn.addEventListener('click', () => {
  const spinnerElem = document.querySelector('.spinner');
  spinnerElem.classList.remove('spinner_hidden');

  getData(`${baseUrl}/${inputElem.value}`)
    .then(result => {
      const userNameElem = document.querySelector('.user__name');
      const userLocationElem = document.querySelector('.user__location');

      userLocationElem.textContent = `from ${result.location}`;
      avatarElem.src = result.avatar_url;
      userNameElem.textContent = result.name;

      return result.repos_url;
    })
    .then(url => fetch(url).then(response => response.json()))
    .then(res => {
      const listElem = document.querySelector('.repo-list');

      const repoItems = res.map(({ name }) => {
        const listItem = document.createElement('li');
        listItem.classList.add('repo-list__item');
        listItem.textContent = name;

        return listItem;
      });

      listElem.append(...repoItems);
      spinnerElem.classList.add('spinner_hidden');
    })
    .catch(_ => {
      alert('Failed to load data');
    })
    .finally(_ => {
      spinnerElem.classList.add('spinner_hidden');
    });
});

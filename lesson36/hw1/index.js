/* eslint-disable no-return-await */
/* eslint-disable camelcase */
const baseUrl = 'https://api.github.com/users';

const avatarElem = document.querySelector('.user__avatar');
avatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

const fetchData = async path => {
  const response = await fetch(path);
  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};

const inputElem = document.querySelector('.name-form__input');
const searchBtn = document.querySelector('.name-form__btn');
const listElem = document.querySelector('.repo-list');
const spinnerElem = document.querySelector('.spinner');

const showSpinner = () => {
  spinnerElem.classList.remove('spinner_hidden');
};

const hideSpinner = () => {
  spinnerElem.classList.add('spinner_hidden');
};

const cleanReposList = () => {
  listElem.innerHTML = '';
};
const renderUserData = userData => {
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');

  userLocationElem.textContent = `from ${userData.location}`;
  avatarElem.src = userData.avatar_url;
  userNameElem.textContent = userData.name;
};

const renderRepos = reposList => {
  const repoItems = reposList.map(({ name }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('repo-list__item');
    listItem.textContent = name;

    return listItem;
  });

  cleanReposList();
  listElem.append(...repoItems);
};

const onSearchUser = async () => {
  showSpinner();
  cleanReposList();
  const userName = inputElem.value;

  try {
    const userData = await fetchData(`${baseUrl}/${userName}`);
    renderUserData(userData);
    const reposList = await fetchData(userData.repos_url);
    renderRepos(reposList);
  } catch (err) {
    alert(err.message);
  } finally {
    hideSpinner();
  }
};

searchBtn.addEventListener('click', onSearchUser);

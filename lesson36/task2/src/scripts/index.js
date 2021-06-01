import { showSpinner, cleanReposList, hideSpinner } from './tools.js';
import { fetchData } from './repos.js';
import { renderUserData, renderRepos, avatarElem } from './render.js';

const baseUrl = 'https://api.github.com/users';
avatarElem.src = 'https://avatars3.githubusercontent.com/u10001';

const inputElem = document.querySelector('.name-form__input');

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

const searchBtn = document.querySelector('.name-form__btn');
searchBtn.addEventListener('click', onSearchUser);

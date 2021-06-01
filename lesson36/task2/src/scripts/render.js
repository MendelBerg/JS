/* eslint-disable import/no-cycle */
import { cleanReposList } from './tools.js';

export const avatarElem = document.querySelector('.user__avatar');
export const listElem = document.querySelector('.repo-list');

export const renderUserData = userData => {
  const userNameElem = document.querySelector('.user__name');
  const userLocationElem = document.querySelector('.user__location');

  userLocationElem.textContent = `from ${userData.location}`;
  avatarElem.src = userData.avatar_url;
  userNameElem.textContent = userData.name;
};

export const renderRepos = reposList => {
  const repoItems = reposList.map(({ name }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('repo-list__item');
    listItem.textContent = name;

    return listItem;
  });

  cleanReposList();
  listElem.append(...repoItems);
};

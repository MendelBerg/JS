/* eslint-disable import/no-mutable-exports */
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export const getItem = key => JSON.parse(localStorage.getItem(key));

export let tasks = getItem('tasksList') || [];


export function setTask(key, value) {
  setItem(key, value);
  tasks = getItem('tasksList');
}

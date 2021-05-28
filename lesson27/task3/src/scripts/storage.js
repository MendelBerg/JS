/* eslint-disable import/no-mutable-exports */
export const setItem = (key, value) => {
  localStorage.setItem(key, JSON.stringify(value));
};

const get = key => JSON.parse(localStorage.getItem(key));


export const getItem = key => get(key) || [];

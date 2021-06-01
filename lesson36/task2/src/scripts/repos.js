/* eslint-disable no-return-await */
export const fetchData = async path => {
  const response = await fetch(path);
  if (response.ok) {
    return await response.json();
  }

  throw new Error('Failed to load data');
};

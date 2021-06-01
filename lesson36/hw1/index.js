/* eslint-disable no-return-await */
const getUserBlogs = async users => {
  try {
    const fetchUser = userId =>
      fetch(`https://api.github.com/users/${userId}`).then(res => res.json());

    return await Promise.all(users.map(userId => fetchUser(userId).then(user => user.blog)));
  } catch (error) {
    throw new Error('Wrong');
  }
};

getUserBlogs(['google', 'zoom']).then(res => console.log(res));

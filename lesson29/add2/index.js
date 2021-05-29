const requestUserData = (userId, callback) => {
  setTimeout(
    () =>
      userId === 'broken'
        ? callback(null, 'Failed to load user data')
        : callback({
            userId,
            email: `${userId}@example.com`,
          }),
    Math.floor(Math.random() * (3000 - 1000)) + 1000,
  );
};

const func = (o, error) => {
  if (o === null) {
    console.log(error);
    return;
  }

  console.log(o);
};

requestUserData('user1', func);
requestUserData('user2', func);
requestUserData('broken', func);
requestUserData('user3', func);
requestUserData('broken', func);
requestUserData('user4', func);
requestUserData('user5', func);
requestUserData('broken', func);
requestUserData('user6', func);
requestUserData('user7', func);

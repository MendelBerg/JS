const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    if (!response.ok) return null;

    const userData = await response.json();
    return userData;
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

console.log(fetchUser('facebook'));



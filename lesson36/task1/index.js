const fetchUser = async userId => {
  try {
    const response = await fetch(`https://api.github.com/users/${userId}`);

    if (!response.ok) return null;

    return await response.json();
  } catch (error) {
    throw new Error('Something went wrong');
  }
};

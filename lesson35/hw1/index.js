const parseUser = stringJSON => {
  try {
    const data = JSON.parse(stringJSON);
    return data;
  } catch (e) {
    return null;
  }
};

console.log(parseUser('{"name":"Tom}'));

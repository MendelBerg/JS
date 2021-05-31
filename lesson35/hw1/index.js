const parseUser = stringJSON => {
  try {
    const data = JSON.parse(stringJSON);
    return data;
  } catch {
    return null;
  }
};

console.log(parseUser('{"name":"Tom}'));

let message = 'Just learn it';

export const sendMessage = function (name) {
  const sender = 'Gromcode';
  console.log(`${name}, ${message}! Your ${sender}`);
};

export const setMessage = function (newMessage) {
  message = newMessage;
};

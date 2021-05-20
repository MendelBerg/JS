export default function createMessenger() {
  let message = 'Just learn it';
  let sender = 'Gromcode';
  return {
    sendMessage(name) {
      console.log(`${name}, ${message}! Your ${sender}`);
    },
    setMessage(newMessage) {
      message = newMessage;
    },
    setSender(newSender) {
      sender = newSender;
    },
  };
}

const c = createMessenger();
c.sendMessage('Ann');
c.setMessage('Good job');
c.setSender('Aloha');
c.sendMessage('Ann');

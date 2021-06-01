/* eslint-disable no-nested-ternary */
const createLogger = function () {
  const memo = [];
  const createNote = (message, type) => {
    memo.push({
      message,
      dateTime: new Date(),
      type,
    });
  };

  return {
    warn(message) {
      createNote(message, 'warn');
    },
    error(message) {
      createNote(message, 'error');
    },
    log(message) {
      createNote(message, 'log');
    },
    getRecords(type = false) {
      if (!memo.length) return memo;

      return type ? memo.filter(note => note.type === type).reverse() : [...memo].reverse();
    },
  };
};

const logger = createLogger();
console.log(logger.getRecords());
logger.log('User logged in');
logger.warn('User try to restricted page');
logger.log('User logged out');
logger.error('Unexpected error on the site');
console.log(
  logger.getRecords(),
  //* [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User try to restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
);
console.log(
  logger.getRecords('log'), // [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
);
console.log(
  logger.getRecords('error'), // [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
);
console.log(logger.getRecords('warn')); // [{ message: 'User try to restricted page', type: 'warn', dateTime: Date }]

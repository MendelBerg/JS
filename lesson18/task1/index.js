export const event = {
  guests: [
    { name: 'John', age: 18, email: 'j@gmail.com' },
    { name: 'Tom', age: 17, email: 't@gmail.com' },
  ],
  message: `Welcome to the party!`,
  getInvitations() {
    return this.guests
      .filter(({ age }) => age >= 18)
      .map(({ name, email }) => ({
        message: `Dear ${name}! ${this.message}`,
        email,
      }));
  },
};

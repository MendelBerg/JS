// export default {
const user = {
  firstName: 'John',
  lastName: 'Doe',
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
  set fullName(value) {
    [this.firstName, this.lastName] = value.split(' ');
  },
};

console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);
user.fullName = 'Alex Voievodin'
console.log(user.firstName);
console.log(user.lastName);
console.log(user.fullName);
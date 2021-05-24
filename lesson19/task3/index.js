export function User(name, age) {
  this.name = name;
  this.age = age;
}

User.prototype.sayHi = function () {
  console.log(`Hi, I am ${this.name}`);
};

User.prototype.requestNewPhoto = function () {
  console.log(`New photo request was sent for ${this.name}`);
};

User.prototype.setAge = function (age) {
  if (age < 0) {
    return false;
  }
  this.age = age;
  if (this.age >= 25) {
    console.log(`New photo request was sent for ${this.name}`);
  }

  return this.age;
};

const user = new User('Tom', 30);
const user2 = new User('Bob', 18);
user.sayHi();
user.requestNewPhoto();
user2.sayHi();
user2.requestNewPhoto();

console.log(user.setAge(-7));
console.log(user2.setAge(40));
console.log(user.setAge(20));

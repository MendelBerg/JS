/* eslint-disable new-cap */
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  static createEmpty() {
    return new this('', null);
  }

  sayHi() {
    console.log(`Hi, I am ${this.name}`);
  }

  requestNewPhoto() {
    console.log(`New photo request was sent for ${this.name}`);
  }

  setAge (age) {
    if (age < 0) {
      return false;
    }

    this.age = age;

    if (age >= 25) {
      console.log(`New photo request was sent for ${this.name}`);
    }

    return age;
  };
}

const user = User.createEmpty();

console.log(user.name);
console.log(user.age);


export class Order {
  constructor(price, city, type) {
    this.id = Math.round(Math.random() * 100).toString();
    this.price = price;
    this.dateCreated = new Date();
    this.isConfirmed = false;
    this.dateConfirmed = new Date();
    this.city = city;
    this.type = type.toString();
  }

  checkPrice() {
    return this.price > 1000;
  }

  confirmOrder() {
    if (!this.isConfirmed) {
      this.isConfirmed = true;
      this.dateConfirmed = new Date();
    }
  }

  isValidType() {
    return this.type === 'Buy' || this.type === 'Sell';
  }
}

const user = new Order('Kiyv', 1000, 'Sell');

// console.log(user.id);
console.log(user.dateConfirmed);
// console.log(user.checkPrice());
// console.log(user.confirmOrder());
// console.log(user.isValidType());

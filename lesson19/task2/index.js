/* eslint-disable no-restricted-syntax */

const getOwnProps = obj => Object.keys(obj).filter(prop => typeof obj[prop] !== 'function');

//! OR
// export const getOwnProps = function (obj) {
//   const properties = [];
//   for (const key in obj) {
//     if (Object.prototype.hasOwnProperty.call(obj, key) && typeof obj[key] !== 'function') {
//       properties.push(key);
//     }
//   }
//   return properties;
// };

const vehicle = {
  move() {
    console.log(`${this.name} is moving`);
  },
  stop() {
    console.log(`${this.name} stopped`);
  },
};

const ship = {
  name: 'Argo',
  startMachine() {
    console.log(`${this.name} lifting anchor up`);
    this.move();
  },
  stopMachine() {
    this.stop();
    console.log(`${this.name} lifting anchor down`);
  },
};

Object.setPrototypeOf(ship, vehicle);

console.log(getOwnProps(ship));

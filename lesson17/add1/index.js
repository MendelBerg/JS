// let true1 = true;
// let true2 = true;
// let true3 = true;

const timer = {
  secondsPassed: 0,
  minsPassed: 0,
  timerId: null,
  startTimer() {
    this.timerId = setInterval(() => {
      if (this.secondsPassed !== 59) {
        this.secondsPassed += 1;
      } else {
        this.minsPassed += 1;
        this.secondsPassed = 0;
      }
    }, 1000);
  },
  getTime() {
    return `${this.minsPassed}:${
      this.secondsPassed < 10 ? '0' + this.secondsPassed : this.secondsPassed
    }`;
  },
  stopTimer() {
    clearInterval(this.timerId);
  },
  resetTimer() {
    this.minsPassed = 0;
    this.secondsPassed = 0;
  },
};

//* EXAMPLE
timer.startTimer();
//* PUT IT INTO start of setInterval in startTimer body

// console.log(this.getTime());
// if (this.minsPassed === 0 && this.secondsPassed === 58 && true1) {
//   true1 = false;

//   this.stopTimer(timerId);
//   console.log('================');

//   setTimeout(() => {
//     this.startTimer();
//   }, 2000);
// }
// if (this.minsPassed === 1 && this.secondsPassed === 13 && true2) {
//   true2 = false;

//   this.stopTimer(timerId);
//   console.log('================');

//   setTimeout(() => {
//     this.startTimer();
//   }, 2000);
// }
// if (this.minsPassed === 1 && this.secondsPassed === 25 && true3) {
//   true3 = false;

//   this.stopTimer(timerId);
//   console.log('================');
//   setTimeout(() => {
//     this.resetTimer();
//     this.startTimer();
//   }, 2000);
// }

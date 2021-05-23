export const wallet = {
  transactions: [1, 99, 45, 3],
  getMax() {
    return Math.max(...this.transactions);
  },
  getMin() {
    return Math.min(...this.transactions);
  },
};

export const callbackPrompt = {
  message: 'Tell me your number',
  showPrompt() {
    console.log(prompt(this.message));
  },
  showDeferredPrompt(ms) {
    setTimeout(this.showPrompt.bind(this), ms)
  },
};

import { defineStore } from 'pinia';

export const useWelcomeStore = defineStore('welcome', {
  state: () => ({ welcome: 'Hello from Pinia store!' }),
  actions: {
    setWelcome(msg: string) {
      this.welcome = msg;
    },
  },
});

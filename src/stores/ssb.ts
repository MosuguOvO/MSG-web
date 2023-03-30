import { defineStore } from 'pinia';
export const useSsbStore = defineStore('ssb', {
  state: () => {
    return {
      imgs: {}
    };
  },
  actions: {
    setPic(data: any) {
      this.imgs = data.images;
    }
  }
});

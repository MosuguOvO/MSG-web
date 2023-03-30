import { defineStore } from 'pinia';
import { getMessageApi } from '@/api/message';
export const getMessageStore = defineStore('message', {
  state: () => ({
    list: <MessageRootObject>{},
    message: <MessageData>{}
  }),
  actions: {
    async getMessage() {
      const result = await getMessageApi();
      this.list = result;
      this.message = this.list.data;
    }
  }
});

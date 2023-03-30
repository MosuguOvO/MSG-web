import { defineStore } from 'pinia';
export const useUserStore = defineStore('user', {
  state: () => {
    return {
      //用户信息
      userinfo: {
        id: '',
        username: '',
        nickname: '',
        introduce: ''
      }
    };
  },
  actions: {
    setUser(user: UserEasy) {
      this.userinfo = user;
    }
  }
});

import { getItem, setItem, removeItem } from '@/utils/storage';
import { defineStore } from 'pinia';

export const useStore = defineStore('main', {
  state: () => {
    return {
      // ，从 getItem 函数中获取，如果没有获取到，则默认为空。cancel 变量用于取消操作，sourcePage 变量保存了一个数组，而 followBangumiCard 变量从 getItem 函数中获取，如果没有获取到，则默认为 true。
      user: {
        token: getItem('user') || ''
      },
      cancel: {},
      sourcePage: []
    };
  },
  actions: {
    setCancel(cancelObj) {
      this.cancel = cancelObj;
    },
    setUserToken(token: string) {
      this.user.token = token;
      token ? setItem('user', token) : removeItem('user');
    }
  }
});

export const useRegisterStore = defineStore('register', {
  state: () => {
    return {};
  }
});

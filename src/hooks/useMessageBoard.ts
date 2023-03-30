import { useUserStore } from './../stores/user';

export const useMessageBoardParams = () => {
  const userinfo = useUserStore();
  const messageParams: messageParams = reactive({
    nickname: '',
    messageboard: ''
  });
  return { messageParams };
};

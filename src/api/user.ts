import request from '@/utils/request';
//获取当前user信息
export const currentUserApi = () => {
  return request({
    method: 'get',
    url: '/api/userinfo/getinfo'
  });
};

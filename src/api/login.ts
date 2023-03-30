import request from '@/utils/request';

//用户登陆
export const userLogin = (loginParams: unknown) => {
  return request({
    method: 'post',
    url: '/api/user/login',
    data: loginParams
  });
};

//用户登出
export const userLogout = () => {
  return request({
    method: 'post',
    url: '/api/logout'
  });
};

//用户注册
export const userRegister = (registerParams: unknown) => {
  return request({
    method: 'post',
    url: '/api/user/register',
    data: registerParams
  });
};

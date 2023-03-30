import request from '@/utils/request';

export const getMessageApi = () => {
  return request({
    method: 'get',
    url: '/api/message/messageboard'
  });
};

export const postMessageApi = (data: any) => {
  return request({
    method: 'post',
    url: '/api/message/newmessage',
    data: data
  });
};

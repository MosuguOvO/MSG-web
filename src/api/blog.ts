import request from '@/utils/request';

export const getBlogApi = () => {
  return request({
    method: 'get',
    url: '/api/blog/article'
  });
};

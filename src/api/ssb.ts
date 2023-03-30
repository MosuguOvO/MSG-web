import axios from 'axios';
export const getssbIndexPic = () => {
  return axios({
    method: 'get',
    url: '/api/ssb/index'
  });
};
export const getssbIndexTitle = () => {
  return axios({
    method: 'get',
    url: '/api/ssb/index/title'
  });
};

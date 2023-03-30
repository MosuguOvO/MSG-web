import axios from 'axios';

export const getIP = () => {
  return axios({
    method: 'get',
    url: 'http://realip.cc'
  });
};

export const getWeatherData = (ip: string) => {
  return axios({
    method: 'get',
    url: `http://jisutqybmf.market.alicloudapi.com/weather/query`,
    params: {
      ip
    },
    headers: { Authorization: 'APPCODE  106e75459cd5474192f2e6df43052ff6' }
  });
};

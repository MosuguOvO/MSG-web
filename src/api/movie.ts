import axios from 'axios';
import request from '@/utils/request';

export const getMovieApi = () => {
  return axios({
    method: 'get',
    url: '/db'
  });
};

export const getImgByMovieIdApi = (movieid: string) => {
  return axios({
    method: 'get',
    url: 'https://movie.querydata.org/api',
    data: movieid
  });
};

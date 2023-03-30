import axios from 'axios';
export const getAnimeApi = () => {
  return axios({
    method: 'get',
    url: `/api/anime/animeinfo`
  });
};

export const getAnimeIntroduceApi = (aTag: any) => {
  return axios({
    method: 'get',
    url: `/api/anime/animeintroduce?aTag=${aTag}`
  });
};

export const getAnimeDetailApi = (aTag: any) => {
  return axios({
    method: 'get',
    url: `/api/anime/animeDetail?aTag=${aTag}`
  });
};

export const getAnimeChapterApi = (address: any) => {
  return axios({
    method: 'get',
    url: `/api/anime/animeChapter?address=${address}`
  });
};

export const getAnimeChapterInfoApi = (id: any) => {
  return axios({
    method: 'get',
    url: `/api/anime/animeChapterInfo?id=${id}`
  });
};

export const getAnimePageApi = (id: any, title: any) => {
  return axios({
    method: 'get',
    url: `/api/anime/animepage?id=${id}&title=${title}`
  });
};

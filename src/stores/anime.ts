import { defineStore } from 'pinia';
import {
  getAnimeApi,
  getAnimeIntroduceApi,
  getAnimeDetailApi,
  getAnimeChapterApi,
  getAnimeChapterInfoApi,
  getAnimePageApi
} from '@/api/anime';
export const useAnimeStore = defineStore('anime', {
  state: () => {
    return {
      anime: [],
      animeIntroduce: <any>{},
      animeUpdate: false,
      animeDetail: <any>{},
      animeChapter: [],
      animeChapterInfo: [],
      animePage: []
    };
  },
  actions: {
    async getAnime() {
      let res = await getAnimeApi();
      this.anime = res.data.data;
      console.log(this.anime);
    },
    async getAnimeIntrodcue(aTag: any) {
      let res = await getAnimeIntroduceApi(aTag);
      this.animeIntroduce = {};
      this.animeUpdate = true;
      this.animeIntroduce = res.data;
    },
    async getAnimeDetail(aTag: any) {
      let res = await getAnimeDetailApi(aTag);
      this.animeDetail = res.data;
    },
    async getAnimeChapter(address: any) {
      let res = await getAnimeChapterApi(address);
      this.animeChapter = res.data.data;
      console.log(this.animeChapter);
    },
    async getAnimeChapterInfo(id: any) {
      let res = await getAnimeChapterInfoApi(id);
      this.animeChapterInfo = res.data.data;
    },
    async getAnimePage(id: any, title: any) {
      let res = await getAnimePageApi(id, title);
      this.animePage = res.data.data;
    }
  }
});

import { getMovieApi } from '@/api/movie';
import { defineStore } from 'pinia';
export const useMovieStore = defineStore('movie', {
  //仓库名很重要
  state: () => {
    return {
      movielist: <MovieRootObject>{},
      movieimg: []
    };
  },
  actions: {
    async setMovie() {
      let result = await getMovieApi();
      this.movielist = result.data;
    },
 
  }
});

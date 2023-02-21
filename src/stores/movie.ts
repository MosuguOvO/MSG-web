import { getMovieApi} from "@/api/movie";
import { defineStore } from "pinia";
export const useMovieStore = defineStore('weather', {
    state: () => {
        return {
            movielist: <MovieRootObject>{},
            movieimg:[],
        }
    },
    actions: {
        async setMovie() {
            let result = await getMovieApi()
            this.movielist = result.data    
        }
    }
})

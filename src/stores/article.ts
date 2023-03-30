import { defineStore } from 'pinia';
import {
  getArticleApi,
  getArticleByIdApi,
  getArticleCommentApi,
  getArticleLikeApi,
  getArticleCommentByArticleidApi,
  getArticleCommentUserByArticleidApi
} from '@/api/article';
export const useArticleStore = defineStore('article', {
  state: () => {
    return {
      articleList: [],
      articleDetail: <ArticleDetail>{},
      articleComment: [],
      articleCommentDetail: <any>{},
      articleLike: ''
    };
  },
  actions: {
    getArticle() {
      getArticleApi().then((res: any) => {
        this.articleList = res.data.data;
        console.log(this.articleList);
      });
    },
    getArticleById(id: any) {
      getArticleByIdApi(id).then((res: any) => {
        this.articleDetail = res.data.data;
      });
    },

    getArticleComment(id: any) {
      getArticleCommentApi(id).then((res: any) => {
        this.articleComment = res.data.data;
      });
    },
    getArticleCommentByArticleId(id: any) {
      getArticleCommentByArticleidApi(id).then((res: any) => {
        this.articleCommentDetail = res.data.data;
      });
    },

    getArticleLike(id: any) {
      getArticleLikeApi(id).then((res: any) => {
        this.articleLike = res.data.data;
      });
    }
  }
});

import { defineStore } from 'pinia';
import { getBlogApi } from '@/api/blog';
export const useblogStore = defineStore('blog', {
  state: () => {
    return {
      list: [],
      blog: <BlogArticleInfo>{}
    };
  },
  actions: {
    async getArticle() {
      let result = await getBlogApi();
      this.list = result.data.data;
      this.blog = this.list[0];
    }
  }
});

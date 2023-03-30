declare global {
  interface ArticleItemInfo {
    id: string;
    author: string;
    articleName: string;
    summary: string;
    banner: string;
  }
  interface ArticleDetail {
    id: string;
    author: string;
    title: string;
    descripe: string;
    time: string;
    like: string;
    watched: string;
    content: string;
    comment: string;
  }
  interface ArticleCommentDetail {
    id: number;
    comment: string;
    user_id: number;
    article_id: number;
  }

  export interface ArticleComment {
    code: number;
    message: string;
    data: ArticleCommentDetail[];
  }
}

export {};

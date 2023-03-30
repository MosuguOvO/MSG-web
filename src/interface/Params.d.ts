declare global {
  interface PageParams {
    page: number;
    pagesize: number;
    authorId?: string;
  }
  interface messageParams {
    nickname: string;
    messageboard: string;
  }
}

export {};

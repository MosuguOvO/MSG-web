/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue';
  const component: DefineComponent<{}, {}, any>;
  export default component;
}

declare interface ApiResult<T> {
  data: T; //T是无限制，any是输入的类型跟返回的类型一致
  msg: string;
  success: string;
  code: number;
}

declare interface ListenInfoResult<T> {
  results: Array<T>;
  length: number;
  pages: number;
}

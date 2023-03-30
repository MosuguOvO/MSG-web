import { ElMessage } from 'element-plus';
import { useStore } from '@/stores/main';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
const baseUrl = process.env.VITE_BASE_API;
const cancelToken = axios.CancelToken; //axios取消请求
const request: AxiosInstance = axios.create({
  baseURL: baseUrl,
  timeout: 5000
});

//请求拦截
request.interceptors.request.use((config: AxiosRequestConfig) => {
  const store = useStore();
  const source = cancelToken.source();
  const { cancel } = useStore();
  const url = config.url;
  config.cancelToken = source.token;
  if (store.user) {
    //获取token
    config.headers.Authorization = `${store.user.token}`;
  }
  // 取消重复请求**
  if (cancel[url]) {
    delete cancel[url];
  }
  cancel[url] = source.cancel;
  store.setCancel(cancel);
  return config;
});

//响应拦截器
request.interceptors.response.use(
  (response: AxiosResponse) => {
    if (response.status > 400) {
      ElMessage.error(response.statusText);
      throw new Error('请求因网络出错咯~');
    } else if (response.data.code !== 200) {
      if (response.data.msg) {
        ElMessage.error(response.data.msg);
      }
      throw new Error(response.data.msg);
    }
    return response;
  },
  (err: any) => {
    Promise.reject(err);
  }
);

export default request;

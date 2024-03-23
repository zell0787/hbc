import axios, { AxiosError, AxiosRequestConfig } from 'axios';

// 默认参数
const defaultOptions: AxiosRequestConfig = {
  baseURL: '/',
  timeout: 0,
};

// 扩展参数
export interface Options extends AxiosRequestConfig {}

const request = (options?: Options) => {
  // 合并选项
  let optionsConfig: Options = { ...defaultOptions };
  if (options) {
    optionsConfig = {
      ...defaultOptions,
      ...options,
    };
  }

  // 创建实例
  const instance = axios.create(optionsConfig);

  // 添加请求拦截器
  instance.interceptors.request.use(
    (config) => {
      return config;
    },
    (error: AxiosError) => {
      Promise.reject(error);
    },
  );

  // 添加响应拦截器
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    },
  );

  return instance;
};

export default request;

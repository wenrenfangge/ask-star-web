import { ActionTipsConfig } from './types/axios'

declare module 'axios' {
  export interface AxiosRequestConfig {
    // 添加自定义配置
    actionTipsConfig?: ActionTipsConfig
  }
}

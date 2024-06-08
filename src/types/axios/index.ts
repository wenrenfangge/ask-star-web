import { AxiosRequestConfig, InternalAxiosRequestConfig, CreateAxiosDefaults } from 'axios'

export type ResponseType<T> = {
  code: number
  msg?: string
  data?: ResponseDataType<T>
}

export interface ResponseDataType<T> extends PaginationType {
  list?: Array<T>
  [key: string]: unknown
}
/**
 * 分页字段
 */
export interface PaginationType {
  page: number
  pageSize: number
  total: number
}

export interface AxiosExtraConfig extends InternalAxiosRequestConfig {
  actionTipsConfig?: ActionTipsConfig
}

export interface ActionTipsConfig {
  contentType?: string
  isMessageTip?: boolean
  tipType?: TipTypes
  // [key: string]: unknown
}

export enum TipTypes {
  MESSAGE = 'message',
  NOTIFICATION = 'notification',
  DIALOG = 'dialog',
}

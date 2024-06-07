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

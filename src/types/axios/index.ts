export type ResponseType = {
  code: number
  msg?: string
  data?: unknown
}

export type ResponseDataType<T> = {
  [key: string]: T
}

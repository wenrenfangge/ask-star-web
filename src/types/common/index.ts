export type VFormInitialType = {
  [key: string]: VFormInitialItemType
}
export type VFormInitialItemType = {
  label: string
  propName: string
  placeholder?: string
  options?: Array<VFormOptionType>
  [key: string]: any
}
export type VFormOptionType = {
  label: string | number
  value: string | number | boolean
}

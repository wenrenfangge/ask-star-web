/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-22 19:02:32
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:16:45
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/common/index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
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
  isChecked?: boolean
}

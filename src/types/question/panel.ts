/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-22 10:56:38
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-07-02 15:24:53
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/types/question/panel.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export type PanelTabsType = {
  key: string
  label: JSX.Element
  children: JSX.Element
}

export enum RightPanelTabEnum {
  PROPERTY_TAB = 'property',
  PAGE_SETTING_TAB = 'pageSetting',
}

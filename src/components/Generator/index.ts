/*
 * @Author: 闻人放歌 wenrenfangge@gmail.com
 * @Date: 2024-06-18 21:24:15
 * @LastEditors: 闻人放歌 wenrenfangge@gmail.com
 * @LastEditTime: 2024-06-30 10:36:13
 * @FilePath: /wenrenfangge-test/Users/wenrenfangge/Documents/study/react/ask-star-web/src/components/Generator/index.ts
 * @Description: 低代码组件入口文件
 */
import VInfoComponentConfig, { VInfoPropsType } from './VInfo'
import VTitleComponentConfig, { VTitlePropsType } from './VTitle'
import VInputComponentConfig, { VInputPropsType } from './VInput'
import VParagraphComponentConfig, { VParagraphPropsType } from './VParagraph'
import VTextareaComponentConfig, { VTextareaPropsType } from './VTextarea'
import VRadioComponentConfig, { VRadioPropsType } from './VRadio'
import VCheckboxComponentConfig, { VCheckboxPropsType } from './VCheckbox'
import {
  QuestionComponentTypeEnum,
  QuestionComponentInfo,
  QuestionComponentType,
  GeneratorComponetsMapType,
} from '@/types/question/index'

export type GeneratorPropsType = VTitlePropsType &
  VInputPropsType &
  VParagraphPropsType &
  VInfoPropsType &
  VTextareaPropsType &
  VRadioPropsType &
  VCheckboxPropsType
/**
 * 组件配置组类型
 */
export type ComponentConfigGroupType = {
  label: string
  groupId: string
  children: Array<ComponentConfigType>
}

export type ComponentConfigType = {
  label: string
  componentId: string
  component: QuestionComponentType
}

// 组件映射表
const initialMapData: GeneratorComponetsMapType = [
  [QuestionComponentTypeEnum.VInfo, VInfoComponentConfig],
  [QuestionComponentTypeEnum.VTitle, VTitleComponentConfig],
  [QuestionComponentTypeEnum.VInput, VInputComponentConfig],
  [QuestionComponentTypeEnum.VParagraph, VParagraphComponentConfig],
  [QuestionComponentTypeEnum.VTextarea, VTextareaComponentConfig],
  [QuestionComponentTypeEnum.VRadio, VRadioComponentConfig],
  [QuestionComponentTypeEnum.VCheckbox, VCheckboxComponentConfig],
]
const componetsMap = new Map<QuestionComponentTypeEnum, QuestionComponentType>(initialMapData)
/**
 * 根据类型获取组件
 * @param componentType 组件类型
 * @returns 组件
 */
export const getComponentByType = (
  componentType: QuestionComponentTypeEnum
): QuestionComponentInfo => {
  return componetsMap.get(componentType) as QuestionComponentInfo
}
/**
 * 组件配置组
 */
export const ComponentConfigGroup: Array<ComponentConfigGroupType> = [
  {
    label: '文本显示',
    groupId: 'textDisplay',
    children: [
      {
        label: '组件信息',
        componentId: 'VInfo',
        component: VInfoComponentConfig,
      },
      {
        label: '标题',
        componentId: 'VTitle',
        component: VTitleComponentConfig,
      },
      {
        label: '段落',
        componentId: 'VParagraph',
        component: VParagraphComponentConfig,
      },
    ],
  },
  {
    label: '用户输入',
    groupId: 'userInput',
    children: [
      {
        label: '输入框',
        componentId: 'VInput',
        component: VInputComponentConfig,
      },
      {
        label: '文本域',
        componentId: 'VTextarea',
        component: VTextareaComponentConfig,
      },
    ],
  },
  {
    label: '用户选择',
    groupId: 'userChoose',
    children: [
      {
        label: '单选组件',
        componentId: 'VRadio',
        component: VRadioComponentConfig,
      },
      {
        label: '多选框组件',
        componentId: 'VCheckbox',
        component: VCheckboxComponentConfig,
      },
    ],
  },
]
// declare namespace Generator {
//   export { GeneratorPropsType, componetsMap, getComponentByType }
// }

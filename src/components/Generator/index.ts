import VTitleComponentConfig, { VTitlePropsType } from './VTitle'
import VInputComponentConfig, { VInputPropsType } from './VInput'
import VParagraphComponentConfig, { VParagraphPropsType } from './VParagraph'
import {
  QuestionComponentTypeEnum,
  QuestionComponentInfo,
  QuestionComponentType,
} from '@/types/question/index'

export type GeneratorPropsType = VTitlePropsType & VInputPropsType & VParagraphPropsType
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
const initialMapData: Array<any> = [
  [QuestionComponentTypeEnum.VTitle, VTitleComponentConfig],
  [QuestionComponentTypeEnum.VInput, VInputComponentConfig],
  [QuestionComponentTypeEnum.VParagraph, VParagraphComponentConfig],
]
const componetsMap = new Map<QuestionComponentTypeEnum, QuestionComponentInfo>(initialMapData)
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
    ],
  },
]
// declare namespace Generator {
//   export { GeneratorPropsType, componetsMap, getComponentByType }
// }

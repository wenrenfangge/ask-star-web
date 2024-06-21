import VTitleComponentConfig, { VTitlePropsType } from './VTitle'
import VInputComponentConfig, { VInputPropsType } from './VInput'
import { QuestionComponentTypeEnum, QuestionComponentInfo } from '@/types/question/index'

export type GeneratorPropsType = VTitlePropsType & VInputPropsType

// 组件映射表
const initialMapData: Array<any> = [
  [QuestionComponentTypeEnum.VTitle, VTitleComponentConfig],
  [QuestionComponentTypeEnum.VInput, VInputComponentConfig],
]
const componetsMap = new Map<QuestionComponentTypeEnum, QuestionComponentInfo>(initialMapData)
export const getComponentByType = (
  componentType: QuestionComponentTypeEnum
): QuestionComponentInfo | unknown => {
  if (componetsMap.has(componentType)) {
    return componetsMap.get(componentType)
  }
  return null
}

// declare namespace Generator {
//   export { GeneratorPropsType, componetsMap, getComponentByType }
// }

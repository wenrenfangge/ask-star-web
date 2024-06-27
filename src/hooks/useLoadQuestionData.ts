import { getQuestionInfo } from '@/api/question'
import { resetComponents } from '@/store/componentsReducer'
import { QuestionInfoResponse } from '@/types/question'
import { ComponentInfoStateType } from '@/types/store/component'
import { useRequest } from 'ahooks'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'

export const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const dispatch = useDispatch()
  const getQuestionInfoData = () => {
    if (!id) {
      throw new Error('id is not exist')
    }
    return getQuestionInfo(id)
  }
  const { run, loading, error, data } = useRequest(getQuestionInfoData, {
    manual: true,
  })
  useEffect(() => {
    run()
  }, [id])
  useEffect(() => {
    if (!data) {
      return
    }
    const { components } = data as QuestionInfoResponse
    const selectedId = components.length > 0 ? components[0].id : ''
    const payload: ComponentInfoStateType = {
      componentList: components.map(item => {
        return {
          ...item,
          fe_id: item.id,
        }
      }),
      selectedId: selectedId,
      copiedComponent: null,
    }
    dispatch(resetComponents(payload))
  }, [data])
  return {
    loading,
    error,
  }
}

export default useLoadQuestionData

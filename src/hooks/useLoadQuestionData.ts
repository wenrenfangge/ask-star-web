import React from 'react'
import { useParams } from 'react-router-dom'
import { getQuestionInfo } from '@/api/question'
import { useRequest } from 'ahooks'

export const useLoadQuestionData = () => {
  const { id = '' } = useParams()
  const { data, loading, error } = useRequest(() => getQuestionInfo(id))
  return {
    data,
    loading,
    error,
  }
}

import { useLoadQuestionData } from '@/hooks/useLoadQuestionData'
import React, { FunctionComponent, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Edit: FunctionComponent = () => {
  const { loading, data, error } = useLoadQuestionData()
  console.log('data, loading', data, loading, error)
  return <div>Edit</div>
}

export default Edit

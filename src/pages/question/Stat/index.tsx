import { useLoadQuestionData } from '@/hooks/useLoadQuestionData'
import React, { FunctionComponent } from 'react'

const Stat: FunctionComponent = () => {
  const { loading, data } = useLoadQuestionData()
  return <div>Stat</div>
}

export default Stat

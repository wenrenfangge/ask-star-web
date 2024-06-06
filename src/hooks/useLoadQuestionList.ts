import { getQuestionList } from '@/api/question'
import { LIST_SEARCH_PRIMARY_KEY } from '@/constant'
import { ResponseDataType } from '@/types/axios'
import { QuestionCardRequest, QuestionCardTypes } from '@/types/question'
import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'

export const useLoadQuestionList = (option: Partial<QuestionCardRequest> = {}) => {
  const [searchParams] = useSearchParams()
  const { isDeleted, isStar } = option
  // 获取搜索参数
  const keyword = searchParams.get(LIST_SEARCH_PRIMARY_KEY) || ''
  const { data = {}, loading } = useRequest(
    () =>
      getQuestionList({
        currentPage: 1,
        pageSize: 10,
        keyword: keyword,
        isDeleted: isDeleted,
        isStar: isStar,
      }),
    {
      refreshDeps: [keyword],
    }
  )
  const { list = [], total = 0 } = data as ResponseDataType<QuestionCardTypes>

  return {
    list,
    total,
    loading,
  }
}

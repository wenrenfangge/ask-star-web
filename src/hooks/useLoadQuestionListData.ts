import { getQuestionList } from '@/api/question'
import { DEFAULT_PAGE_SIZE, LIST_SEARCH_PAGE_KEY, LIST_SEARCH_PRIMARY_KEY } from '@/constant'
import { ResponseDataType } from '@/types/axios'
import { QuestionCardRequest, QuestionCardTypes } from '@/types/question'
import { useRequest } from 'ahooks'
import { useSearchParams } from 'react-router-dom'

export const useLoadQuestionListData = (option: Partial<QuestionCardRequest> = {}) => {
  const [searchParams] = useSearchParams()
  const { isDeleted, isStar } = option
  // 获取搜索参数
  const keyword = searchParams.get(LIST_SEARCH_PRIMARY_KEY) || ''
  const page = parseInt(searchParams.get(LIST_SEARCH_PAGE_KEY) || '') || 1
  const pageSize = parseInt(searchParams.get('pageSize') || '') || DEFAULT_PAGE_SIZE
  const {
    data = {},
    loading,
    refresh,
  } = useRequest(
    () =>
      getQuestionList({
        page: page,
        pageSize: pageSize,
        keyword: keyword,
        isDeleted: isDeleted,
        isStar: isStar,
      }),
    {
      refreshDeps: [keyword, page, pageSize],
    }
  )
  const { list = [], total = 0 } = data as ResponseDataType<QuestionCardTypes>

  return {
    list,
    total,
    loading,
    refresh,
  }
}

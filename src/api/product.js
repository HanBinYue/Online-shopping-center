import request from '@/utils/request'

export const getProList = (obj) => {
  const { categoryId, goodName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodName,
      page
    }
  })
}

// product detail
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    params: {
      goodsId
    }
  })
}

// product comments
export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}

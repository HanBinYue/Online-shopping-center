import request from '@/utils/request'

// 加入购物车
// goodsSkuId - 商品规格id
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// 获取购物车列表
export const getCartList = () => {
  return request.get('/cart/list')
}

// 更新购物车商品数量
export const changeCount = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}

// delete
export const delSelect = (cartIds) => {
  return request.post('/cart/clear', {
    cartIds
  })
}

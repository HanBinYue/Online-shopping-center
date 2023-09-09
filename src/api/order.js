import request from '@/utils/request'

// mode: cart => obj: cartIds
// mode: buyNOw => obj: goodsId, goodsNum, goodsSkuId
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    params: {
      mode, // cart or buynow
      delivery: 10, // 10 快递 20 自提
      couponId: 0, // 优惠券
      isUsePoints: 0, // 积分
      ...obj
    }
  })
}

// submit order
export const submitOrder = (mode, obj) => {
  return request.post('/checkout/submit', {
    mode, // cart or buynow
    delivery: 10, // 10 快递 20 自提
    couponId: 0, // 优惠券
    isUsePoints: 0, // 积分
    ...obj
  })
}

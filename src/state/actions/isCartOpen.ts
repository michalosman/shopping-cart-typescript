import { OPEN_CART, CLOSE_CART, AppAction } from '../../types/actions'

const openCart = (): AppAction => {
  return {
    type: OPEN_CART,
  }
}

const closeCart = (): AppAction => {
  return {
    type: CLOSE_CART,
  }
}

export { openCart, closeCart}

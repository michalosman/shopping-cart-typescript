import { ADD_TO_CART, AppAction, REMOVE_FROM_CART } from '../../types/actions'
import { Product } from '../../types/Product'

const addToCart = (product: Product): AppAction => {
  return {
    type: ADD_TO_CART,
    payload: product,
  }
}

const removeFromCart = (product: Product): AppAction => {
  return {
    type: REMOVE_FROM_CART,
    payload: product,
  }
}

export { addToCart, removeFromCart }

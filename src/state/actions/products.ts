import { AppAction, SET_PRODUCTS } from '../../types/actions'
import { Product } from '../../types/Product'

const setProducts = (products: Product[]): AppAction => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

export { setProducts }

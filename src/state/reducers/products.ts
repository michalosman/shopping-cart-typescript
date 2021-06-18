import { ProductsAction, SET_PRODUCTS } from '../../types/actions'
import { Product } from '../../types/Product'

const INIT_STATE: Product[] = []

const productsReducer = (state = INIT_STATE, action: ProductsAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload]
    default:
      return state
  }
}

export default productsReducer

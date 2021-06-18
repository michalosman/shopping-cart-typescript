import { ProductsAction, SET_PRODUCTS } from '../../types/actions'
import { IProduct } from '../../types/IProduct'

const INIT_STATE: IProduct[] = []

const productsReducer = (state = INIT_STATE, action: ProductsAction) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return [...action.payload]
    default:
      return state
  }
}

export default productsReducer

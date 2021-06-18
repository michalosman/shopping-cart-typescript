import { Dispatch } from 'redux'
import { AppAction, SET_PRODUCTS } from '../../types/actions'
import { IProduct } from '../../types/IProduct'

const setProducts = (products: IProduct[]): AppAction => {
  return {
    type: SET_PRODUCTS,
    payload: products,
  }
}

const startSetProducts = (products: IProduct[]) => {
  return (dispatch: Dispatch<AppAction>) => {
    dispatch(setProducts(products))
  }
}

export { setProducts, startSetProducts }

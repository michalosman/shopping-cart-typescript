import styled from 'styled-components'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import ProductCard from './Products/ProductCard'
import { setProducts } from '../state/actions/products'
import { AppState } from '../state/store/store'
import { Product } from '../types/Product'

const Products = () => {
  const products = useSelector((state: AppState) => state.products)
  const dispatch = useDispatch()

  useEffect(() => {
    loadProducts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const loadProducts = async () => {
    dispatch(setProducts(filterProducts(await fetchProducts())))
  }

  const fetchProducts = async () => {
    const response = await fetch('https://fakestoreapi.com/products')
    let data = await response.json()
    return data
  }

  const filterProducts = (products: Product[]) => {
    return products.filter(
      (product) =>
        product.category === `men's clothing` ||
        product.category === `women's clothing`
    )
  }

  const productCards = products.map((product) => (
    <ProductCard
      key={uuidv4()}
      id={product.id}
      title={product.title}
      price={product.price}
      image={product.image}
      category={product.category}
    />
  ))

  return <ProductsWrapper>{productCards}</ProductsWrapper>
}

const ProductsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4rem;
  margin-top: 4rem;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, minmax(28rem, 36rem));
    justify-content: center;
  }

  @media (max-width: 480px) {
    grid-template-columns: repeat(1, 36rem);
  }

  animation: fadeIn ease 2s;

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`

export default Products

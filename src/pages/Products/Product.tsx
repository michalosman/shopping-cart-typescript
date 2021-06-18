import styled from 'styled-components'
import Button from '../../components/elements/Button'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../state/actions/cart'

interface Props {
  id: number
  title: string
  price: number
  image: string
}

const Product = ({ id, title, price, image }: Props) => {
  const product = { id, title, price, image }
  const dispatch = useDispatch()

  return (
    <ProductWrapper>
      <ImageContainer>
        <Image src={image} alt={title} />
      </ImageContainer>
      <Details>
        <Info>
          <Title>{title}</Title>
          <div>${price.toFixed(2)}</div>
        </Info>
        <Button
          onClick={() => dispatch(addToCart(product))}
          content="Add to cart"
          size="wide"
          color="dark"
          animation="color"
        />
      </Details>
    </ProductWrapper>
  )
}

const ProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.grey.main};
  border-radius: 10px;
  background-color: #fff;
  font-size: 2rem;
`

const Image = styled.img`
  width: auto;
  height: 100%;
`

const ImageContainer = styled.div`
  height: 25rem;
  padding: 3rem;
  margin: 0 auto;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 2rem;
  height: 100%;
  padding: 2rem;
  border-top: 1px solid ${({ theme }) => theme.colors.grey.main};
`

const Info = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;
  height: 100%;
`

const Title = styled.div`
  font-weight: bold;
`

export default Product
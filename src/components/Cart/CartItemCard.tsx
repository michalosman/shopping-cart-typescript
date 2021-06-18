import styled from 'styled-components'
import { FaMinus, FaPlus } from 'react-icons/fa'
import Button from '../elements/Button'
import { addToCart, removeFromCart } from '../../state/actions'
import { useDispatch } from 'react-redux'
import { CartItem } from '../../types/CartItem'
import { Product } from '../../types/Product'

interface Props {
  id: number
  title: string
  price: number
  image: string
  quantity: number
}

const CartItemCard = ({ id, title, price, image, quantity }: Props) => {
  const cartItem: CartItem = { id, title, price, image, quantity }
  const product: Product = { id, title, price, image }
  const dispatch = useDispatch()

  const formatTitle = (title: string) => {
    return title.length <= 14 ? title : title.substr(0, 14) + '...'
  }

  const sumPrice = () => {
    return (cartItem.price * cartItem.quantity).toFixed(2)
  }

  return (
    <CartItemCardWrapper>
      <ImageContainer>
        <Image src={image}></Image>
      </ImageContainer>
      <Details>
        <Title>{formatTitle(title)}</Title>
        <div>${sumPrice()}</div>
        <AmountChanger>
          <Button
            onClick={() => dispatch(removeFromCart(product))}
            content={<FaMinus />}
            color="grey"
            animation="color"
          ></Button>
          <div>{cartItem.quantity}</div>
          <Button
            onClick={() => dispatch(addToCart(product))}
            content={<FaPlus />}
            color="grey"
            animation="color"
          ></Button>
        </AmountChanger>
      </Details>
    </CartItemCardWrapper>
  )
}

const CartItemCardWrapper = styled.div`
  display: flex;
`

const ImageContainer = styled.div`
  height: 13rem;
  width: 20%;
  margin: auto;
`

const Image = styled.img`
  width: auto;
  height: 100%;
`

const Details = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  font-size: 2rem;
`

const Title = styled.div`
  height: 3rem;
  font-weight: bold;
  overflow: hidden;
`

const AmountChanger = styled.div`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export default CartItemCard

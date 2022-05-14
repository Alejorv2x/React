import React, { useContext } from 'react';
import { MdDelete } from 'react-icons/md';
import CartContext from '../../context/cart';
import {
  Container,
  ContainerList,
  TravelItem,
  Info,
  Quantity,
  Subtotal,
} from './styles';

function Cart() {
  // eslint-disable-next-line no-unused-vars
  const { state, setState } = useContext(CartContext);
  return (
    <Container>
      <ContainerList>
        {state.cart.map((el) => (
          <TravelItem>
            <img src={el.photo} alt={el.titel} />
            <Info>
              <p>{el.titel}</p>
              <strong>{el.price}</strong>
            </Info>
            <Quantity readOnly type="number" value={1} />
            <Subtotal>
              <p>200.00</p>
              <button type="button">
                <MdDelete size={24} color="#0676d9" />
              </button>
            </Subtotal>
          </TravelItem>
        ))}
      </ContainerList>
    </Container>
  );
}
export default Cart;

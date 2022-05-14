import React, { useEffect, useState, useContext } from 'react';
import { MdAddShoppingCart } from 'react-icons/md';
import { Container, List, Unit } from './styles';
import api from '../../services/api';
import CartContext from '../../context/cart';

function Home() {
  // eslint-disable-next-line no-unused-vars
  const [travelList, setTravelList] = useState([]);
  const { state, setState } = useContext(CartContext);

  useEffect(() => {
    async function getTravelList() {
      const { data } = await api.get('/travels');
      setTravelList(data);
    }
    getTravelList();
  }, []);

  function handleAddToCart(travel) {
    const copyCart = [...state.cart];
    copyCart.push(travel);
    setState({
      cart: copyCart,
    });
  }

  return (
    <Container>
      <List>
        {travelList.map((el) => (
          <Unit>
            <img src={el.photo} alt="Travel" />
            <p>{el.title}</p>
            <strong>{el.price}</strong>
            <button type="button" onClick={() => handleAddToCart(el)}>
              <div>
                <MdAddShoppingCart size={16} color="#fff" />
              </div>
              <span>Agregar al Carrito</span>
            </button>
          </Unit>
        ))}
      </List>
    </Container>
  );
}
export default Home;

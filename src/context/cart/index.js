import React, { createContext, useState } from 'react';

const DEFAULT_VALUE = {
  state: {
    cart: [],
  },
  setState: () => {},
};

const CartContext = createContext(DEFAULT_VALUE);
function CartContextProvider({ children }) {
  const [state, setState] = useState(DEFAULT_VALUE.state);
  return (
    <CartContextProvider value={{ state, setState }}>
      {children}
    </CartContextProvider>
  );
}

export { CartContextProvider };
export default CartContext;

import { createContext } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cartItems, setCardItems] = useState([]);
  console.log("card items:"+cartItems);
  const addToCard = (productItem) => {
    setCardItems((prevItems) => [...prevItems, productItem]);
}
  return (
    <CardContext.Provider
      value={{
        addToCard,
        cartItems
      }}
    >
      {children}
    </CardContext.Provider>
  )
}

export default CardProvider
CardProvider.propTypes = {
  children: PropTypes.node
}
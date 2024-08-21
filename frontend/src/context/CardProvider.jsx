import { createContext, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  const [cartItems, setCardItems] = useState(
    localStorage.getItem("cardItems") ? JSON.parse(localStorage.getItem("cardItems")) : []

  );
  useEffect(() => {

    localStorage.setItem("cardItems", JSON.stringify(cartItems));

  }, [cartItems]);
  const addToCard = (productItem) => {
    setCardItems((prevItems) => [...prevItems, productItem]);
  }

  const removeFromCard =(itemId) =>{
    const filteredCardItems =   cartItems.filter((cadritem)=>{
      return cadritem.id!==itemId;
    })
    setCardItems(filteredCardItems)
  }

  return (
    <CardContext.Provider
      value={{
        addToCard,
        removeFromCard,
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
import { createContext } from 'react';
import PropTypes from 'prop-types';

export const CardContext = createContext();

const CardProvider = ({ children }) => {
  return (
    <CardContext.Provider
      value={{
        productname: 'emin'
      }}
    >
      { children }
    </CardContext.Provider>
  )
}

export default CardProvider
CardProvider.propTypes = {
  children: PropTypes.node
}
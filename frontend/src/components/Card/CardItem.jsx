import PropTypes from 'prop-types'
import { useContext } from 'react'
import { CardContext } from '../../context/CardProvider'
const CardItem =({ cardItem })=>{
  const{ removeFromCard }= useContext(CardContext);
        return(
        <tr className="cart-item">
      <td></td>
      <td className="cart-image">
        <img src={ cardItem.img.singleImage } alt="" />
        <i className="bi bi-x delete-cart" 
        onClick={()=> removeFromCard(cardItem.id)}></i>
      </td>
      <td>{cardItem.name}</td>
      <td>{cardItem.price.newPrice}</td>
      <td className="product-quantity">1</td>
      <td className="product-subtotal">$108.00</td>
    </tr>
    )
}

export default CardItem

CardItem.propTypes ={
  cardItem : PropTypes.object
}
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <FontAwesomeIcon icon={faShoppingCart} />
      {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
    </div>
  );
}

export default CartWidget; 




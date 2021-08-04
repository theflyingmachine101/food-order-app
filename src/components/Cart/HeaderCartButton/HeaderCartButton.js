import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';
const HeaderCartButton = (props) => {
  const totalItems=useContext(CartContext).totalItems;
  return (
    <button className={classes.button} onClick={props.CartModalHandler} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
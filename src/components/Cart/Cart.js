import classes from './Cart.module.css';
import CartItem from './CartItem'
import Modal from '../UI/Modal/Modal';
import CartContext from '../../store/cart-context';
import { useContext } from 'react';

const Cart = (props) => {
  const ctx=useContext(CartContext);

  const cartItems = (
    <ul className={classes['cart-items']}>
      {ctx.items.map((item) => (
         <CartItem
         key={item.id}
         id={item.id}
         name={item.name}
         amount={item.amount}
         price={item.price}
         itemHandler={ctx.ItemHandler}
       />
      ))}
    </ul>
  );  

  return <Modal>
  {cartItems}
  <div className={classes.total}>
    <span>Total Amount</span>
    <span>{ctx.totalPrice}</span>
  </div>
  <div className={classes.actions}>
    <button className={classes['button--alt']} onClick={props.CartModalHandler}>Close</button>
    <button className={classes.button} onClick={props.CartModalHandler}>Order</button>
  </div>
  </Modal>;
    
};

export default Cart;
import CartIcon from './CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../../store/cart-context';
import { useContext, useEffect, useState } from 'react';

const HeaderCartButton = (props) => {
  const totalItems=useContext(CartContext).totalItems;
  const [showBumps,setShowBumps]=useState(false);
  const btnClasses = `${classes.button} ${ showBumps?classes.bump:""}`;

  useEffect(()=>{
    setShowBumps(true);

    const timer = setTimeout(() => {
      setShowBumps(false);
    }, 300);

    return  () => {
      clearTimeout(timer);
    };

  },[totalItems]);
  return (
    <button className={btnClasses} onClick={props.CartModalHandler} >
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default HeaderCartButton;
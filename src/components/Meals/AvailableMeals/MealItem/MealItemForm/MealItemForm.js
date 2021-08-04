import { useContext, useState } from 'react';
import Input from '../../../../UI/Input/Input';
import classes from './MealItemForm.module.css';
import CartContext from '../../../../../store/cart-context';


const MealItemForm = (props) => {
  const [currentAmount,setCurrentAmount]=useState(1);
  const ctx=useContext(CartContext);

  const submitHandler=(event)=>{
    event.preventDefault();
    ctx.ItemHandler({
      name:props.name,
      price:props.price,
      id:props.id,
      amount:props.currentAmount+parseInt(currentAmount)
    });
  }

  const setCurrentAmountHandler=(event)=>{
    setCurrentAmount(event.target.value);
  }

  return (
    <form className={classes.form} > 
      <Input
        label='Amount'
        input={{
          id: 'amount_' + props.id,
          type: 'number',
          min: '1',
          max: '5',
          step: '1',
          value:currentAmount
        }}
        updateValue={setCurrentAmountHandler}
      />
      <button onClick={submitHandler}>+Add</button>
    </form>
  );
};

export default MealItemForm;
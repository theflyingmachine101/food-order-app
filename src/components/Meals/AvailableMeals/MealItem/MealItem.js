import classes from './MealItem.module.css';
import MealItemForm from './MealItemForm/MealItemForm';


const MealItem = (props) => {
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{props.price.toFixed(2)}</div>
      </div>
      <div><MealItemForm id={props.id}
        name={props.name}
        price={props.price}
        currentAmount={props.currentAmount} /></div>
    </li>
  );
};

export default MealItem;
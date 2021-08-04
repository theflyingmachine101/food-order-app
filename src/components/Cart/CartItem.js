
import classes from './CartItem.module.css';

const CartItem = (props) => {
    const price = `$${props.price.toFixed(2)}`;
    var obj = {
        name: props.name,
        price: props.price,
        id: props.id,
        amount: props.amount
    }
    const onRemove = () => {
        obj.amount = parseInt(obj.amount) - 1;
        props.itemHandler(obj);
    }
    const onAdd = () => {
        obj.amount = parseInt(obj.amount) + 1;
        props.itemHandler(obj);
    }


    return (
        <li className={classes['cart-item']}>
            <div>
                <h2>{props.name}</h2>
                <div className={classes.summary}>
                    <span className={classes.price}>{price}</span>
                    <span className={classes.amount}>x {props.amount}</span>
                </div>
            </div>
            <div className={classes.actions}>
                <button onClick={onRemove}>−</button>
                <button onClick={onAdd}>+</button>
            </div>
        </li>
    );
};

export default CartItem;
import { useState } from 'react';
import CartContext from './cart-context';


const CartContextProvider = (props) => {
    const [item, setItemList] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [totalItems, setTotalItems] = useState(0);

    const ItemHandler = (obj) => {
        var newItem = [...item];
        for (var i = 0; i < newItem.length; ++i) {
            if (newItem[i].id === obj.id) {
                setTotalPrice((totalPrice + (obj.amount - newItem[i].amount) * obj.price));
                setTotalItems(totalItems + parseInt(obj.amount - newItem[i].amount));
                if (obj.amount == 0)
                    newItem.splice(i, 1);
                else
                    newItem[i].amount = obj.amount;
                setItemList(newItem);
                return;
            }
        }
        setTotalItems(totalItems + parseInt(obj.amount));
        setTotalPrice(totalPrice + (obj.amount) * obj.price);
        newItem.push(obj);
        setItemList(newItem)
        return;
    }
    return <CartContext.Provider value={{
        items: item,
        totalPrice: totalPrice.toFixed(2),
        totalItems: totalItems,
        ItemHandler: ItemHandler
    }} >
        {props.children}
    </CartContext.Provider>;
}

export default CartContextProvider;
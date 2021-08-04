import classes from './AvailableMeals.module.css';
import MealItem  from './MealItem/MealItem';
import Card from '../../UI/Card/Card';
import CartContext from '../../../store/cart-context';
import { useContext } from 'react';


const AvailableMeals = () => {
  const cartItems=useContext(CartContext).items;

  var dummy_meals=[{
    id: 'm1',
    name: 'Sushi',
    description: 'Finest fish and veggies',
    price: 22.99,
    amount: 0
},
{
    id: 'm2',
    name: 'Schnitzel',
    description: 'A german specialty!',
    price: 16.5,
    amount: 0
}, 
{
    id: 'm3',
    name: 'Barbecue Burger',
    description: 'American, raw, meaty',
    price: 12.99,
    amount: 0
},
{
    id: 'm4',
    name: 'Green Bowl',
    description: 'Healthy...and green...',
    price: 18.99,
    amount: 0
}];
  for(var i in dummy_meals)
  {
    for(var j in cartItems)
    {
      if(dummy_meals[i].id===cartItems[j].id)
      dummy_meals[i].amount=cartItems[j].amount
    }
  }
  const mealsList =dummy_meals.map((meal) => (
    <MealItem
    id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
      currentAmount={meal.amount}
    />
  ));

  return (
      <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
}

export default AvailableMeals;
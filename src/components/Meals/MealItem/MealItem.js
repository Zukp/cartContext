import { useContext } from 'react';
import CartContext from '../../../store/cart-context';
import classes from './MealItem.module.css';
import MealItemFrom from './MealItemForm';
function MealItem(props) {
    const cartCtx = useContext(CartContext)
    const addToCartHandler = (amount) => {
       
        cartCtx.addItem({
            id: props.id,
            name: props.name,
            amount: amount,
            price: props.price,
        })
    }

    const price = `$ ${props.price.toFixed(2)}`;
   

    return (
        <li className={classes.meal}>
            <div>
                <h3>{props.name}</h3>
                <div>{props.description}</div>
                <div className={classes.price}>{price}</div>
            </div>
            <div>
                <MealItemFrom onAmountAdd={addToCartHandler} id={props.id} />
            </div>
        </li>
    )
}
export default MealItem
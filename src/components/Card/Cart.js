import MealItemFrom from '../Meals/MealItem/MealItemForm';
import Modal from '../UI/Modal';
import classes from './Card.module.css';
import CartContext from '../../store/cart-context';
import {  useContext, useReducer, useRef } from 'react';





const Card = (props) => {
   
     const cartInputRef = useRef()

    const cardItem = (
        <ul className={classes['cart-items']}>
               {[{id:'c1',name:'Samsa',amount:2,price:12.99}].map((item) => {
                   return <li key={item.id}>{MealItemFrom.name}</li>
               })}
        </ul>
    ) 

    const  cartCtx = useContext(CartContext)
    const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
        return currNumber + item.amount
    },0)
    console.log(cartCtx.items)
  
    return (
        <Modal onCloseCart={props.onCloseCart}>
          {cardItem}
          <div className={classes.total}>
  
              <span>{cartCtx.items.map((el) => el.name  )} {numberOfCartItems},  {cartCtx.totalAmont.toFixed(2)}%</span>
              <span>{cartCtx.totalAmont.toFixed(2)}%</span>
          </div>
          <div className={classes.actions}>
              <button className={classes["button--alt"]} onClick={props.onCloseCart}>Close</button>
              <button className={classes.button}>Order</button>
          </div>
        </Modal>
    )
}
export default Card

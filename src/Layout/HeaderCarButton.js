import { useContext } from 'react';
import CartIcon from '../components/Card/CardIcon';
import CartContext from '../store/cart-context';
import classes from './HeaderButtonCar.module.css';

const HeaderButtonCar = (props) => {
  
    const  cartCtx = useContext(CartContext)
    
    const numberOfCartItems = cartCtx.items.reduce((currNumber,item) => {
        
        return currNumber + item.amount
    },0)
  
    return (
    <button className={classes.button} onClick={props.onClick}>
        <span className={classes.icon}>
            <CartIcon /> 
        </span>
        <span>Your Card</span>
        <span className={classes.badge}>{numberOfCartItems}</span> 
    </button>
    )
}
export default HeaderButtonCar
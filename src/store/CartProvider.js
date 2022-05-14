import { useReducer } from 'react';
import CartContext from './cart-context';

const defaultCartState = {
    items:[],
    totalAmont:0,
}


const cartReducer = (prevState,action) => {
   if(action.type === 'ADD'){

      const updatedItems = prevState.items.concat(action.item );
      const updatedTotalAmount = prevState.totalAmont + action.item.price * action.item.amount;
      return {
          items:updatedItems,
          totalAmont:updatedTotalAmount,
      }
   }
   return defaultCartState
}


const CartProvider = (props) => {
    const [cartState,dispatchCart] = useReducer(cartReducer,defaultCartState)
    const addItemToCartHandler = (item) => {
       dispatchCart({type:'ADD',item:item})
    }
    const removItemFromCartHandler = (id) => {}

    const cartContext  = {
        items:cartState.items,   
        totalAmont:cartState.totalAmont,
        addItem:addItemToCartHandler,
        removeItem:removItemFromCartHandler,
    }
    return (

        <CartContext.Provider value={cartContext}>
           {props.children}
        </CartContext.Provider>
    )
}
export default CartProvider
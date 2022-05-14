import { useRef, useState } from 'react';
import Input from '../../UI/Input';
import classes from './MealItemForm.module.css';


const MealItemFrom = (props) => {
   const amountInputRef = useRef()

   const [amountIsValid,setAmountIsValid] = useState(true)



   const submitHandler = (event) => {
       event.preventDefault()
       const entredAmount = amountInputRef.current.value;
       const entredAmountNumber = +entredAmount;

       if(entredAmount.trim().lenght === 0 || entredAmountNumber < 1 || entredAmountNumber > 5) {
           setAmountIsValid(false) 
           return
       }
       props.onAmountAdd(entredAmountNumber)

   }
    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <Input 
            ref={amountInputRef}
            label="Amount_" input={{id:'amount'+props.id, 
            type:'number',
            min:'1',
            max:'5',
            step:'1',
             defaultValue:'1'}} />
            <button> + add</button>
            {!amountIsValid  && <p>Please enter a valid amount (1-5)</p>}
        </form>
    )
}
export default MealItemFrom
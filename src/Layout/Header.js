import { Fragment } from 'react';
import classes from './Header.module.css';
import HeaderButtonCar from './HeaderCarButton';
// import meals from '../assets/img'
const Header = (props) => {
   return <Fragment>
       <header className={classes.header}>
           <h1 >React Meals</h1>
          <HeaderButtonCar onClick={props.onShowCart} />
       </header>
       <div className={classes["main-image"]}>
           <img src={"https://images.unsplash.com/photo-1652283868286-0a7f42f7deeb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"}  alt='food' />
       </div>
   </Fragment>
}
export default Header
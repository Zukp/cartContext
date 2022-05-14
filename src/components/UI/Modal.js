import { Fragment } from 'react';
import { createPortal } from 'react-dom';
import classes from './Modal.module.css';


const Backdrop = (props) => {
    return <div onClick={props.onCloseCart} className={classes.backdrop}></div>
}
const ModalOverlay = (props) => {
    return <div className={classes.modal}> 
        <div className={classes.content}>{props.children}</div>
    </div>
}
const portalElemenet = document.getElementById('overlays')


const Modal = (props) => {
 return (
     <Fragment>

     {createPortal(<Backdrop  onCloseCart={props.onCloseCart}/>,portalElemenet)}
     {createPortal(<ModalOverlay >{props.children}</ModalOverlay>,portalElemenet)}

     </Fragment>
 )
}
export default Modal
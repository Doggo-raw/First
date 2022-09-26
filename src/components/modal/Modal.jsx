import React from 'react';
import styles from './Modal.module.css'


const Modal = ({active, setActive, children}) => {
    return (

<div>


    <div className={active ?  styles.modal : styles.modal_close} onClick={() => setActive(false)}>


        <div className={active ?  styles.modal_content : styles.modal_content_close} onClick={e => e.stopPropagation()}>
            {children}
        </div>

    </div>

</div>
    );


};

export default Modal;
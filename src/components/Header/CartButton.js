import React from 'react'
import classes from './CartButton.module.css'

const CartButton = (props) => {
    return (
        <button className={classes.button} onClick={props.onClick}>
            <span className={classes.icon}>
                <span className="material-symbols-outlined">
                    shopping_cart
                </span>
            </span>
            <span>Your Cart</span>
            {/* <span className={classes.badge}>{numberOfCartItems}</span> */}
        </button>
    )
}

export default CartButton
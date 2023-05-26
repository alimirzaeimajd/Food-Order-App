import React from 'react'

const CartButton = (props) => {
    return (
        <button className="button" onClick={props.onClick}>
            <span className="icon">
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
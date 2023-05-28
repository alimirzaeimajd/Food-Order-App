import Modal from '../UI/Modal';

const Cart = (props) => {
    const cartItems = (
        <ul className='cart-items'>
            {[{ id: 'c1', name: 'Sushi', amount: 2, price: 12.99 }].map((item) => (
                <li>{item.name}</li>
            ))}
        </ul>
    );

    return (
        <Modal hideCart={props.hideCart}>
            {cartItems}
            <div className='total'>
                <span>Total Amount</span>
                <span>35.62</span>
            </div>
            <div className='actions'>
                <button className='button--alt' onClick={props.hideCart}>Close</button>
                <button className='button'>Order</button>
            </div>
        </Modal>
    );
};

export default Cart;
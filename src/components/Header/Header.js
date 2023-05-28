import { Fragment } from 'react';

import mealsImage from '../../assets/meals.jpg';
import CartButton from './CartButton';

const Header = (props) => {
    return (
        <Fragment>
            <header className='header'>
                <h1>ReactMeals</h1>
                <CartButton showCart={props.showCart} />
            </header>
            <div className={['main-image']}>
                <img src={mealsImage} alt='A table full of delicious food!' />
            </div>
        </Fragment>
    );
};

export default Header;
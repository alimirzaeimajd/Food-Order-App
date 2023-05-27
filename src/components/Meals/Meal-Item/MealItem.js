import React from 'react'
import MealForm from './MealForm';

const MealItem = (props) => {
    return (
        <li className='meal'>
            <div>
                <h3>{props.name}</h3>
                <div className='description'>{props.description}</div>
                <div className='price'>{props.price}</div>
            </div>
            <div>
                <MealForm />
            </div>
        </li>
    )
}

export default MealItem
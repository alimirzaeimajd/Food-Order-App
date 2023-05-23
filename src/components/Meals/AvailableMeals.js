import React from 'react'
import classes from './AvailableMeals.module.css'
import { meals } from '../../DummyData';

const AvailableMeals = () => {
    const mealsList = meals.map(meals => <li>{meals.name}</li>)
    return (
        <section className={classes.meals}>
            <ul>{mealsList}</ul>
        </section>
    )
}

export default AvailableMeals
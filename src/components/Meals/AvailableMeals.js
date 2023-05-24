import React from 'react'
import classes from './AvailableMeals.module.css'
import { meals } from '../../DummyData';
import MealItem from './Meal-Item/MealItem';
import Card from '../UI/Card';

const AvailableMeals = () => {
    const mealsList = meals.map(meals => <MealItem key={meals.id} name={meals.name} description={meals.description} price={meals.price} />)
    return (
        <section className={classes.meals}>
            <Card>
                <ul>{mealsList}</ul>
            </Card>
        </section>
    )
}

export default AvailableMeals
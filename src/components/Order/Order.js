import React from 'react';

import classes from "./Order.css"

const Order = (props) => {
  let ingredients = [];
  for (let ingredientName in props.ingredients) {
    ingredients.push({
      name: ingredientName,
      amount: props.ingredients[ingredientName]
    })

    console.log(ingredients);
  }

  const ingredientOutput = ingredients.map(ig => {
    return <span
      className={classes.Ingredients}
      key={ig.name}>
      {ig.name} ({ig.amount}) </span>

  })

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOutput}</p>
      <p>Price: <strong>${Number.parseFloat(props.price).toFixed(2)}</strong> </p>
    </div>
  )
};

export default Order;
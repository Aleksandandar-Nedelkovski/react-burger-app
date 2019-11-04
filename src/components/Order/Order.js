import React from 'react';

import classes from "./Order.css"

const Order = () => (
  <div className={classes.Order}>
    <p>Ingredients: Salad (1) </p>
    <p>Price: <strong>$5.45</strong> </p>
  </div>
);

export default Order;
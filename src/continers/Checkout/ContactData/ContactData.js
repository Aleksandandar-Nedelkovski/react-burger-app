import React, { Component } from 'react';

import Button from "../../../components/UI/Button/Button";
import Spinner from "../../../components/UI/Spinner/Spinner";
import axios from "../../../axios-orders";
import classes from "./ContactData.css";

class ContactData extends Component {
  state = {
    name: 'das',
    email: 'das@m.com',
    address: {
      street: 'sda',
      postalCode: 'das',
    },
    loading: false
  }

  orderHandler = (event) => {
    event.preventDefault();
    // console.log(this.props.ingredients);
    this.setState({ loading: true });
    const order = {
      ingredients: this.props.ingredients,
      price: this.props.price,
      customer: {
        name: "Alex N",
        address: {
          street: "654 N Wayne ave",
          zipCode: "60660",
          country: "USA"
        },
        email: "a@mail.com"
      },
      deliveryMethod: "fastest"
    }
    axios.post("/orders.json", order)
      .then(response => {
        this.setState({ loading: false });
        this.props.history.push("/");
      })
      .catch(error => {
        this.setState({ loading: false });
      });
  }

  render() {
    let form = (
      <form>
        <input className={classes.Input} type="text" name="name" placeholder="Your Name" />
        <input className={classes.Input} type="email" name="email" placeholder="Your Email" />
        <input className={classes.Input} type="text" name="street" placeholder="Your Street" />
        <input className={classes.Input} type="text" name="postal-code" placeholder="Your Postal Code" />
        <Button type="submit" btnType="Success" clicked={this.orderHandler}>ORDER</Button>
      </form>
    );
    if (this.state.loading) {
      form = <Spinner />
    }
    return (
      <div className={classes.ContactData}>
        <h4>Enter your Contact Data</h4>
        {form}
      </div>
    )
  }
}

export default ContactData;
import React, { Component } from 'react';
import { Route, Switch } from "react-router-dom";

import Layout from './hoc/Layout/Layout';
import BurgerBuilder from "./continers/BurgerBuilder/BurgerBuilder";
import Checkout from './continers/Checkout/Checkout';
import Orders from "./continers/Orders/Orders";

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path="/checkout" component={Checkout} />
            <Route path="/orders" component={Orders} />
            <Route path="/" component={BurgerBuilder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
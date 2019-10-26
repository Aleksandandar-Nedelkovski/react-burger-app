import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import BurgerBuilder from "./continers/BurgerBuilder/BurgerBuilder";
// import BuildControls from './component/Burger/BuildControls/BuildControls';
// import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Layout />
        <BurgerBuilder />
      </div>
    );
  }
}

export default App;
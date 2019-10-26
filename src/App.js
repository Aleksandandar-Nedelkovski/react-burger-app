import React, { Component } from 'react';
import Layout from './component/Layout/Layout';
import BurgerBuilder from "./continers/BurgerBuilder/BurgerBuilder";
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

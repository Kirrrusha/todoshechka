import React, { Component } from 'react';
import Products from "./components/products";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>todos</h1>
        <Products />
      </div>
    );
  }
}


export default App;

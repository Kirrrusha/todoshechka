import React, { Component } from 'react';
import Products from "./components/products";
import Footer from "./components/footer";
import ProductsPage from "./components/routes/products";
import {Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>todos</h1>
          <Switch>
            <Route exact path="/" component={Products}/>
            <Route exact path="/active" component={Products}/>
            <Route exact path="/completed" component={Products}/>
          </Switch>
        <Footer />
      </div>
    );
  }
}


export default App;

import React, { Component } from 'react';
import Products from "./components/products";
import {Switch, Route} from "react-router-dom";

class App extends Component {

  render() {
    return (
      <div className='app'>
        <h1>todos</h1>
          <Switch>
            <Route exact path="/" component={Products} filter="all"/>
            <Route exact path="/active" component={props => <Products {...props} filter="active" />}/>/>
            <Route exact path="/completed" component={props => <Products {...props} filter="completed" />}/>/>
          </Switch>
      </div>
    );
  }
}

export default App;

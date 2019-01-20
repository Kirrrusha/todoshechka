import React, { Component } from 'react';
import Products from "./components/products";
import Footer from "./components/footer";
import {Router, Switch, Route} from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div className='app'>
        <h1>todos</h1>
        {/*<Router>*/}
          {/*<Switch>*/}
            <Route path="/" component={Products} exact/>
            <Route path="/active" component={Products} exact/>
            <Route path="/completed" component={Products} exact/>
          {/*</Switch>*/}
        {/*</Router>*/}
        {/*<Products />*/}
        <Footer />
      </div>
    );
  }
}


export default App;

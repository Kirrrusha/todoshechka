import React, {Component} from 'react';
import Products from "./products";
import {connect} from "react-redux";

class ProductsPage extends Component {

  render() {
    return (
      <div>
        <Products />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(ProductsPage);

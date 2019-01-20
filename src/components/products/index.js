import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from "../product";
import {connect} from "react-redux";
import {addProduct} from "../../ac";
import './style.scss'

class Products extends Component {

  static propTypes = {
    products: PropTypes.array,
    // fetchData: PropTypes.func,
  };

  state = {
    value: ''
  };

  get body() {
    const {products} = this.props;
    return products.map(product => {
      return <div key={product.id} className="products-block">
        <Product
          product={product}
        />
      </div>
  }
    )
  }

  render() {
    return (
      <div className="products">
        <input
          className="new-todo"
          type="text"
          onChange={this.onChangeHandler}
          value={this.state.name}
          onKeyDown={this.handleKeyDown}
          placeholder="What needs to be done?"
        />
        {this.body}
        {/*<button onClick={this.handleClick}>add</button>*/}
      </div>
    );
  }

  handleKeyDown = e => {
    if (e.which === 13) {
      this.handleSubmit(e);
    } else if (e.which === 27) {
      e.currentTarget.value = '';
      this.setState({ value: '' })
    }
  }

  onChangeHandler = (e) => {
    this.setState({ value: e.currentTarget.value })
  }

  handleSubmit = e => {
    const val = this.state.value.trim();
    const {addProduct, products} = this.props;
    if (val) {
      addProduct(products.length, val);
      e.currentTarget.value = '';
      this.setState({ value: '' })
    }
  }
}



const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {addProduct})(Products);

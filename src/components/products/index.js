import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from "../product";
import {connect} from "react-redux";
import {addProduct} from "../../ac";

class Products extends Component {

  static propTypes = {
    products: PropTypes.array,
    // fetchData: PropTypes.func,
  };

  state = {
    value: ''
  };

  get body() {
    console.log('products component', this.props);
    const {products} = this.props;
    // if (products.length) return null;
    return products.map(product => {
      console.log(product);
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
        <div>
          <input
              type="text"
              onChange={this.onChangeHandler}
              value={this.state.name}
              onKeyDown={this.handleKeyDown}
          />
        </div>
        {this.body}
        {/*<button onClick={this.handleClick}>add</button>*/}
      </div>
    );
  }

  handleKeyDown = e => {
    console.log(e.which);
    if (e.which === 13) {
      this.handleSubmit(e);
    } else if (e.which === 27) {
      console.log(e.currentTarget.value);
      e.currentTarget.value = '';
      this.setState({ value: '' })
    }
  }

  onChangeHandler = (e) => {
    console.log(e.currentTarget.value);
    this.setState({ value: e.currentTarget.value })
  }

  handleSubmit = e => {
    const val = this.state.value.trim();
    const {addProduct, products} = this.props;
    if (val) {
      addProduct(products.length, val);
    }
  }

  handleClick = (ev) => {
    console.log(ev);
    // const {addProduct, products} = this.props;
    // addProduct(products.length);
  }
}



const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state);
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {addProduct})(Products);

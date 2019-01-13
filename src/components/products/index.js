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
        {this.body}
        <button onClick={this.handleClick}>add</button>
      </div>
    );
  }

  handleClick = () => {
    const {addProduct, products} = this.props;
    addProduct(products.length);
  }
}



const mapStateToProps = (state) => {
  console.log('mapStateToProps state', state);
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, {addProduct})(Products);

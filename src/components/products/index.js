import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Product from "../product";
import {connect} from "react-redux";
import {addProduct} from "../../ac";
import './style.scss'
import NavigationLink from "../navlink";

class Products extends Component {

  static propTypes = {
    products: PropTypes.array,
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

  get footer() {
    const {filter} = this.props;
    const activeItems = this.props.products.filter(e => e.completed).length;
    if (!this.props.products.length) return null;
    return (
      <div className="footer">
        <div className="items">
          {activeItems} {!activeItems || activeItems > 1 ? 'items' : 'item'} left
        </div>
        <div className="nav">
          <NavigationLink to="/" title='all' filter={filter}/>
          <NavigationLink to="/active" title='active' filter={filter} />
          <NavigationLink to="/completed" title='completed' filter={filter} />
        </div>
      </div>
    );
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
        {this.footer}
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

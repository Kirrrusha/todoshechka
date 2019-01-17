import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteProduct, editProduct} from "../../ac";
import './style.css'

class Product extends Component {

  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.number,
      text: PropTypes.string
    })
  };

  state = {
    hasError: false
  }

  componentDidCatch(err) {
    console.log('---', err);
    this.setState({
      hasError: true
    });
  }

  get body() {
    // console.log(this.props);
    const {product} = this.props;
    if (this.state.hasError) return <div>Some Error in this product</div>
    return (
      <div className="product">
        <div className="product-number">
          {product.id + 1}
        </div>
        <input className="product-text" value={product.name} onChange={this.changeText} />

        <button onClick={this.handleDelete}>delete me</button>
      </div>
    )
  }

  handleDelete = () => {
    const {product, deleteProduct} = this.props;
    deleteProduct(product.id);
  }

  changeText = (ev) => {
    // console.log(ev.target.value);
    console.log('product component', this.props);
    const {product, editProduct} = this.props;
    const obj = {id: product.id, name: ev.target.value};
    editProduct(obj);
  }

  render() {
    return (
      <div>
        {this.body}
      </div>
    );
  }
}

export default connect(
  null,
  {deleteProduct, editProduct}
  // null
)(Product);

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {deleteProduct, editProduct} from "../../ac";
import './style.scss'

class Product extends Component {

  static propTypes = {
    product: PropTypes.shape({
      id: PropTypes.string,
      text: PropTypes.string,
      completed: PropTypes.bool.isRequired
    })
  };

  state = {
    hasError: false
  }


  componentDidCatch(err) {
    this.setState({
      hasError: true
    });
  }

  get body() {
    const {product} = this.props;
    if (this.state.hasError) return <div>Some Error in this product</div>
    let className = 'product-text';
    if (!product.completed) {
      className += ' completed';
    }
    return (
      <div className="product">
        <div className="product-inf">
          <div className="product-status">
            <div className="checkbox">
              <input
                id={this.props.product.id}
                type="checkbox"
                onChange={this.handleChange('completed')}
                checked={this.props.product.completed}
              />
              <label htmlFor={this.props.product.id}></label>
            </div>
          </div>
          <input className={className} value={product.name} onChange={this.handleChange('name')}/>
        </div>

        <div className="product-delete" onClick={this.handleDelete}></div>
      </div>
    )
  }

  handleDelete = () => {
    const {product, deleteProduct} = this.props;
    deleteProduct(product.id);
  }

  handleChange = (type) => (ev) => {
    const {product, editProduct} = this.props;
    const {id, completed, name} = product;
    const obj = type === 'name' ? {id, name: ev.target.value, completed} :
      {id, name, completed: ev.target.checked};
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
)(Product);

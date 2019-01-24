import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import {connect} from "react-redux";
import NavigationLink from "../navlink";


class Footer extends Component {
  static defaultProps = {
    products: PropTypes.array,
  };

  static propTypes = {};

  render() {
    const activeItems = this.props.products.filter(e => e.completed).length;
    if (!this.props.products.length) return null;
    return (
      <div className="footer">
        <div className="items">
          {activeItems} {!activeItems || activeItems > 1 ? 'items' : 'item'} left
        </div>
        <div className="nav">
          <NavigationLink to="/" title="all" />
          <NavigationLink to="/active" title="active" />
          <NavigationLink to="/completed" title="completed" />
        </div>
      </div>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(Footer);

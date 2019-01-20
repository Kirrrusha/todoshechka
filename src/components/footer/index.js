import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './style.scss'
import {connect} from "react-redux";
import {Route, NavLink, Redirect} from "react-router-dom";


class Footer extends Component {
  static defaultProps = {
    products: PropTypes.array,
  };

  static propTypes = {};

  state = {};

  nav = []

  render() {
    const activeItems = this.props.products.filter(e => e.completed).length;
    if (!this.props.products.length) return null;
    return (
      <div className="footer">
        <div className="items">
          {activeItems} {!activeItems || activeItems > 1 ? 'items' : 'item'} left
        </div>
        <div className="nav">
          <NavLink exact to="/" activeClassName="selected">all</NavLink>
          <NavLink to="/active" activeClassName="selected">active</NavLink>
          <NavLink to="/completed" activeClassName="selected">completed</NavLink>
        </div>
      </div>
    );
  }

  active = (match, location) => {
    console.log(match)
    console.log(location)
  }

}

const mapStateToProps = (state) => {
  return {
    products: state.products
  }
}

export default connect(mapStateToProps, null)(Footer);

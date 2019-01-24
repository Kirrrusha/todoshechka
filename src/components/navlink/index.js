import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';
import './style.scss'


class NavigationLink extends Component {

  static propTypes = {
    title: PropTypes.string,
    to: PropTypes.string
  };

  render() {
    const {to, title} = this.props;
    return (
      <NavLink to={to} className="nav-link" activeClassName="selected">
        {title}
      </NavLink>
    );
  }
}

export default NavigationLink;

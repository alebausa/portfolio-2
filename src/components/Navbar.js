import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };
  }

  componentDidMount = () => { }

  render() {
    return (
      <nav>
        <div className="navbar">
          <NavLink to="/" exact className="navbar-item">Home</NavLink>
          <NavLink to="/cv" exact className="navbar-item">CV</NavLink>
          <NavLink to="/contact" exact className="navbar-item">Contact</NavLink>
          <NavLink to="/calculator" exact className="navbar-item">Calculator</NavLink>
          <NavLink to="/clients" exact className="navbar-item">Client area</NavLink>
        </div>
      </nav>
    )
  }
}

export default NavBar;
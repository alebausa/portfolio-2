import React, { Component } from 'react';
import { Navlink } from 'react-router-dom';

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
          <Navlink to="/" exact className="navbar-item">Home</Navlink>
          <Navlink to="/cv" exact className="navbar-item">CV</Navlink>
          <Navlink to="/contact" exact className="navbar-item">Contact</Navlink>
          <Navlink to="/calculator" exact className="navbar-item">Calculator</Navlink>
          <Navlink to="/clients" exact className="navbar-item">Client area</Navlink>
        </div>
      </nav>
    )
  }
}

export default NavBar;
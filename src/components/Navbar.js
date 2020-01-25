import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav';
import './Navbar.css';

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
      <>
        <Navbar collapseOnSelect expand="lg" bg="light" position="sticky">
          <Navbar.Brand>
            <img
              src="favicon.png"
              width="50"
              height="30"
              className="d-inline-block align-top"
              alt="Ale Bausa's icon"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto" inline>
              <Nav.Link><NavLink to="/" exact className="navbar-item">Home</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/cv" exact className="navbar-item">CV</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/contact" exact className="navbar-item">Contact</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/calculator" exact className="navbar-item">Calculator</NavLink></Nav.Link>
              <Nav.Link><NavLink to="/clients" exact className="navbar-item">Client area</NavLink></Nav.Link>
              <Nav className="justify-content-end">
                <Nav.Link><NavLink to="/clients" exact className="navbar-item">
                  <button className="button primary">Client area</button>
                </NavLink></Nav.Link>
              </Nav>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </>
    )
  }
}

export default NavBar;
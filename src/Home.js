import React, { Component } from 'react';
import './Home.css';

class Home extends Component {
  render() {
    return (
      <div className="container">
        <header className="header">
          <div className="col-2">
            <img src={require("./data/images/favicon.png")} alt="initials logo" className="logo-img" />
          </div>
          <div className="col-2">
            <h1>Fullstack developer &amp; <br />webapp designer</h1>
            <h2>Bringing your ideas to life</h2>
            <button className="primary">Calculate the price of your project for free ></button>
          </div>
        </header>
        <section className="body-section">
          <div className="col-2">
            <h3>Remarkable projects</h3>
            <ul className="icon-list">
              <li>www.iconfessapp.com</li>
              <li>www.sigridfadrique.com</li>
              <li>www.lamodebcn.com</li>
              <li>www.elartesano.com</li>
              <li>Misc.</li>
            </ul>
          </div>
          <div className="col-2">
            Images
          </div>
        </section>
        <section className="body-section">
          <div className="col-1">

          </div>
        </section>
      </div>
    );
  }
}

export default Home;
import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Home extends Component {
  render() {
    return (
      <>
        <Container fluid className="jumbo">
          <Row>
            <Col>
              <div className="jumbo-title">
                <h1>Fullstack developer &amp;<br />webapp designer</h1>
                <h4>Bringing your ideas to life</h4>
                <button className="button outlined">Calculate the price of your project for free</button>
              </div>
            </Col>
          </Row>
        </Container >

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
            <p>Images</p>
          </div>
        </section>
        <section className="body-section">
          <div className="col-1">

          </div>
        </section>
      </>
    );
  }
}

export default Home;
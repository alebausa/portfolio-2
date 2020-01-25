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
                <button className="button primary">Calculate the price of your project for free</button>
              </div>
            </Col>
          </Row>
        </Container >

        <Container fluid>
          <Row>
            <Col xs={12} sm={12} md={6} lg={6} className="project-pics">
              <h3>Remarkable projects</h3>
              <ul className="icon-list">
                <li>www.iconfessapp.com</li>
                <li>www.sigridfadrique.com</li>
                <li>www.lamodebcn.com</li>
                <li>www.elartesano.com</li>
                <li>Misc.</li>
              </ul>
            </Col>
            <Col xs={12} sm={12} md={6} lg={6} className="project-list">
              <h3>Remarkable projects</h3>
              <ul className="icon-list">
                <li>www.iconfessapp.com</li>
                <li>www.sigridfadrique.com</li>
                <li>www.lamodebcn.com</li>
                <li>www.elartesano.com</li>
                <li>Misc.</li>
              </ul>
            </Col>
          </Row>
        </Container>

        <Container>
          <Row>
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src="./data/images/content.png" alt="content icon" />
              <p>Hola que tal</p>
            </Col>
          </Row>
        </Container>



      </>
    );
  }
}

export default Home;
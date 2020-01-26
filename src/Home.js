import React, { Component } from 'react';
import './Home.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* Icons */
import content from './data/images/content.png';
import brand from './data/images/brand.png';
import web from './data/images/web.png';
import seo from './data/images/seo.png';
import analysis from './data/images/analysis.png';
/* Portfolio pictures */
import iconfess from './data/images/iconfess.png';
import plantiful from './data/images/plantiful.png';
import elarteessano from './data/images/elarteessano.png';
import sigrid from './data/images/sigrid.png';
/* Texts */


class Home extends Component {
  state = {
    portfolio: iconfess,
  };

  handleMouseOver = e => {
    this.setState({
      portfolio: e.target.value,
    });
  };

  render() {
    const { portfolio } = this.state;
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
              <img src={portfolio} alt="portfolio example" />
            </Col>

            <Col xs={12} sm={12} md={6} lg={6} className="project-list">
              <h2>Remarkable projects</h2>
              <div className="project-list-container">
                <div className="icon-list">
                  <button className="tag" value={iconfess} onClick={this.handleMouseOver}>www.iconfessapp.com</button>
                  <button className="tag" value={plantiful} onClick={this.handleMouseOver}>www.plantifulapp.com</button>
                  <button className="tag" value={sigrid} onClick={this.handleMouseOver}>www.sigridfadrique.com</button>
                  <button className="tag">www.lamodebcn.com</button>
                  <button className="tag"value={elarteessano} onClick={this.handleMouseOver}>www.elartesano.com</button>
                  <button className="tag">Misc.</button>
                </div>
                <div className="icon-text">
                  <p></p>
                  </div>
              </div>
            </Col>
          </Row>
        </Container>

        <Container fluid className="home-icon-section">
          <Row className="justify-content-md-center">
            <Col xs={12} sm={12} md={12} lg={12}>
              <h3>What can I do for you?</h3>
            </Col>
          </Row>
          <Row className="justify-content-md-center">
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src={content} alt="content icon" />
              <p>Write the content of the website and take or find the pictures</p>
            </Col>
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src={brand} alt="content icon" />
              <p>Design your website according to your brand (or design your branding!)</p>
            </Col>
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src={web} alt="content icon" />
              <p>Build your website with the technology that best suits your needs</p>
            </Col>
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src={seo} alt="content icon" />
              <p>SEO &amp; SEM strategies to make sure you are found</p>
            </Col>
            <Col xs={12} sm={6} md={2} lg={2} className="home-icon">
              <img src={analysis} alt="content icon" />
              <p>Community managing and analytics reports to improve it even more</p>
            </Col>
          </Row>
        </Container>



      </>
    );
  }
}

export default Home;
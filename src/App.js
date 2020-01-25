import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navbar from './components/Navbar';
import Home from './Home';
import CV from './CV';
import Contact from './Contact';
import Calculator from './Calculator';
import Clients from './Clients';
import NotFoundPage from './NotFoundPage';

import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css';

class App extends Component {
  //state = { };

  render() {
    // const { splashScreen, lightMode } = this.state;
    return (
      // <div className={lightMode ? 'light-mode' : 'dark-mode'}>
      <div>
        <Router>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/clients" component={Clients} />
            <Route exact path="*" component={NotFoundPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;

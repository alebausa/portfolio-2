import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from './Home';
import CV from './CV';
import Contact from './Contact';
import Calculator from './Calculator';
import Clients from './Clients';

import './App.css';

class App extends Component {
  //state = { };

  render() {
    // const { splashScreen, lightMode } = this.state;
    return (
      // <div className={lightMode ? 'light-mode' : 'dark-mode'}>
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/cv" component={CV} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/calculator" component={Calculator} />
            <Route exact path="/clients" component={Clients} />
          </Switch>
        </Router>
        )}
        </div>
    );
  }
}


export default App;

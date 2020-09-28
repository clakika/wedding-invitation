import React, { Component } from 'react';
import './App.css';

import Navbar from '../src/components/Navbar/Navbar';
import Home from '../src/Layout/Home/Home';
import RSVP from '../src/Layout/RSVP/RSVP';
import Story from '../src/Layout/Story/Story';
import Location from '../src/Layout/Location/Location';
import Gallery from '../src/Layout/Gallery/Gallery';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import {
  CSSTransition,
  TransitionGroup,
} from 'react-transition-group';

class App extends Component {
  render() {

    return (
        <div className="App">
          <Router>
          <Navbar />
          <Route render={({location}) => (
              <TransitionGroup>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <Switch location={location}>
                  <Route path="/" component={Home} />
                  <Route path='/rsvp' component={RSVP}/>
                  <Route path='/story' component={Story}/>
                  <Route path='/location' component={Location}/>
                  <Route path='/photogallery' component={Gallery}/>
                </Switch>
              </CSSTransition>
            </TransitionGroup>
          )} />
          </Router>
        </div>
    );
  }
}

export default App;


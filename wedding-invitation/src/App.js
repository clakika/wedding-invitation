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
                  <Route path='/home' component={Home}/>
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

{/* <table>
              <tr>
                <td>Days until:</td>
              </tr>
              <tr className="Countdown__Info">
                <td className="days">120</td>
                <td className="hours">4</td>
                <td className="minutes">12</td>
                <td className="seconds">22</td>
              </tr>
              <tr>
                <td>Days</td>
                <td>Hours</td>
                <td>Minutes</td>
                <td>Seconds</td>
              </tr>
            </table>*/}

    /*function countdown() {
      var now = new Date();
      var eventDate = new Date(2021, 2, 11);

      var currentTime = now.getTime();
      var eventTime = eventDate.getTime();

      var remainingTime = eventTime - currentTime;

      var s = Math.floor(remainingTime / 1000);
      var m = Math.floor(s / 60);
      var h = Math.floor(m / 60);
      var d = Math.floor(h / 24);

      h %= 24;
      m %= 60;
      s %= 60;

      h = (h < 10) ? "0" + h : h;
      m = (m < 10) ? "0" + m : m;
      s = (s < 10) ? "0" + s : s;

      document.querySelector("days").textContent = d;
      document.querySelector("days").innerText = d;

      document.querySelector("hours").textContent = h;
      document.querySelector("minutes").textContent = m;
      document.querySelector("seconds").textContent = s;

      setTimeout(countdown, 1000);

    }*/
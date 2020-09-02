import React, { Component } from 'react';
import './App.css';

import background from '../src/img/background.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav className="navBar"> 
          <ul>
            <li>Home</li>
            <li>Photo Gallery</li>
            <li>Wedding Party</li>
            <li>Locations</li>
          </ul>
        </nav>
        <div className="Home">
        <img src={background}/>
          <header className="Header">
            <h1>MR<span> & </span>MRS</h1>
            <h3>are getting married</h3>
            <hr></hr>
            <h3 className="date">02/09/2021</h3>
          </header>
        </div>
      </div>
    );
  }
}

export default App;

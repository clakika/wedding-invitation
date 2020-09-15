import React, { Component } from 'react';
import './Home.css';

import background from '../../img/background.svg';

export class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="ImageContainer">
                    <img src={background}/>
                </div>
                <header className="Header">
                    <h1>MR<span> & </span>MRS</h1>
                    <h3>are getting married</h3>
                    <hr></hr>
                    <h3 className="date">02/09/2021</h3>
                </header>
            </div>
        )
    }
}

export default Home

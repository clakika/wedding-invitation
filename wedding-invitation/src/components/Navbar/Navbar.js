import React, { Component } from 'react';
import './Navbar.css';
import {Link} from'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navBar"> 
                <ul>
                    <Link exact to='/'>
                        <li><a href="#" className="navBar__Link" activeClassName="active">Home</a></li>
                    </Link>

                    <Link to='/rsvp'>
                        <li><a href="#" className="navBar__Link" activeClassName="active">RSVP</a></li>
                    </Link>

                    <Link to='/gallery'>
                        <li><a href="#" className="navBar__Link" activeClassName="active">Photo Gallery</a></li>
                    </Link>

                    <Link to='/location'>
                        <li><a href="#" className="navBar__Link" activeClassName="active">Location</a></li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar

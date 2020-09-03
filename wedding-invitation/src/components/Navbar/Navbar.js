import React, { Component } from 'react';
import './Navbar.css';
import {Link} from'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navBar"> 
                <ul>
                    <Link exact to='/' className="Links">
                        <li><a href="#" className="navBar__Link" activeClassName="active">Home</a></li>
                    </Link>

                    <Link to='/rsvp' className="Links">
                        <li><a href="#" className="navBar__Link" activeClassName="active">RSVP</a></li>
                    </Link>

                    <Link to='/story' className="Links">
                        <li><a href="#" className="navBar__Link" activeClassName="active">Our Story</a></li>
                    </Link>

                    <Link to='/location' className="Links">
                        <li><a href="#" className="navBar__Link" activeClassName="active">Locations</a></li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar

import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
    render() {
        return (
            <nav className="navBar">
                <div className="MobileNavigation" onClick={() => {
                    const mobileNav = document.querySelector('.MobileNavigation');
                    const navList = document.querySelector('.NavigationList');
                    const navLink = document.querySelectorAll(".navBar__Link");

                    mobileNav.classList.toggle("open");

                    navList.classList.toggle("open");
                    navLink.forEach(link => {
                        link.classList.toggle("fade");
                    })
                }}>
                    <div className="Line"></div>
                    <div className="Line"></div>
                    <div className="Line"></div>
                </div>

                <ul className="NavigationList">
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

                    <Link to='/photogallery' className="Links">
                        <li><a href="#" className="navBar__Link" activeClassName="active">Photo Gallery</a></li>
                    </Link>
                </ul>
            </nav>
        )
    }
}

export default Navbar

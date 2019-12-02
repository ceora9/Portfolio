import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const Navbar = () => {
    const links = (
        <ul>
            <li>
                <Link to='/about'>about</Link>
            </li>
            <li>
                <Link to='/contact'>contact</Link>
            </li>
        </ul>
    );

    const logo = (
        <h1><Link to='/'>sdhMARIE DESIGN</Link></h1>
    );

    return (
        <div className="Nav">
            <nav class="navbar sticky-top">
                <Fragment>{logo}</Fragment>
                <Fragment>{links}</Fragment>
            </nav>
        </div>
    );
}

export default Navbar;

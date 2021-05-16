import React, { Component } from 'react';
import './Header.css';

class Header extends Component {
    render() {
        return (
            <div id="page-wrapper">
                <header id="header">
                    <div className="logo">
                        <img
                            id="header-img"
                            src="https://cdn.freecodecamp.org/testable-projects-fcc/images/product-landing-page-logo.png"
                            alt="original trombones logo" />
                    </div>
                    <nav id="nav-bar">
                        <ul>
                            <li><a className="nav-link" href="#features">Features</a></li>
                            <li><a className="nav-link" href="#how-it-works">How It Works</a></li>
                            <li><a className="nav-link" href="#pricing">Pricing</a></li>
                        </ul>
                    </nav>
                </header>
            </div>
        );
    }

}

export default Header;
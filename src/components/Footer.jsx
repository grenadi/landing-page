import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
    render() {
        return (
            <div className="container">
                <footer>
                    <ul>
                        <li><a href="#">Privacy</a></li>
                        <li><a href="#">Terms</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <span>Copyright 2020, Original Trombones</span>
                </footer>
            </div>
        );
    }
}

export default Footer
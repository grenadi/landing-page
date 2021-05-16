import React, { Component } from 'react';
import './Hero.css';

class Hero extends Component {
    render() {
        return (
            <div>
                <section id="hero">
                    <h2>handcrafted, home-made masterpieces</h2>
                    <form id="form" action="https://www.freecodecamp.com/email-submit">
                        <input
                            name="email"
                            id="email"
                            type="email"
                            placeholder="Enter your email address"
                            required />
                        <input
                            id="submit"
                            type="submit"
                            value="Get Started"
                            className="btn" />
                    </form>
                </section>
            </div>
        );
    }
}

export default Hero;
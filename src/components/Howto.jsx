import React, { Component } from 'react';
import './Howto.css';

class Howto extends Component {
    render() {
        return (
            <div className="container">
                <section id="how-it-works">
                    <iframe
                        title="video1"
                        id="video"
                        height="315"
                        src="https://www.youtube-nocookie.com/embed/y8Yv4pnO7qc?rel=0&amp;controls=0&amp;showinfo=0"
                        frameBorder="0"
                        allowFullScreen></iframe>
                </section>
            </div>
        );
    }
}

export default Howto;
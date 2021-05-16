import React, { Component } from 'react';
import Product from './container/Product';
import './Prising.css';

export default class Pricing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            data:
                [
                    {
                        "title": "Tenor Trombone",
                        "price": "$600",
                        "satu": "lorem ipsum.",
                        "dua": "lorem ipsum.",
                        "tiga": "lorem ipsum dolor.",
                        "empat": "lorem ipsum."
                    },
                    {
                        "title": "Bass Trombone",
                        "price": "$900",
                        "satu": "lorem ipsum.",
                        "dua": "lorem ipsum.",
                        "tiga": "lorem ipsum dolor.",
                        "empat": "lorem ipsum."
                    },
                    {
                        "title": "Valve Trombone",
                        "price": "$1200",
                        "satu": "Plays similar to a Trumpet",
                        "dua": "Great for Jazz Bands",
                        "tiga": "Lorem ipsum dolor.",
                        "empat": "lorem ipsum."
                    }
                ]
        }
    }
    render() {
        return (
            <div className="container">
                <section id="pricing">
                    {this.state.data.map((content, i) => {
                        return <Product key={i} data={content} />
                    })}
                </section>
            </div>
        );
    }
}
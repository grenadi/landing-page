import React, { Component } from 'react';
import './Grid.css'

class Grid extends Component {
    render() {
        return (
            <div className="desc">
                <h2>{this.props.title}</h2>
                <p>{this.props.desc}</p>
            </div>
        )
    }
}

export default Grid;
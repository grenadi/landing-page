import React, { Component } from 'react';
import './Produk.css';


export default class Product extends Component {

    render() {
        const padding = { padding: "5px 0" }
        return (
            <div className="product">
                <div className="level">{this.props.data.title}</div>
                <h2>{this.props.data.price}</h2>
                <ol style={padding}>
                    <li>{this.props.data.satu}</li>
                    <li>{this.props.data.dua}</li>
                    <li>{this.props.data.tiga}</li>
                    <li>{this.props.data.empat}</li>
                </ol>
                <button className="btn">Select</button>
            </div>
        );
    }
}
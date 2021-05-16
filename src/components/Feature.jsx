import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import Grid from './container/Grid';
import './Feature.css'

class Feature extends Component {
    render() {
        return (
            <div className="container">
                <section id="feature">
                    <div className="grid">
                        <div className="icon">
                            <FontAwesomeIcon icon="fire" size="3x" />
                        </div>
                        <Grid
                            title="Premium Materials"
                            desc="Our trombones use the shiniest brass which is sourced locally. This
                    will increase the longevity of your purchase." />
                    </div>
                    <div className="grid">
                        <div className="icon">
                            <FontAwesomeIcon icon="truck" size="3x" />
                        </div>
                        <Grid
                            title="Fast Shipping"
                            desc="We make sure you recieve your trombone as soon as we have finished
                        making it. We also provide free returns if you are not satisfied." />
                    </div>
                    <div className="grid">
                        <div className="icon">
                            <FontAwesomeIcon icon="battery-full" size="3x" />
                        </div>
                        <Grid
                            title="Quality Assurance"
                            desc="For every purchase you make, we will ensure there are no damages or
                        faults and we will check and test the pitch of your instrument." />
                    </div>

                </section>
            </div>
        )
    }
}

export default Feature;

import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Feature from './components/Feature';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFire, faTruck, faBatteryFull } from '@fortawesome/free-solid-svg-icons'
import Howto from './components/Howto';
import Pricing from './components/Pricing';

library.add(faFire, faTruck, faBatteryFull)



class App extends Component {
  render() {
    const pageWrapper = { position: 'relative' }
    return (
      <div style={pageWrapper}>
        <Header />
        <Hero />
        <Feature />
        <Howto />
        <Pricing />
        <Footer />
      </div>
    );
  }

}

export default App;

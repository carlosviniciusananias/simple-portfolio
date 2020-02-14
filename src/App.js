
import React, { Component } from 'react';

import Header from './components/header/header'
import Banner from './components/banner/banner'
import Liquida from './components/liquida/liquida'
import Shelf from './components/shelf/shelf'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './general.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />

        <Liquida />
        <Shelf />

        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
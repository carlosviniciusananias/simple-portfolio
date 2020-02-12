
import React, { Component } from 'react';

import Header from './components/header/header'
import Banner from './components/header/banner'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

import './general.css'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Banner />

        <Contact />

        <Footer />
      </div>
    );
  }
}

export default App;
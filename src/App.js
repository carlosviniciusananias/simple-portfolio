// Importando o React
import React, { Component } from 'react';
// Importando o Component Header
import Header from './components/header/header'
import Contact from './components/contact/contact'
import Footer from './components/footer/footer'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default App;
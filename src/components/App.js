import React, { Component } from 'react';
import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './contactus/ContactUs';
import Footer from './footer/Footer';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <Resume />
        <Portfolio />
        <ContactUs />
        <Footer />
      </div>
    );
  }
}
export default App;
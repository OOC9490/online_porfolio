import React, { Component } from 'react';
import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './contactus/ContactUs';
import Footer from './footer/Footer';
import { headerData, aboutData, resumeData, portfolioData, footerData } from '../siteData/siteData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerData={headerData}/>
        <About aboutData={aboutData}/>
        <Resume resumeData={resumeData}/>
        <Portfolio portfolioData={portfolioData}/>
        <ContactUs />
        <Footer footerData={footerData}/>
      </div>
    );
  }
}
export default App;
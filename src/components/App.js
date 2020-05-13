import React, { Component } from 'react';
import Header from './header/Header';
import About from './about/About';
import Resume from './resume/Resume';
import Portfolio from './portfolio/Portfolio';
import ContactUs from './contactus/ContactUs';
import Footer from './footer/Footer';
import { generalData, aboutData, resumeData, portfolioData } from '../siteData/siteData';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header headerData={generalData}/>
        <About aboutData={aboutData}/>
        <Portfolio portfolioData={portfolioData}/>
        <Resume resumeData={resumeData}/>
        <ContactUs contactData={generalData}/>
        <Footer footerData={generalData}/>
      </div>
    );
  }
}
export default App;
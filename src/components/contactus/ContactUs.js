import React, { Component } from 'react';

export default class ContactUs extends Component {
    render() {
      const contactData = this.props.contactData;

      return (
  
        <section id="contact">
          <div className="row section-head">
            <div className="two columns header-col">
              <h1><span>Get In Touch.</span></h1>
            </div>
            <div className="ten columns">
              <p className="lead">
                Want to get to know me better? Send me a message via <a href={`mailto:${contactData.email}`}>{contactData.email}</a> or on my social media platforms provided! 
              </p>
            </div>
          </div>
        </section>
      );
    }
};

import React, { Component } from 'react';
import Form from './Form';

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
                Have a question for me? Send me a message using the form below or on my social media platforms provided! 
              </p>
            </div>
          </div>
          <Form />
        </section>
      );
    }
};

import React, { Component } from 'react';
import emailjs from 'emailjs-com';

export default class Form extends Component {

    render(){
        return (
            <div className="row">
                <div className="twelve columns">
                    <form id="contactForm" name="contactForm">
                        <fieldset>
                        <div>
                            <label htmlFor="contactName">Name <span className="required">*</span></label>
                            <input type="text" size={35} id="contactName" name="contactName" />
                        </div>
                        <div>
                            <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                            <input type="text" size={35} id="contactEmail" name="contactEmail" />
                        </div>
                        <div>
                            <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                            <textarea cols={50} rows={15} id="contactMessage" name="contactMessage" />
                        </div>
                        <div>
                            <button className="submit">Submit</button>
                        </div>
                        </fieldset>
                    </form>
              </div>
            </div>
        );
    }
};
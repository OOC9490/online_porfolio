import React, { Component } from 'react';

export default class About extends Component {
    render() {
        const aboutData = this.props.aboutData;

        return (
            <section id="about">
            <div className="row">
                <div className="three columns">
                <img className="profile-pic" src="images/profilepic.jpg" alt="" />
                </div>
                <div className="nine columns main-col">
                <h2>About Me</h2>
                {aboutData.description.map(paragraph => <p>{paragraph}</p>)}
                <div className="row">
                    <div className="columns contact-details">
                    <h2>Contact Details</h2>
                    <p className="address">
                        <span>{aboutData.name}</span><br />
                        <span>{aboutData.addressLine1}</span><br />
                        <span>{aboutData.phone}</span><br />
                        <span>{aboutData.email}</span>
                    </p>
                    </div>
                    {/* <div className="columns download">
                    <p>
                        <a href="#" className="button"><i className="fa fa-download" />Download Resume</a>
                    </p>
                    </div> */}
                </div> {/* end row */}
                </div> {/* end .main-col */}
            </div>
            </section>
        );
    }
};
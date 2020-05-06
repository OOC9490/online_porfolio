import React, { Component } from 'react';

export default class Footer extends Component {
    render() {
        const footerData = this.props.footerData;


        return (
  
            <footer>
            <div className="row">
                <div className="twelve columns">
                <ul className="social-links">
                    <li><a href={footerData.twitter}><i className="fa fa-twitter" /></a></li>
                    <li><a href={footerData.linkedin}><i className="fa fa-linkedin" /></a></li>
                    <li><a href={footerData.github}><i className="fa fa-github" /></a></li>
                </ul>
                <ul className="copyright">
                    <li>© Copyright 2020 Lawrence Carreon</li>
                    <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>   
                </ul>
                </div>
                <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
            </div>
            </footer>
        );
    }
};

import React, { Component } from 'react';

export default class Header extends Component{
    render() {
        const headerData = this.props.headerData;

        return (
  
            <header id="home">
            <nav id="nav-wrap">
                <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
                <ul id="nav" className="nav">
                <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
                <li><a className="smoothscroll" href="#about">About</a></li>
                <li><a className="smoothscroll" href="#resume">Resume</a></li>
                <li><a className="smoothscroll" href="#portfolio">Works</a></li>
                <li><a className="smoothscroll" href="#contact">Contact</a></li>
                </ul> {/* end #nav */}
            </nav> {/* end #nav-wrap */}
            <div className="row banner">
                <div className="banner-text">
                <h1 className="responsive-headline">I'm {headerData.name}.</h1>
                <h3>
                    I'm a {headerData.location} based <span>{headerData.role}</span>, fresh out of a <span>{headerData.course}</span> course with <span>{headerData.education}</span>. Start scrolling to learn more <a className="smoothscroll" href="#about">about me</a>!</h3>
                <hr />
                <ul className="social">
                    <li><a href={headerData.twitter}><i className="fa fa-twitter" /></a></li>
                    <li><a href={headerData.linkedin}><i className="fa fa-linkedin" /></a></li>
                    <li><a href={headerData.github}><i className="fa fa-github" /></a></li>
                </ul>
                </div>
            </div>
            <p className="scrolldown">
                <a className="smoothscroll" href="#about"><i className="icon-down-circle" /></a>
            </p>
            </header>
        );
    }
};

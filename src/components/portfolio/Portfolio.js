import React, { Component } from 'react';

export default class Portfolio extends Component {
    render() {
        const portfolioData = this.props.portfolioData;

        return (
  
            <section id="portfolio">
            <div className="row">
                <div className="twelve columns collapsed">
                <h1>Check out the projects I have worked on so far:</h1>
                {/* portfolio-wrapper */}
                <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="#modal-01" title>
                        <img alt="" src="images/portfolio/webarcade-project.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{portfolioData.webArcade.title}</h5>
                            <p>{portfolioData.webArcade.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="#modal-02" title>
                        <img alt="" src="images/portfolio/smashwiki-project.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{portfolioData.smashWiki.title}</h5>
                            <p>{portfolioData.smashWiki.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="#modal-03" title>
                        <img alt="" src="images/portfolio/delivree-project.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{portfolioData.delivree.title}</h5>
                            <p>{portfolioData.delivree.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                    </div>
                    </div> {/* item end */}
                    <div className="columns portfolio-item">
                    <div className="item-wrap">
                        <a href="#modal-04" title>
                        <img alt="" src="images/portfolio/tetris-project.png" />
                        <div className="overlay">
                            <div className="portfolio-item-meta">
                            <h5>{portfolioData.tetris.title}</h5>
                            <p>{portfolioData.tetris.category}</p>
                            </div>
                        </div>
                        <div className="link-icon"><i className="icon-plus" /></div>
                        </a>
                    </div>
                    </div> {/* item end */}
                </div> {/* portfolio-wrapper end */}
                </div> {/* twelve columns end */}
                {/* Modal Popups
                --------------------------------------------------------------- */}
                <div id="modal-01" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/webarcade-project.png" alt="" />
                <div className="description-box">
                    <h4>{portfolioData.webArcade.title}</h4>
                    <p>{portfolioData.webArcade.description}</p>
                    <span className="categories"><i className="fa fa-tag" />{portfolioData.webArcade.tags.join(", ")}</span>
                </div>
                <div className="link-box">
                    <a href={portfolioData.webArcade.liveLink}>Visit the Site</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
                </div>{/* modal-01 End */}
                <div id="modal-02" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/smashwiki-project.png" alt="" />
                <div className="description-box">
                    <h4>{portfolioData.smashWiki.title}</h4>
                    <p>{portfolioData.smashWiki.description}</p>
                    <span className="categories"><i className="fa fa-tag" />{portfolioData.smashWiki.tags.join(", ")}</span>
                </div>
                <div className="link-box">
                    <a href={portfolioData.smashWiki.liveLink}>Visit the Site</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
                </div>{/* modal-02 End */}
                <div id="modal-03" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src="images/portfolio/delivree-project.png" alt="" />
                <div className="description-box">
                    <h4>{portfolioData.delivree.title}</h4>
                    <p>{portfolioData.delivree.description}</p>
                    <span className="categories"><i className="fa fa-tag" />{portfolioData.delivree.tags.join(", ")}</span>
                </div>
                <div className="link-box">
                    <a href={portfolioData.delivree.liveLink}>Visit the Site</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
                </div>{/* modal-03 End */}
                <div id="modal-04" className="popup-modal mfp-hide">
                <img className="scale-with-grid" src={portfolioData.tetris.image} alt={portfolioData.tetris.alt} />
                <div className="description-box">
                    <h4>{portfolioData.tetris.title}</h4>
                    <p>
                        {portfolioData.tetris.description}
                    </p>
                    <span className="categories"><i className="fa fa-tag" />
                        {portfolioData.tetris.tags.join(", ")}
                    </span>
                </div>
                <div className="link-box">
                    <a href={portfolioData.tetris.liveLink}>Visit the Site</a>
                    <a className="popup-modal-dismiss">Close</a>
                </div>
                </div>{/* modal-04 End */}
            </div> {/* row End */}
            </section>
        );
    }
};

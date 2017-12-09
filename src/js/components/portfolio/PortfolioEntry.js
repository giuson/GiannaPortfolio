import React from "react";
export default class PortfolioEntry extends React.Component {
  constructor(props){
    super(props);

    this.state = Object.assign({showMore: false});
  }
  clickSummary(ev){
    if (!ev.target.classList.contains('openPrevent'))
      this.setState({showMore: !this.state.showMore});
  }
  render(){
    const image = require('../../assets/' + this.props.image);
    
        return (
      <div id={this.props.id}
        className={`portfolio-entry ${(this.state.showMore) ? "expanded" : "closed"}`} >
        <div className="portfolio-summary" onClick={this.clickSummary.bind(this)}>
          
          <div className="portfolio-profile">
            <div className="portfolio-title" onClick={this.clickSummary.bind(this)}>
            {this.props.title}
            </div>
            <div className="portfolio-subtitle">{this.props.subtitle}</div>
            
            <span className="portfolio-links">
              
              {this.props.siteLink ? <a className="openPrevent" target="_blank" href={this.props.siteLink}>site</a> : ""}
            </span>

            <div className="portfolio-description">{this.props.description}</div>

            <span className="portfolio-links">
              {this.props.docLink ? <a className="openPrevent" target="_blank" href={this.props.docLink}>full documentation</a> : ""}
              
            </span>
            
          </div>
          <div className="view-more" onClick={this.clickSummary.bind(this)}>
            {(!this.state.showMore) ? "+" : "-"}
          </div>
          <img className="portfolio-img" src={image}
            width={(this.props.width) ? this.props.width : "50%"}
            height={(this.props.height) ? this.props.height : "auto"}/>
        </div>
        <div className={`portfolio-more
          ${(!this.state.showMore) ? "hidden": ""}`} >
          {this.props.children}
        </div>
      </div>);
    
  }
}

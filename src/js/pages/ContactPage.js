import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import ProfileImage from '../components/ProfileImage';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';


export default class ContactPage extends React.Component {

  componentDidMount(){
    document.body.style.backgroundColor = "white"// Set the style
    document.body.style.backgroundImage = "url('')"

}
  render(){
    return (
      <div className="contact-page">
        <MainNavigation />
        <div className="content">
          <h4>Let's connect!</h4>
          <div className="contact-mediums">
          <div><a href="mailto:gianna_uson@brown.edu">gianna_uson@brown.edu</a></div>
          </div>
        </div>
        <MainFooter back="portfolio"/>
      </div>
    );
  }
}

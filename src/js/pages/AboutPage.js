import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import ProfileImage from '../components/ProfileImage';
import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';


export default class AboutPage extends React.Component {

  componentDidMount(){
    document.body.style.backgroundColor = "white"// Set the style
    document.body.style.backgroundImage = "url('')"

}
  render(){
    return (
      <div className="about-page">
        <MainNavigation />
        <div className="content">
          <img src='../../assets/gianna.png'></img>
          <h4>my name is gianna isabelle uson</h4>
        </div>
        <MainFooter next="portfolio"/>
      </div>
    );
  }
}

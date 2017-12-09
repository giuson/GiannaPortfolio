import React from 'react';
import {Link} from 'react-router-dom';
import ProfileImage from '../ProfileImage';

export default class LandingNavigation extends React.Component {
  render(){
    return (
      <div className="landing-menu">

            
    
        <nav>
          <Link to='/about'>about</Link>
          <Link to='/portfolio'>portfolio</Link>
          <Link to='/contact'>contact</Link>
        </nav>
      </div>
    );
  }
}

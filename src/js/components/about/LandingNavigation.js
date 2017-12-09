import React from 'react';
import {Link} from 'react-router-dom';

export default class LandingNavigation extends React.Component {

  componentDidMount(){
    document.body.style.backgroundImage = "url('http://www.michaelbannongolfteam.com/wp-content/uploads/2014/08/Blurred-background.jpg')"
}
  render(){
    return (
      <div className="landing-menu animated zoomInDown">

      
        <nav>
          <Link className="landing-menu-item" to='/about'>about</Link>
          <Link className="landing-menu-item" to='/portfolio'>portfolio</Link>
          <Link className="landing-menu-item" to='/contact'>contact</Link>
        </nav>
      </div>
    );
  }
}

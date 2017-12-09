import React from 'react';
import LandingContent from '../components/about/LandingContent';
import LandingNavigation from '../components/about/LandingNavigation';
import {Link, NavLink} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';

export default class LandingPage extends React.Component {
  render(){
    return (
      <div className="landing">



      <div className="landing-page">
        <div id="hamburger-container">
          <Menu right width="250px">
            <Link to='/' className="active">home</Link>
            <NavLink to='/about'>about</NavLink>
            <NavLink to='/portfolio'>portfolio</NavLink>
            <NavLink to='/contact'>contact</NavLink>
          </Menu>
        </div>
        <LandingContent />
        <LandingNavigation />
        

        <nav className="navbar navbar-inverse navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          
          <a className="navbar-brand" href="/"><img src='/../../assets/giannalogo1.png' width="35" height="25" /></a>



        </div>
        <div className="collapse navbar-collapse">
          <ul className="nav navbar-nav navbar-right">
            <li className="active"><Link to='/'>home</Link></li>
            <li><NavLink to='/about'>about</NavLink></li>
            <li><NavLink to='/portfolio'>portfolio</NavLink></li>
            <li><NavLink to='/contact'>contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
    
      </div></div>
    );
  }
}

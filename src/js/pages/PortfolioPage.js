import React from 'react';
import queryString from 'query-string';
import scrollToComponent from 'react-scroll-to-component';

import MainNavigation from '../components/MainNavigation';
import MainFooter from '../components/MainFooter';
import ProfileImage from '../components/ProfileImage';
import PortfolioContent from '../datalayers/PortfolioContent';

export default class PortfolioPage extends React.Component {
  constructor(props){
    super(props);
    window.scrollTo(0,0);

    const params = queryString.parse(props.location.search);
    this.state = Object.assign({
      filterSkill: (params.filter) ? decodeURIComponent(params.filter) : "",
      anchor: (params.anchor) ? decodeURIComponent(params.anchor) : "",
    });
    this.scrollToAnchor = this.scrollToAnchor.bind(this);
  }
  scrollToAnchor(){
    if (this.state.anchor){
      // console.log(document.getElementById(this.state.anchor));
      scrollToComponent(document.getElementById(this.state.anchor),{
        align: 'top',
        duration: 100
      });
    }
  }
  componentDidMount(){
    document.body.style.backgroundColor = "white"// Set the style
    document.body.style.backgroundImage = "url('')"
    this.scrollToAnchor();
  }
  componentWillReceiveProps(newProps){

    this.scrollToAnchor();
  }
  onFilterSkillChange(newValue){

     window.scrollTo(0, 0);
  }
  render(){

    return (
      <div>
        <MainNavigation />
        

        <PortfolioContent filterSkill={this.state.filterSkill}
          onFilter={this.onFilterSkillChange.bind(this)}/>

        <MainFooter back="about" next="contact"/>
      </div>
    );
  }
}

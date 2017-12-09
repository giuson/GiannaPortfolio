import React from 'react';

export default class LandingContent extends React.Component {
  constructor(props){
    super(props);

  }

  render(){
    return (
      <div className="landing-content animated zoomIn">
        <div className="profile">
          <div className="name">Gianna Uson</div>
          <div className="about-item">Computer Science Student at Brown University</div>
          <div className="about-item">Baguio City, Philippines &bull; Hayward, CA &bull; Providence, RI</div>
        </div>
      </div>
    );
  }
}

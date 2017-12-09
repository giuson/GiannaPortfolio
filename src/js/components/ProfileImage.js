import React from "react";
export default class ProfileImage extends React.Component {
  render(){
    return (
      <img src={require('/assets/giannalogo1.png')}
        width={(this.props.width) ? this.props.width : "auto"}
        height={(this.props.height) ? this.props.height : "auto"} />
    );
  }
}

import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const componentStyle = {
  overflow: "hidden",
  position: "relative",
  height: "32vh",
  margin: "3vh",
  mapStyles: {
    boxSizing: "content-box",
    border: "1vh solid #000000",
    width: "30vh",
    height: "30vh",
    margin: "0 auto",
    borderRadius: "50%"
  }
};

export class MapCard extends Component {
  render() {
    return (
      <div style={componentStyle}>
        <Map
          google={this.props.google}
          zoom={14}
          style={componentStyle.mapStyles}
          initialCenter={{
            lat: -1.2884,
            lng: 36.8233
          }}
        />
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: process.env.REACT_APP_GMAPS_API_KEY
})(MapCard);

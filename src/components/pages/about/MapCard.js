import React, { Component } from "react";
import { Map, GoogleApiWrapper } from "google-maps-react";

const componentStyle = {
  overflow: "hidden",
  paddingBottom: "57.25%",
  position: "relative",
  height: "0",
  mapStyles: {
    width: "100%",
    height: "100%",
    left: "0",
    top: "0",
    borderRadius: "0px"
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

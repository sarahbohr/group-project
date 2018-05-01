import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    selectedPlace: {}  
  }

  render() {
    return (
      <Map google={this.props.google} zoom={14}>
        <Marker onClick={this.onMarkerClick} 
                name={'Current Location'} />
        <InfoWindow onClose={this.onInfoWindowClose} >
          <div>
            <h1>{this.state.selectedPlace.name}</h1>
          </div>
        </InfoWindow>
      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlOPEORfb4pCiguaMhJYdG6GWm42WJ6zM'
})(MapContainer);
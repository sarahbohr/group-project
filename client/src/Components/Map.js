import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    selectedPlace: {},
    activeMarker: {},
    breweries: []  
  }

  componentDidMount() {
    const API_URI = `http://api.brewerydb.com/v2/locations?postalCode=80202&key=9a2879d7dc656e41e2f7515f290879c9`;

    fetch(API_URI)
      .then(res => res.json())
      .then(data => console.log(data))
  }

  onMarkerClick = (props, marker, e) => {
    this.setState({
      selectedPlace: props,
      activeMarker: marker,
      showingInfoWindow: true
    })
  }

  onMapClick(props) {
    if(this.state.showingInfoWindow) {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
    }
  }

  onInfoWindowClose() {

  }


  render() {
    const styles = {
      width: '100%',
      height: '100%',
    };
    return (
      <Map 
        google={this.props.google} 
        style={styles}
        zoom={14}
        initialCenter={{
          lat: 39.75761,
          lng: -105.007
        }}
        onClick={this.onMapClick}
        >
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
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
    const API_URL = `https://hidden-tor-78736.herokuapp.com/api/v1/breweries`;

    fetch(API_URL)
      .then(res => res.json())
      .then(data => this.setState({
        breweries: data
      }))
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

render() {
  const { breweries } = this.state
  const { google } = this.props;
  const styles = {
    width: '100%',
    height: '100%',
  }

  if (!breweries || breweries.length === 0) return <div className="col-md-7">Loading...</div>
  
  return (<Map google={google} style={styles} zoom={14} initialCenter={{ lat: 39.75761, lng: -105.007 }} onClick={this.onMapClick}>
    {breweries.map(brewery => 
       <Marker onClick={this.onMarkerClick} name={brewery.name} position={{ lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) }} />)
    }
  </Map>)
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlOPEORfb4pCiguaMhJYdG6GWm42WJ6zM'
})(MapContainer);
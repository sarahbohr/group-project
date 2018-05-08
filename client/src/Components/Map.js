import React, { Component } from 'react';
import { Map, InfoWindow, Marker, GoogleApiWrapper } from 'google-maps-react';
import './Map.css'

class MapContainer extends Component {
  state = {
    showingInfoWindow: false,
    selectedPlace: {},
    activeMarker: {},
    breweries: []  
  }

  componentDidMount() {
    const API_URL = `https://hidden-tor-78736.herokuapp.com/api/v1/breweries`

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

  onMapClick = props => {
      this.setState({
        showingInfoWindow: false,
        activeMarker: null
      })
  }

render() {
  const { breweries } = this.state
  const { google } = this.props
  const styles = {
    width: '100%',
    height: '100%',
  }

  if (!breweries || breweries.length === 0) return <div className="col-md-7">Loading...</div>
  
  return (
    <Map 
      google={google} 
      style={styles} 
      zoom={14} 
      initialCenter={{ lat: 39.75761, lng: -105.007 }} 
      onClick={this.onMapClick}>
    { breweries.map(brewery => {
      let mapMarker =
        <Marker 
          onClick={this.onMarkerClick}
          key={brewery.id}
          position={{ lat: parseFloat(brewery.latitude), lng: parseFloat(brewery.longitude) }}>
        </Marker>
      let mapWindow = 
        <InfoWindow
          marker={this.state.activeMarker}
          visible={this.state.showingInfoWindow}
          position={brewery.LatLng}>
            <div>
              <h1>{brewery.brewery}</h1>
              <img src="https://raw.githubusercontent.com/sarahbohr/group-project/SB-infowindows/client/src/Components/dbc.jpg" alt="test" />
              <p>4956 Main St.<br />
              Denver, CO 80206<br />
              303.455.1254<br />
              <a href="/">Website</a><br />
              <a href="/">Get directions</a></p>
            </div>
        </InfoWindow>
        console.log(':', )
      return [mapMarker, mapWindow]
    })}
    </Map>)
}
}

export default GoogleApiWrapper({
  apiKey: 'AIzaSyBlOPEORfb4pCiguaMhJYdG6GWm42WJ6zM'
})(MapContainer);



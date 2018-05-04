import React, { Component } from 'react';
import Header from './Components/Header';
import Maps from './Components/Map';

class App extends Component {
  render() {
    return (
      <div className="row"> 
        <Header />
        <Maps />
      </div>
    );
  }
}

export default App;
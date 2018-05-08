import React, { Component } from 'react';
import Header from './Components/Header';
import Form from './Components/Form';
import Maps from './Components/Map';

class App extends Component {
  render() {
    return (
      <div className="App"> 
          <Header />
          <Form />
        <Maps />
      </div>
    )
  }
}

export default App;

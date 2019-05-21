import React, { Component } from 'react';
import './App.css';
import Map from './components/Maps/Map';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
        image: 'normal.day',
        latitude: false,
        longitude: false,
        error: null
    }
  }

    

    render() {
        return (
            <div className="App">
                <Map 
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="10"
                    image={this.state.image }/>
            </div>
        );
    }
}


export default App;

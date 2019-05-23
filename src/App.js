import React, { Component } from 'react';
import './App.css';
// import Map from './components/Maps/Map';
import FilterMarket from './components/Maps/FilterMarker';
import {companies} from './components/Maps/companies.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.map=null;
    this.state = {
        image: 'normal.day',
        latitude: false,
        longitude: false,
        error: null,
        value:'0,0', 
        companies: companies
    }
  }
    

    render() {
        return (
            <div className="App">
                <FilterMarket
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="13"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    />  
                        
            </div>
        );
    }
}


export default App;

/*
                <Map 
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="10"
                    image={this.state.image }
                />
*/

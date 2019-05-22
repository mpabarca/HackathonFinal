import React, { Component } from 'react';
import Route from './components/Maps/Route';
import OwnLocation from './components/Maps/OwnLocation';
import {companies} from './companies.json'


class App extends Component {
  constructor(props) {
    super(props);
    this.getValue=this.getValue.bind(this);
    this.map=null;
    this.state = {
        image: 'normal.day',
        latitude: false,
        longitude: false,
        error: null,
        companies: companies
    }
  }
  getValue(info){
    console.log(info);
  }
    

    render() {
        return (
            <div className="App">
                <OwnLocation
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="15"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    update={this.getValue}
                />
            </div>
        );
    }
}


export default App;


/*
                <OwnLocation
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="13"
                    image={this.state.image }
                    listCompany={this.state.companies}
                />
                <Route 
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="10"
                    image={this.state.image }
                />
*/

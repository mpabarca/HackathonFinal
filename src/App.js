import React, { Component } from 'react';
import Route from './components/Maps/Route';
import OwnLocation from './components/Maps/OwnLocation';
import './index.css';
import Login from './components/Login/Login';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import Company from './components/formulario empresa/Company'
import Signin from './components/signin/Signin';
import CompanyProfile from './components/CompanyProfile';
// import Map from './components/Maps/Map';
import FilterMarket from './components/Maps/FilterMarker';
import {companies} from './components/Maps/companies.json';


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
                <OwnLocation
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="15"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    update={this.getValue}
                />
                <Route 
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="10"
                    image={this.state.image }
                />
*/

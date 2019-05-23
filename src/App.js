import React, { Component } from 'react';
import Route from './components/Maps/Route';
import OwnLocation from './components/Maps/OwnLocation';
import './index.css';
import Login from './components/Login/Login';
import Company from './components/formulario empresa/Company'
import Signin from './components/signin/Signin';
import CompanyProfile from './components/CompanyProfile';
// import Map from './components/Maps/Map';
import FilterMarket from './components/Maps/FilterMarker';
import {companies} from './components/Maps/companies.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.getValueOnclick=this.getValueOnclick.bind(this);
    this.getValueMarker=this.getValueMarker.bind(this);
    this.map=null;
    this.state = {
        image: 'normal.day',
        error: null,
        companies: companies,
        activeMenu:'login'
    }
  }
  getValueOnclick(e){
    this.setState({
        activeMenu: e.target.getAttribute('value')
    })
  }
  getValueMarker(e){
    this.setState({
        activeMenu: e[0]
    })

  }
    

    render() {
        return (
            <div className="App">
                {(this.state.activeMenu === 'login') &&
                <Login
                    onClick={this.getValueOnclick}
                />
                }
                {(this.state.activeMenu === 'signin') &&
                <Signin
                    onClick={this.getValueOnclick}
                />
                }
                {(this.state.activeMenu === 'signin-check') &&
                <FilterMarket
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="13"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    update={this.getValueMarker}
                />
                }
                {(this.state.activeMenu === 'company') &&
                <CompanyProfile
                    onClick={this.getValueOnclick}
                />
                }
                
                        
            </div>
        );
    }
}


export default App;


/*
                <Login
                    onClick={this.handleMenuChange}
                />
                {(this.state.activeMenu === 'order') &&
                <Order
                    sendKitchen={this.toKitchen}
                />
                }
                {(this.state.activeMenu === 'kitchen') &&
                <Kitchen
                    clients={this.state.clients}
                />
                }


                <FilterMarket
                    app_id="SqgXt9Xu4ZtrdyRXBAHw"
                    app_code="4_H5feYpb2trd0PaEdD_bQ"
                    zoom="13"
                    image={this.state.image }
                    listCompany={this.state.companies}
                    update={this.getValueMap}
                    />
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

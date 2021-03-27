import axios from "axios";
import { Redirect, Route } from "react-router-dom";

import React from "react";
import logo from "./logo.svg";
import "./App.css";
import "./style.css";
import Registration from "./Common/Registration/Registration";
import Login from "./Common/Login/Login";
import HomePage from "./Common/HomePage/HomePage";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { Component } from "react";


import FleetList from "./FleetList";
import VehicleList from "./VehicleList";
import FleetProvider from "./context";

class App extends component() {
  
    
    constructor() {
      super();
      this.state = {
        user: {},
      };
    }
  
    login = async (loginObj, history) => {
      try {
        const response = await axios.post("/login", loginObj);
        console.log(response.data.data);
        this.setState({ user: response.data.data }, () => {
          history.push("/Fleetlist");
        });
      } catch (err) {
        alert(err.response.data.data.msg);
      }
    };
  
    register = async (registrationObj, history) => {
      try {
        const response = await axios.post("/registration", registrationObj);
  
        //reponse.data.data => { email: email, id:id }
        const customer = response.data.data;
        console.log(response.data.data);
  
        // TODO: create user session in cookies
        // createSession(customer);
  
        // TODO: user is authorized if no error is caught, re-route to login
        this.setState({ user: response.data.data }, () => {
          history.push("/Fleetlist");
        });
      } catch (err) {
        alert(err.response.data.data.msg);
      }
    };
  
    render() {
      return (
        <FleetProvider>
      <Router>
        <Switch>
          <Route path="/fleet-vehicles/:fleetId">
            <VehicleList />
          </Route>
          <Route path="/">
            <FleetList />
          </Route>
        </Switch>
      </Router>
    </FleetProvider>
       
  );
}
}


export default App;


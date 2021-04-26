import "./style.css";
import { Component } from "react";
import FleetList from "./Fleetlist";
import VehicleList from "./Vehiclelist";
import { ProtectedSupplyRoute } from "../util/routes";


// file where we used Protect to render the supply frontend pages and 
//then in any file we need context methods & data we can import this method there and simply call it to get things.

class SupplyApp extends Component {
  render() {
    return (
      <>
        <ProtectedSupplyRoute
          exact
          path={`/fleet-management/`}
          component={FleetList}
        />
        <ProtectedSupplyRoute
          path="/fleet-management/fleet-vehicles/:fleetId"
          component={VehicleList}
        />
      </>
    );
  }
}

export default SupplyApp;

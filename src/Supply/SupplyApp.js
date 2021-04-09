import "./style.css";
import { Component } from "react";
import FleetList from "./Fleetlist";
import VehicleList from "./Vehiclelist";
import { ProtectedSupplyRoute } from "../util/routes";

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

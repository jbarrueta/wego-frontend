import "./style.css";
import { Component } from "react";
import FleetList from "./FleetList";
import VehicleList from "./VehicleList";
import FleetProvider from "./context";
import { ProtectedSupplyRoute } from "../util/routes";

class SupplyApp extends Component {
  render() {
    return (
      <FleetProvider>
        <ProtectedSupplyRoute
          exact
          path={`/fleet-management/`}
          component={FleetList}
        />
        <ProtectedSupplyRoute
          path="/fleet-management/fleet-vehicles/:fleetId"
          component={VehicleList}
        />
      </FleetProvider>
    );
  }
}

export default SupplyApp;

import { Route } from "react-router-dom";
import "./style.css";
import { Component } from "react";
import FleetList from "./FleetList";
import VehicleList from "./VehicleList";
import FleetProvider from "./context";
import { ProtectedSupplyRoute } from "../util/routes";

class SupplyApp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: this.props.user,
    };
  }

  render() {
    return (
      <FleetProvider>
        <ProtectedSupplyRoute
          path="/fleet-management/fleet-vehicles/:fleetId"
          component={VehicleList}
        />
        <ProtectedSupplyRoute
          exact
          path={`/fleet-management/`}
          component={FleetList}
        />
      </FleetProvider>
    );
  }
}

export default SupplyApp;

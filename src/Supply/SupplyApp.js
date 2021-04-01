import { Route } from "react-router-dom";
import "./style.css";
import { Component } from "react";
import FleetList from "./FleetList";
import VehicleList from "./VehicleList";
import FleetProvider from "./context";
import { ProtectedRoute } from "../util/routes";

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
        <ProtectedRoute
          path="/fleet-management/fleet-vehicles/:fleetId"
          component={VehicleList}
        />
        <ProtectedRoute
          exact
          path={`/fleet-management/`}
          component={FleetList}
        />
      </FleetProvider>
    );
  }
}

export default SupplyApp;

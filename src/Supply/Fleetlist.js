import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useUserStore } from "./context";

function FleetList({ ...props }) {
  const history = useHistory();
  const { state } = useUserStore();
  const fleetList = state.fleetList;
  const redirectCars = (fleetId) => {
    history.push({
      pathname: `/fleet-vehicles/${fleetId}`
    });
  };

  return (
    <div className="fleet-page">
      <h1>Fleet List</h1>
      <div className="fleet-list">
        {fleetList.map((fleet, i) => (
          <div
            className="fleet-item"
            onClick={() => redirectCars(fleet.fleetId)}
          >
            {fleet.name}
          </div>
        ))}
      </div>
    </div>
  );
}

export default FleetList;

import React, { useState } from "react";
import data from "./jsonData";

const FleetContext = React.createContext();

function FleetProvider({ children }) {
  const [state, setState] = useState({
    fleetList: [...data]
  });

  const setVehicles = React.useCallback(
    (vehicles, fleetId) => {
      const list = [...state.fleetList];
      const index = list.findIndex(
        (fleet) => `${fleet.fleetId}` === `${fleetId}`
      );
      console.log(index);
      if (index !== -1) {
        list[index] = { ...list[index], vehicles };
        setState({ fleetList: list });
      }
    },
    [state.fleetList]
  );

  const value = {
    state,
    setVehicles
  };

  return (
    <FleetContext.Provider value={value}>{children}</FleetContext.Provider>
  );
}

export function useUserStore() {
  return React.useContext(FleetContext);
}

export default FleetProvider;
import React, { useState } from "react";

const FleetContext = React.createContext();

function FleetProvider({ children }) {
  const [state, setState] = useState({
    fleetList: [],
    nextId: 1,
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
        setState({ ...state, fleetList: list });
      }
    },
    [state]
  );

  const createFleet = React.useCallback((fleet) => {
    const id = state.nextId
    setState({nextId: id + 1, fleetList: [...state.fleetList, {fleetId: id, ...fleet, vehicles: []}]})
  }, [state]);

  const value = {
    state,
    setVehicles,
    createFleet
  };

  return (
    <FleetContext.Provider value={value}>{children}</FleetContext.Provider>
  );
}

export function useUserStore() {
  return React.useContext(FleetContext);
}

export default FleetProvider;
import React, { useState } from "react";
import data from "./jsonData";


/* setVehicles: It will update vehicle list of given fleetId.*/

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

/* useUserStore: It will return context props which are provided in value. 
      ex. we set const 
      value = {
            state,
            setVehicles,
        };
    we will get above things when we call useUserStore() function in any file under provider. 
    Check App.js file where we used Provider and then in any file we need context methods 
    & data we can import this method there and simply call it to get things.*/
export function useUserStore() {
  return React.useContext(FleetContext);
}

export default FleetProvider;
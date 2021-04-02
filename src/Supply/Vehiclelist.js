import React from "react";
import { useHistory, useParams } from "react-router-dom";
import { useUserStore } from "./context";
import "./style.css";
import Dialog from "./Dialog";

function VehicleList({ ...props }) {
  console.log("here");
  let history = useHistory();
  let { fleetId } = useParams();
  const { state, setVehicles } = useUserStore();
  const [dialog, setDialog] = React.useState();
  const [vehicle, setVehicle] = React.useState();
  const [vehicleIndex, setVehicleIndex] = React.useState();
  const fleetList = state.fleetList;
  console.log(fleetList);
  const fleet = fleetList.find((fleet) => `${fleet.fleetId}` === fleetId);
  console.log(fleet, fleetId);

  /* It will delete vehicle from list. Also uses confirm dialog in it before delete.*/

  const handleDelete = React.useCallback(
    (index) => {
      const isConfirmed = window.confirm("Do you want to delete?");
      console.log(isConfirmed);
      if (isConfirmed) {
        const vehicleList = [...fleet.vehicles];
        vehicleList.splice(index, 1);
        setVehicles(vehicleList, fleetId);
      }
    },
    [setVehicles, fleetId, fleet]
  );
  /*  It will used to open location update popup to change location of particular vehicle.*/
  const handleChange = React.useCallback(
    (index) => {
      const vehicle = fleet.vehicles[index];
      setDialog(true);
      setVehicleIndex(index);
      setVehicle(vehicle);
    },
    [fleet]
  );
  /* This will used to set vehicle values on change location time or when we add new record, related to input's onchange Methods*/
  const handleFieldChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setVehicle((vehicle) => {
      return { ...vehicle, [name]: value };
    });
  }, []);
  /* It will open popup dialog box to show new vehicle info form to add new vehicle.*/
  const handleAdd = React.useCallback(() => {
    setDialog(true);
    setVehicle({});
    setVehicleIndex();
  }, []);
  /*  It will used to close popup dialog box and clear data.*/
  const handleClose = React.useCallback(() => {
    setVehicle({});
    setVehicleIndex();
    setDialog(false);
  }, []);
  /* It will add new vehicle info in to particular fleet's vehicle list or update existing vehicle for location change.*/
  const handleSave = React.useCallback(() => {
    const vehicleList = [...fleet.vehicles];
    if (vehicleIndex) {
      vehicleList.splice(vehicleIndex, 1, { ...vehicle });
      setVehicles(vehicleList, fleetId);
    } else {
      vehicleList.push({ ...vehicle });
      setVehicles(vehicleList, fleetId);
    }
    handleClose();
  }, [vehicle, handleClose, vehicleIndex, setVehicles, fleet, fleetId]);

  console.log({ vehicleIndex });
  return (
    <div>
      <h2>Vehicle List</h2>
      <table className="vehicle-list" cellPadding="10" cellSpacing="0">
        <thead>
          <tr>
            <th>Model</th>
            <th>LicensePlate</th>
            <th>Status</th>
            <th colSpan="2">
              <button type="button" onClick={handleAdd}>
                Add new Vehicle
              </button>
            </th>
          </tr>
        </thead>
        <tbody>
          {fleet.vehicles.map((vehicle, i) => (
            <tr key={i}>
              <td>{vehicle.number}</td>
              <td>{vehicle.number2}</td>
              <td>{vehicle.status}</td>
              <td>
                <button type="button" onClick={() => handleChange(i)}>
                  Edit Status
                </button>
              </td>

              <td>
                <button type="button" onClick={() => handleDelete(i)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {dialog && (
        <Dialog
          onClose={handleClose}
          title={vehicleIndex ? "change status" : "status"}
        >
          <div>
            <table cellSpacing="15">
              <tbody>
                {[undefined, null].includes(vehicleIndex) ? (
                  <React.Fragment>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>model</td>
                      <td>
                        <input
                          type="text"
                          name="number"
                          value={vehicle.number || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                    <tr>
                      <td style={{ fontWeight: "bold" }}>licensePlate</td>

                      <td>
                        <input
                          type="text"
                          name="number2"
                          value={vehicle.number2 || ""}
                          onChange={handleFieldChange}
                        />
                      </td>
                    </tr>
                  </React.Fragment>
                ) : null}
                <tr>
                  <td style={{ fontWeight: "bold" }}>Status</td>

                  <td>
                    <select
                      value={vehicle.status}
                      name="status"
                      onChange={handleFieldChange}
                    >
                      <option value="available">Available</option>
                      <option value="inactive">In active</option>
                      <option value="in order"> In order</option>
                    </select>
                  </td>
                </tr>
              </tbody>
            </table>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                marginTop: 10,
              }}
            >
              <button
                style={{ padding: "5px 100px" }}
                type="button"
                onClick={handleSave}
              >
                Save
              </button>
            </div>
          </div>
        </Dialog>
      )}
    </div>
  );
}

export default VehicleList;

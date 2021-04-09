import React from "react";
import { useHistory } from "react-router-dom";
import "./style.css";
import { useUserStore } from "./context";
import Dialog from "./Dialog";

function FleetList({ ...props }) {
  const history = useHistory();
  const { state, createFleet } = useUserStore();
  const fleetList = state.fleetList;
  const [dialog, setDialog] = React.useState(false);
  const [fleetForm, setFleetForm] = React.useState({});

  const redirectCars = (fleetId) => {
    history.push({
      pathname: `/fleet-management/fleet-vehicles/${fleetId}`,
    });
  };

  const handleAdd = React.useCallback(() => {
    setDialog(true);
    setFleetForm({});
  }, []);

  const handleChange = React.useCallback((e) => {
    const { name, value } = e.target;
    setFleetForm((fleet) => {
      return { ...fleet, [name]: value };
    });
  }, []);

  const handleSave = React.useCallback(() => {
    const object = {
      ...fleetForm,
    };
    createFleet(object);
    setDialog(false);
    setFleetForm({});
  }, [fleetForm, createFleet]);

  const handleClose = React.useCallback(() => {
    setDialog(false);
    setFleetForm({});
  }, []);

  return (
    <div className="fleet-page">
      <h1>Welcome Back</h1>
      <button
        type="button"
        onClick={handleAdd}
        style={{ padding: "5px 100px", margin: 10 }}
      >
        Add new Fleet
      </button>
      <div className="fleet-list">
        {fleetList.map((fleet, i) => (
          <div
            className="fleet-item"
            onClick={() => redirectCars(fleet.fleetId)}
          >
            {fleet.service_type}
          </div>
        ))}
      </div>
      {dialog && (
        <Dialog onClose={handleClose} title={"New Fleet"}>
          <div>
            <input
              type="text"
              name="service_type"
              placeholder="Enter Fleet Service Type"
              value={fleetForm.service_type || ""}
              onChange={handleChange}
            />
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

export default FleetList;

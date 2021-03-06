import React from "react";
import "./style.css";
import Dialog from "./Dialog";
import { Component } from "react";
import { connect } from "react-redux";
import {
  addVehicle,
  getVehicleList,
  updateVehicle,
} from "../actions/supply/vehicle";
import PropTypes from "prop-types";

const mapStateToProps = ({ vehicle: { vehicleList } }) => ({
  vehicleList,
});

class VehicleList extends Component {
  static propTypes = {
    vehicleList: PropTypes.arrayOf(PropTypes.object).isRequired,
    addVehicle: PropTypes.func.isRequired,
    updateVehicle: PropTypes.func.isRequired,
    getVehicleList: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
      vehicle: null,
      fleetId: this.props.match.params.fleetId,
    };
  }
  // is executed after the first render only on the fleet manager side
  componentDidMount() {
    this.props.getVehicleList(this.state.fleetId);
  }

  // It will used to open popup dialog box and clear data.
  openDialog = (vehicle) => {
    this.setState({
      dialog: true,
      vehicle: vehicle === null ? null : { ...vehicle },
    });
  };

  // It will used to close popup dialog box and clear data.
  closeDialog = () => {
    this.setState({ dialog: false, vehicleId: null });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.vehicle) {
      this.handleUpdate(e);
    } else {
      this.handleAdd(e);
    }
    this.closeDialog();
  };
  // It will open popup dialog box to show new vehicle info form to add new vehicle.

  handleAdd = (e) => {
    const vehicleObj = {
      vehicle_model: e.target[0].value,
      license_plate: e.target[1].value,
      vehicle_status: e.target[2].value,
    };
    this.props.addVehicle(this.state.fleetId, vehicleObj);
  };

  handleUpdate = (e) => {
    e.preventDefault();
    const vehicleObj = {
      vehicle_status: e.target[0].value,
    };
    this.props.updateVehicle(this.state.vehicle._id, vehicleObj);
  };

  render() {
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
                <button type="button" onClick={() => this.openDialog(null)}>
                  Add new Vehicle
                </button>
              </th>
            </tr>
          </thead>
          <tbody>
            {this.props.vehicleList.map((vehicle, i) => (
              <tr key={vehicle._id}>
                <td>{vehicle.vehicle_model}</td>
                <td>{vehicle.license_plate}</td>
                <td>{vehicle.vehicle_status}</td>
                <td>
                  <button
                    type="button"
                    onClick={() => this.openDialog(vehicle)}
                  >
                    Edit Status
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {this.state.dialog && (
          <Dialog
            onClose={this.closeDialog}
            title={this.state.vehicle ? "Change Status" : "Add Vehicle"}
          >
            <div>
              <form onSubmit={this.handleSubmit}>
                <table cellSpacing="15">
                  <tbody className="w-60 center flex-column">
                    {this.state.vehicle === null && (
                      <>
                        <tr>
                          <td style={{ fontWeight: "bold" }}>model</td>
                          <td>
                            <input type="text" name="vehicle_model" />
                          </td>
                        </tr>
                        <tr>
                          <td style={{ fontWeight: "bold" }}>licensePlate</td>

                          <td>
                            <input type="text" name="license_plate" />
                          </td>
                        </tr>
                      </>
                    )}
                    <tr>
                      <td style={{ fontWeight: "bold" }}>Status</td>

                      <td>
                        <select
                          defaultValue={
                            this.state.vehicle
                              ? this.state.vehicle.vehicle_status
                              : "available"
                          }
                          name="vehicle_status"
                        >
                          <option value={"available"}>Active</option>
                          <option
                            value="inactive"
                            disabled={
                              this.state.vehicle !== null &&
                              this.state.vehicle.vehicle_status === "busy"
                            }
                          >
                            Inactive
                          </option>
                          <option
                            value="maintenance"
                            disabled={
                              this.state.vehicle !== null &&
                              this.state.vehicle.vehicle_status === "busy"
                            }
                          >
                            Under Maintenance
                          </option>
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
                  <button style={{ padding: "5px 100px" }} type="submit">
                    Save
                  </button>
                </div>
              </form>
            </div>
          </Dialog>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, {
  addVehicle,
  updateVehicle,
  getVehicleList,
})(VehicleList);

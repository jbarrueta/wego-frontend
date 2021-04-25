import React from "react";
import "./style.css";
import Dialog from "./Dialog";
import { Component } from "react";
import { addFleet, getFleetList } from "../actions/supply/fleet";
import PropTypes from "prop-types";
import { connect } from "react-redux";

const mapStateToProps = ({ fleet: { fleetList }, session: { user } }) => ({
  user,
  fleetList,
});

class FleetList extends Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    fleetList: PropTypes.arrayOf(PropTypes.object).isRequired,
    addFleet: PropTypes.func.isRequired,
    getFleetList: PropTypes.func.isRequired,
  };

  constructor(props) {
    super(props);
    this.state = {
      dialog: false,
    };
  }

  componentDidMount() {
    this.props.getFleetList();
  }
  //  history = useHistory();
  //  { state, createFleet } = useUserStore();
  //  fleetList = state.fleetList;
  //  [dialog, setDialog] = React.useState(false);
  //  [fleetForm, setFleetForm] = React.useState({});

  handleRoute = (route) => {
    this.props.history.push(route);
  };

  openDialog = () => {
    this.setState({ dialog: true });
  };

  closeDialog = () => {
    this.setState({ dialog: false });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const fleetObj = {
      fleet_name: e.target[0].value,
      service_type: e.target[1].value,
    };
    this.props.addFleet(fleetObj);
    this.closeDialog();
  };

  render() {
    const { user, fleetList } = this.props;
    return (
      <div className="fleet-page">
        <h1>Welcome Back {user.firstName}</h1>
        <button
          type="button"
          onClick={this.openDialog}
          
        >
          Add new Fleet
        </button>
        <div className="fleet-list">
          {fleetList.map((fleet, i) => (
            <div
              className="fleet-item"
              key={i}
              onClick={() =>
                this.handleRoute(
                  `/fleet-management/fleet-vehicles/${fleet._id}`
                )
              }
            >
              {fleet.fleet_name}
            </div>
          ))}
        </div>
        {this.state.dialog && (
          <Dialog onClose={this.closeDialog} title={"New Fleet"}>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="fleet_name"
                placeholder="Enter Fleet Name"
              />
              <input
                type="text"
                name="service_type"
                placeholder="Enter Fleet Service Type"
              />
              <div>
                <button type="submit">
                  Save
                </button>
              </div>
            </form>
          </Dialog>
        )}
      </div>
    );
  }
}

export default connect(mapStateToProps, { addFleet, getFleetList })(FleetList);

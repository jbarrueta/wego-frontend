import Map from "../../Components/Map/Map";
import { connect } from "react-redux";
import axios from "axios";
import config from "../../config/config";
import { Component } from "react";
import { getOrder } from "../../actions/demand/order";

const mapStateToProps = ({ order: { currentOrder } }) => ({
  order: currentOrder,
});

const urlDemandToSupply = config.hostedOnServer
  ? `https://demand.${config.baseURL}/api`
  : "";

class OrderPage extends Component {
  componentDidMount() {
    const orderId = this.props.match.params.order_id;
    if (orderId !== undefined) {
      this.props.getOrder(`_id=${orderId}`);
    }
  }

  completeOrder = async (vehicle_status, current_location) => {
    try {
      const response = await axios.post(`${urlDemandToSupply}/order/update`, {
        vehicle_status,
        current_location,
        vehicle_id: this.props.order.routeObj.vehicle_id,
        order_id: this.props.order._id,
        order_status: "arrived",
      });
      this.props.getOrder(`_id=${this.props.order._id}`);
    } catch (err) {
      alert(err);
    }
  };
  render() {
    const coordinateRoute = eval(this.props.order.routeObj.route);
    const ETA = new Date(this.props.order.routeObj.ETA);
    const formattedETA = `${ETA.getHours()}:${ETA.getMinutes()} ${
      ETA.getMonth() + 1
    }/${ETA.getDate()}/${ETA.getFullYear()}`;
    return (
      <>
        <p className="primarySize tc">Order Page</p>
        <p className="secondarySize tc">
          Confirmation# {this.props.order.publicId}
        </p>
        {this.props.order.status !== "arrived" ? (
          <>
            <p className="secondarySize tc">
              Expected Time of Arrival: {formattedETA}
            </p>
            <div className="">
              <Map
                coordinateRoute={coordinateRoute}
                completeOrder={this.completeOrder}
              />
            </div>
          </>
        ) : (
          <>
            <p className="secondarySize tc mt4">Vehicle has arrived!</p>
            <p className="opaqueFont w-50 center">
              Head over to the vehicle waiting outside, when prompted for a pin
              please enter the pin below. Once the correct pin is entered the
              vehicle compartment will open
            </p>
            <p className="primarySize green tc">
              {this.props.order._id.substr(-4, 4)}
            </p>
          </>
        )}
      </>
    );
  }
}

export default connect(mapStateToProps, { getOrder })(OrderPage);

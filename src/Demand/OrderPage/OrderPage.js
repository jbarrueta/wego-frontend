import Map from "../../Components/Map/Map";
import { connect } from "react-redux";
import AnimatedCar from "../../Components/AnimatedCar/AnimatedCar";
import axios from "axios";
import config from "../../config/config";

const mapStateToProps = ({ order: { currentOrder } }) => ({
  order: currentOrder,
});

const urlDemandToSupply = config.hostedOnServer
  ? "https://supply.team12.sweispring21.tk/api"
  : "";

// const coordinateRoute = [
//   [-97.758917, 30.231775],
//   [-97.758166, 30.232976],
//   [-97.757988, 30.232891],
//   [-97.757622, 30.232621],
//   [-97.757501, 30.232374],
//   [-97.757427, 30.23205],
// ];
const OrderPage = ({ order }) => {
  const coordinateRoute = eval(order.routeObj.route);
  const ETA = new Date(order.routeObj.ETA);
  const formattedETA = `${ETA.getHours()}:${ETA.getMinutes()} ${
    ETA.getMonth() + 1
  }/${ETA.getDate()}/${ETA.getFullYear()}`;

  const updateVehicle = async (vehicle_status, current_location) => {
    try {
      const response = await axios.post(`${urlDemandToSupply}/vehicle/update`, {
        vehicle_status,
        current_location,
        vehicle_id: order.routeObj.vehicle_id,
      });
      console.log(response.data.data);
    } catch (err) {
      console.log(err);
      alert(err);
    }
  };

  return (
    <>
      <p className="primarySize tc">Order Page</p>
      <p className="secondarySize tc">Confirmation# {order.publicId}</p>
      <p className="secondarySize tc">
        Expected Time of Arrival: {formattedETA}
      </p>
      <div className="">
        <Map coordinateRoute={coordinateRoute} updateVehicle={updateVehicle} />
      </div>
    </>
  );
};

export default connect(mapStateToProps)(OrderPage);

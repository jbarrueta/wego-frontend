import Map from "../../Components/Map/Map"
import { connect } from "react-redux";
import AnimatedCar from "../../Components/AnimatedCar/AnimatedCar";

const mapStateToProps = ({ order: { currentOrder } }) => ({
  order: currentOrder,
});

const coordinateRoute = ([[-97.758917, 30.231775], [-97.758166, 30.232976], [-97.757988,
  30.232891], [-97.757622, 30.232621], [-97.757501, 30.232374], [-97.757427, 30.23205]])
const OrderPage = ({ order }) => {
  console.log(order);
  return (
    <>
      <p className="primarySize tc">Order Page</p>
      <p className="secondarySize tc">Confirmation# {order.publicId}</p>
      <div className="" >
      <Map coordinateRoute = {coordinateRoute}/> 
      </div>
    </>
  );
};

export default connect(mapStateToProps)(OrderPage);

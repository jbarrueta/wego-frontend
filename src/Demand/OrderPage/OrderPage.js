import { connect } from "react-redux";
import AnimatedCar from "../../Components/AnimatedCar/AnimatedCar";

const mapStateToProps = ({ order: { currentOrder } }) => ({
  order: currentOrder,
});

const OrderPage = ({ order }) => {
  console.log(order);
  return (
    <>
      <p className="primarySize tc">Order Page</p>
      <p className="secondarySize tc">Confirmation# {order.publicId}</p>
      <div className="center ">
        <AnimatedCar />
      </div>
    </>
  );
};

export default connect(mapStateToProps)(OrderPage);

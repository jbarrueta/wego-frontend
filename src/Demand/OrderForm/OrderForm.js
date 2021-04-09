import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { connect } from "react-redux";
import { requestOrder } from "../../actions/order";
import { useHistory, useParams } from "react-router";

const mapStateToProps = ({ session: { id }, order: { currentOrder } }) => ({
  userId: id,
  order: currentOrder,
});

const OrderForm = ({ requestOrder, userId, order }) => {
  const history = useHistory();
  let params = useParams();
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const orderObj = {
      serviceType: params.service_type,
      customerId: userId,
      pickupAddress: e.target[0].value,
      dropoffAddress: e.target[1].value,
    };

    await requestOrder(orderObj);
    history.push(`/${params.service_type}/order/`);
  };
  return (
    <form className="tc ma5" onSubmit={onSubmitHandler}>
      <p className="primarySize">
        <span className="logoFont">WeGo </span> Autonomous Vehicle Order!
      </p>
      <div className="ma5">
        <Input type="text" placeholder="Pickup Address" name="pickupAddress" />
        <Input placeholder="Dropoff Address" name="dropoffAddress" />
      </div>
      <Button classNames="ma4" type="submit">
        Request<span className="logoFont f4 pl2">WeGo</span>
      </Button>
    </form>
  );
};

export default connect(mapStateToProps, { requestOrder })(OrderForm);

import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";
import { connect } from "react-redux";
import { requestOrder } from "../../actions/demand/order";
import { useHistory, useParams } from "react-router";

const mapStateToProps = ({
  session: {
    user: { id },
  },
  order: { currentOrder },
}) => ({
  userId: id,
  order: currentOrder,
});

const OrderForm = ({ requestOrder, userId, order }) => {
  const history = useHistory();
  let params = useParams();
  const onSubmitHandler = async (e) => {
    e.preventDefault();
    const plAddress = e.target[0].value;
    const plCity = e.target[1].value;
    const plState = e.target[2].value;
    const plZipcode = e.target[3].value;
    const dlAddress = e.target[4].value;
    const dlCity = e.target[5].value;
    const dlState = e.target[6].value;
    const dlZipcode = e.target[7].value;

    const pickupLocation = `${plAddress}, ${plCity}, ${plState} ${plZipcode}`;
    const dropoffLocation = `${dlAddress}, ${dlCity}, ${dlState} ${dlZipcode}`;

    const orderObj = {
      serviceType: params.service_type,
      customerId: userId,
      pickupAddress: pickupLocation,
      dropoffAddress: dropoffLocation,
    };

    await requestOrder(orderObj);
    console.log(order);
    history.push(`/${params.service_type}/order/`);
  };
  return (
    <form className="tc ma5" onSubmit={onSubmitHandler}>
      <p className="primarySize">
        <span className="logoFont">WeGo </span> Autonomous Vehicle Order!
      </p>
      <div className="flex center w-90 bg-white-80 shadow-5 h-50 br4">
        <div className="flex flex-column br w-100 bw2 b--black-10 pa4">
          <div className="flex flex-column center">
            <p className="secondarySize opaqueFont">Pickup location</p>
            <Input
              type="text"
              placeholder="Address"
              name="plAddress"
              required
            />
            <Input type="text" placeholder="City" name="plCity" required />
            <Input type="text" placeholder="State" name="plState" required />
            <Input
              placeholder="Zip Code"
              name="plZipcode"
              className=""
              type="number"
              required
            />
          </div>
        </div>
        <div className="flex flex-column w-100">
          <div className="flex flex-column center">
            <p className="secondarySize opaqueFont">Dropoff location</p>
            <Input type="text" placeholder="Address" name="dlAddress" />
            <Input type="text" placeholder="City" name="dlCity" />
            <Input type="text" placeholder="State" name="dlState" />
            <Input
              placeholder="Zip Code"
              name="dlZipcode"
              className=""
              type="number"
            />
          </div>
        </div>
      </div>
      <Button classNames="ma4" type="submit">
        Request<span className="logoFont f4 pl2">WeGo</span>
      </Button>
    </form>
  );
};

export default connect(mapStateToProps, { requestOrder })(OrderForm);

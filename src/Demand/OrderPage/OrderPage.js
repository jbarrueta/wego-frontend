import Button from "../../Components/Button/Button";
import Input from "../../Components/Input/Input";

export default function OrderPage({ requestOrder }) {
  const onSubmitHandler = (e) => {
    e.preventDefault();

    const orderObj = {
      serviceType: "pet2vet",
      pickupAddress: e.target[0].value,
      dropoffAddress: e.target[1].value,
    };
    requestOrder(orderObj);
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
}

import { useHistory } from "react-router";
import Button from "../../../Components/Button/Button";

export default function LandingPageP2V() {
  const history = useHistory();
  const pet2vet = () => {
    history.push("/pet2vet/order/form");
  };
  const pet2home = () => {
    history.push("/pet2vet/order/form");
  };
  return (
    <>
      <div>
        <p className="tc primarySize">Pet2Vet</p>
        <p className="tc secondarySize mb3">
          Please select the kind of service you would like to request
        </p>
        <div className="center">
          <Button classNames="ma4" onClick={pet2vet}>
            Pet <span className="light-red">2</span> Vet
          </Button>
          <Button classNames="ma4" onClick={pet2home}>
            Pet <span className="light-red">2</span> Home
          </Button>
        </div>
      </div>
    </>
  );
}

import { useHistory } from "react-router";
import AnimatedCar from "../AnimatedCar/AnimatedCar";
import logo from "./logo.png";
import "./LogoP2V.css";

export default function LogoP2V() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <div className="logoFont flex items-center ph2">
      <span className="pr3">Pet2Vet</span>
      <AnimatedCar />
      {/* <img src={logo} alt="" width="75px" height="75px" /> */}
      <span className="secondarySize mt4 pointer" onClick={home}>
        by WeGo
      </span>
    </div>
  );
}

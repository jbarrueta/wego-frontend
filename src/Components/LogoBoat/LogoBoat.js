import { useHistory } from "react-router";
import AnimatedCar from "../AnimatedCar/AnimatedCar";
import logo from "./logo.png";
import "./LogoBoat.css";

export default function LogoBoat() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <div className="logoFont flex items-center ph2">
      <span className="pr3">Boat</span>
      <AnimatedCar />
      {/* <img src={logo} alt="" width="75px" height="75px" /> */}
      <span className="secondarySize mt4 pointer" onClick={home}>
        by WeGo
      </span>
    </div>
  );
}

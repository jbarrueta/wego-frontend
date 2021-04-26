import { useHistory } from "react-router";
import AnimatedCar from "../AnimatedCar/AnimatedCar";
import logo from "./logo.png";
import "./LogoGroceries.css";

export default function LogoGroceries() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <div className="logoFont flex items-center ph2">
      <span className="pr3">Groceries</span>
      <AnimatedCar />
      {/* <img src={logo} alt="" width="75px" height="75px" /> */}
      <span className="secondarySize mt4 pointer" onClick={home}>
        by WeGo
      </span>
    </div>
  );
}

import { useHistory } from "react-router";
import logo from "./logo.png";
import "./LogoP2V.css";

export default function LogoP2V() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };

  return (
    <div className="logoFont flex items-center ph2">
      Pet2Vet
      <img src={logo} alt="" width="75px" height="75px" />
      <span className="secondarySize mt4 pointer" onClick={home}>
        by WeGo
      </span>
    </div>
  );
}

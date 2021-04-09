import logo from "./logo.png";
import "./Logo.css";
import { useHistory } from "react-router";

export default function Logo() {
  const history = useHistory();

  const home = () => {
    history.push("/");
  };
  return (
    <div className="logoFont flex items-center ph2 pointer" onClick={home}>
      WeGo
      <img src={logo} alt="" width="75px" height="75px" />
    </div>
  );
}

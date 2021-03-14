import logo from "./logo.png";
import "./Logo.css";

export default function Logo() {
  return (
    <div className="logoFont flex items-center ph2">
      WeGo
      <img src={logo} alt="" width="75px" height="75px" />
    </div>
  );
}

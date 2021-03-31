import logo from "./logo.png";
import "./LogoP2V.css";

export default function LogoP2V() {
  return (
    <div className="logoFont flex items-center ph2">
      Pet2Vet
      <img src={logo} alt="" width="75px" height="75px" />
      <span className="secondarySize mt4">by WeGo</span>
    </div>
  );
}

import { connect } from "react-redux";
import { Route } from "react-router";
import Logo from "../Logo/Logo";
import LogoP2V from "../LogoP2V/LogoP2V";
import "./NavBar.css";

const mapStateToProps = ({ session }) => ({
  user: session,
});

const NavBar = ({ user }) => {
  return (
    <div className="navBar flex justify-between">
      <div>
        <Route path="/wego" component={Logo} />
        <Route path="/pet2vet" component={LogoP2V} />
      </div>
      {/* <div className="flex items-center ma4 secondarySize">Home</div> */}
    </div>
  );
};

export default connect(mapStateToProps)(NavBar);

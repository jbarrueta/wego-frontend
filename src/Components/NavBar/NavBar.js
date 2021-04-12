import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Logo from "../Logo/Logo";
import LogoP2V from "../LogoP2V/LogoP2V";
import "./NavBar.css";
import PropTypes from "prop-types";

const mapStateToProps = ({ session }) => ({
  user: session,
});

const NavBar = ({ user }) => {
  return (
    <div className="navBar flex justify-between">
      <div>
        <Switch>
          <Route path="/pet2vet" component={LogoP2V} />
          <Route path="/" component={Logo} />
        </Switch>
      </div>
      {/* <div className="flex items-center ma4 secondarySize">Home</div> */}
    </div>
  );
};

NavBar.propTypes = {
  user: PropTypes.object.isRequired,
  some: PropTypes.string,
};

export default connect(mapStateToProps)(NavBar);

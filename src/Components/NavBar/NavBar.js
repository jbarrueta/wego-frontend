import { connect } from "react-redux";
import { Route, Switch } from "react-router";
import Logo from "../Logo/Logo";
import LogoP2V from "../LogoP2V/LogoP2V";
import "./NavBar.css";
import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { logout } from "../../actions/common/session";
import LockIcon from "@material-ui/icons/Lock";
import { Cookies, withCookies } from "react-cookie";
import config from "../../config/config";
import LogoGroceries from "../LogoGroceries/LogoGroceries";
import LogoPharma from "../LogoPharma/LogoPharma";
import LogoBoat from "../LogoBoat/LogoBoat";

const mapStateToProps = ({ session: { user, loggedIn } }) => ({
  user,
  loggedIn,
});

const NavBar = ({ loggedIn, cookies, logout }) => {
  const subdomain = config.hostedOnServer
    ? window.location.hostname.split(".")[0]
    : config.workingBranch;

  return (
    <div className="navBar flex justify-between pa3">
      <div>
        <Switch>
          <Route path="/boat" component={LogoBoat} />
          <Route path="/groceries" component={LogoGroceries} />
          <Route path="/pharma" component={LogoPharma} />
          <Route path="/pet2vet" component={LogoP2V} />
          <Route path="/" component={Logo} />
        </Switch>
      </div>
      {loggedIn && subdomain == "demand" && (
        <div className="flex items-center">
          <NavLink
            exact
            to="/landing"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Home
          </NavLink>
          <NavLink
            exact
            to="/pet2vet"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Pet2Vet
          </NavLink>
          <NavLink
            exact
            to="/pharma/order/form"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Pharma
          </NavLink>
          <NavLink
            exact
            to="/groceries/order/form"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Groceries
          </NavLink>
          <NavLink
            exact
            to="/boat/order/form"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Boat
          </NavLink>
          <div>
            <div
              onClick={() => logout(cookies)}
              className="f6 flex flex-column items-center black link dim pointer ph3"
            >
              <LockIcon className="red pointer grow dim" />
              Logout
            </div>
          </div>
        </div>
      )}
      {loggedIn && subdomain == "supply" && (
        <div className="flex items-center">
          <NavLink
            exact
            to="/fleet-management"
            className="secondarySize black link dim pointer ph3 "
            activeClassName="b"
          >
            Home
          </NavLink>
          <div>
            <div
              onClick={() => logout(cookies)}
              className="f6 flex flex-column items-center black link dim pointer ph3"
            >
              <LockIcon className="red pointer grow dim" />
              Logout
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

NavBar.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  logout: PropTypes.func.isRequired,
};

export default withCookies(connect(mapStateToProps, { logout })(NavBar));

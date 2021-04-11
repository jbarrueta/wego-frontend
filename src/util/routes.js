import { Redirect, Route, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import config from "../config/config";

const mapStateToProps = ({ session: { user } }) => ({
  loggedIn: Boolean(user.id),
});

const subdomain = config.hostedOnServer
  ? window.location.hostname.split(".")[0]
  : config.workingBranch;

const Open = ({ exact, path, component: Component, loggedIn }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        loggedIn ? (
          subdomain === "demand" ? (
            <Redirect to="/landing" />
          ) : (
            <Redirect to="/fleet-management" />
          )
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const ProtectedDemand = ({ exact, path, component: Component, loggedIn }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        loggedIn && subdomain === "demand" ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/" />
        )
      }
    />
  );
};
const ProtectedSupply = ({ exact, path, component: Component, loggedIn }) => {
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        loggedIn && subdomain === "supply" ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/" />
        )
      }
    />
  );
};

export const OpenRoute = withRouter(connect(mapStateToProps)(Open));
export const ProtectedDemandRoute = withRouter(
  connect(mapStateToProps)(ProtectedDemand)
);
export const ProtectedSupplyRoute = withRouter(
  connect(mapStateToProps)(ProtectedSupply)
);

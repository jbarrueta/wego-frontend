import { useCookies } from "react-cookie";
import { Redirect, Route, withRouter } from "react-router-dom";

//TODO: pass to redux
const isLoggedIn = (cookies) => {
  return Boolean(cookies.user && cookies.user.id);
};

const Open = ({ exact, path, component: Component }) => {
  const [cookies, setCookie] = useCookies();
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isLoggedIn(cookies) ? (
          // <Redirect to="/wego/landing/" />
          <Redirect to="/fleet-management" />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};

const Protected = ({ exact, path, component: Component }) => {
  const [cookies, setCookie] = useCookies();
  return (
    <Route
      exact={exact}
      path={path}
      render={(props) =>
        isLoggedIn(cookies) ? (
          <Component {...props} />
        ) : (
          <Redirect exact to="/wego" />
        )
      }
    />
  );
};

export const OpenRoute = withRouter(Open);
export const ProtectedRoute = withRouter(Protected);

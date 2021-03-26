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
          <Redirect exact to="/landing" />
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
        isLoggedIn(cookies) ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export const OpenRoute = withRouter(Open);
export const ProtectedRoute = withRouter(Protected);
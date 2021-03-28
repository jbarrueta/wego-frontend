import "./App.css";
import { Redirect, Route } from "react-router-dom";
import Login from "./Common/Login/Login";
import Registration from "./Common/Registration/Registration";
import LandingPage from "./Demand/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Common/HomePage/HomePage";
import { Component } from "react";
import axios from "axios";
import { Cookies, withCookies } from "react-cookie";
import { instanceOf } from "prop-types";
import { createSession, destroySession } from "./util/cookies";
import { OpenRoute, ProtectedRoute } from "./util/routes";
import LandingPageP2V from "./Demand/Pet2Vet/LandingPageP2V.js/LandingPageP2V";
import NavBarP2V from "./Demand/Pet2Vet/NavBarP2V/NavBarP2V";
import OrderPage from "./Demand/OrderPage/OrderPage";

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };
  constructor(props) {
    super(props);
    this.state = {
      user: props.cookies.get("user") || {},
    };
  }

  login = async (loginObj, history) => {
    try {
      const response = await axios.post("/login", loginObj);
      this.receiveUser(response.data.data, history);
    } catch (err) {
      console.log(err);
      alert(err.response.data.data.msg);
    }
  };

  register = async (registrationObj, history) => {
    try {
      const response = await axios.post("/registration", registrationObj);

      //reponse.data.data => { email: email, id:id }
      this.receiveUser(response.data.data, history);
    } catch (err) {
      alert(err.response.data.data.msg);
    }
  };

  logout = () => {
    const { cookies } = this.props;
    destroySession(cookies);
  };

  receiveUser = (user, history) => {
    console.log("running");
    const { cookies } = this.props;
    cookies.set("user", user);
    // createSession(cookies, user);
    this.setState({ user }, () => history.push("/wego/landing"));
  };

  requestOrder = async (orderObj) => {
    try {
      const response = await axios.post("/api/order/request", {
        ...orderObj,
        customer: this.state.user,
      });
      alert(response.data.data);
    } catch (err) {
      alert(err.response.data.data.msg);
    }
  };

  render() {
    return (
      <div className="app pa2">
        <Route
          exact
          path="/"
          render={() => <Redirect exact path="/" to="/wego" />}
        />
        <Route path="/wego" component={NavBar} />
        <Route path="/pet2vet" component={NavBarP2V} />
        <OpenRoute exact path="/wego" component={HomePage} />
        <OpenRoute
          path="/wego/login"
          component={() => <Login login={this.login} />}
        />
        <OpenRoute
          path="/wego/registration"
          component={() => <Registration register={this.register} />}
        />
        <ProtectedRoute
          path="/wego/landing"
          component={() => (
            <LandingPage user={this.state.user} logout={this.logout} />
          )}
        />
        {/* <ProtectedRoute path="/wego/order" component={() => <OrderPage />} /> */}
        {/* <ProtectedRoute
          path="/pet2vet/landing"
          component={() => <LandingPageP2V requestOrder={this.requestOrder} />}
        /> */}
      </div>
    );
  }
}

export default withCookies(App);

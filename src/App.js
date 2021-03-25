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
    const { cookies } = this.props;
    createSession(cookies, user);
    this.setState({ user }, () => history.push("/landing"));
  };

  render() {
    return (
      <div className="app pa2">
        <NavBar />
        <OpenRoute exact path="/" component={HomePage} />
        <ProtectedRoute
          path="/landing"
          component={() => (
            <LandingPage user={this.state.user} logout={this.logout} />
          )}
        />
        <OpenRoute
          path="/login"
          component={() => <Login login={this.login} />}
        />
        <OpenRoute
          path="/registration"
          component={() => <Registration register={this.register} />}
        />
      </div>
    );
  }
}

export default withCookies(App);

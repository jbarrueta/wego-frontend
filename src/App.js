import "./App.css";
import { Redirect, Route } from "react-router-dom";
import Login from "./Common/Login/Login";
import Registration from "./Common/Registration/Registration";
import LandingPage from "./Demand/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Common/HomePage/HomePage";
import { Component } from "react";
import axios from "axios";

class App extends Component {
  constructor() {
    super();
    this.state = {
      user: {},
    };
  }

  login = async (loginObj, history) => {
    try {
      const response = await axios.post("/login", loginObj);
      console.log(response.data.data);
      this.setState({ user: response.data.data }, () => {
        history.push("/landing");
      });
    } catch (err) {
      alert(err.response.data.data.msg);
    }
  };

  register = async (registrationObj, history) => {
    try {
      const response = await axios.post("/registration", registrationObj);

      //reponse.data.data => { email: email, id:id }
      const customer = response.data.data;
      console.log(response.data.data);

      // TODO: create user session in cookies
      // createSession(customer);

      // TODO: user is authorized if no error is caught, re-route to login
      this.setState({ user: response.data.data }, () => {
        history.push("/landing");
      });
    } catch (err) {
      alert(err.response.data.data.msg);
    }
  };

  render() {
    return (
      <div className="app pa2">
        <NavBar />
        <Route exact path="/" component={HomePage} />
        <Route
          path="/landing"
          render={() =>
            this.state.user.id ? (
              <LandingPage user={this.state.user} />
            ) : (
              <Redirect to="/" />
            )
          }
        />
        <Route path="/login" component={() => <Login login={this.login} />} />
        <Route
          path="/registration"
          component={() => <Registration register={this.register} />}
        />
      </div>
    );
  }
}

export default App;

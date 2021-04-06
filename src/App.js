import "./App.css";
import { Redirect, Route, Switch } from "react-router-dom";
import Login from "./Common/Login/Login";
import Registration from "./Common/Registration/Registration";
import LandingPage from "./Demand/LandingPage/LandingPage";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Common/HomePage/HomePage";
import { Component } from "react";
import axios from "axios";
import { Cookies, withCookies } from "react-cookie";
import {
  OpenRoute,
  ProtectedDemandRoute,
  ProtectedSupplyRoute,
} from "./util/routes";
import LandingPageP2V from "./Demand/Pet2Vet/LandingPageP2V.js/LandingPageP2V";
import OrderForm from "./Demand/OrderForm/OrderForm";
import { instanceOf } from "prop-types";
import { receiveUser } from "./actions/session";
import { connect } from "react-redux";
import Loader from "./Components/Loader/Loader";
import { func } from "prop-types";
import { bool } from "prop-types";
import OrderPage from "./Demand/OrderPage/OrderPage";

const mapStateToProps = ({ other: { loading } }) => ({
  loading,
});

class App extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
    receiveUser: func.isRequired,
    loading: bool.isRequired,
  };
  componentDidMount() {
    const { cookies, receiveUser } = this.props;
    const user = cookies.get("user");
    if (user) {
      receiveUser(cookies.get("user"));
    }
  }

  render() {
    return (
      <>
        {this.props.loading && <Loader />}
        <Route path="/" component={() => <NavBar />} />
        <Switch>
          <OpenRoute exact path="/" component={HomePage} />
          <OpenRoute path="/login" component={() => <Login />} />
          <OpenRoute path="/registration" component={() => <Registration />} />
          {/* TODO: add redux to LandingPage */}
          <ProtectedDemandRoute
            path="/landing"
            component={() => <LandingPage />}
          />
          <ProtectedDemandRoute
            path="/:service_type/order/form"
            component={() => <OrderForm />}
          />
          <ProtectedDemandRoute
            path="/:service_type/order/:order_id?"
            component={OrderPage}
          />
          <ProtectedDemandRoute
            exact
            path="/pet2vet"
            component={() => <LandingPageP2V />}
          />
        </Switch>
      </>
    );
  }
}

export default withCookies(connect(mapStateToProps, { receiveUser })(App));

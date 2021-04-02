// import React from "react";
import axios from "axios";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { register } from "../../actions/session";
import { connect } from "react-redux";

const Registration = ({ register }) => {
  const history = useHistory();
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const confPassword = e.target[4].value;

    const registrationObj = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };
    if (registrationObj.password === confPassword) {
      register(registrationObj, history);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="registration">
      <p className="tc primarySize mt5">Registration</p>
      <div className="tc">
        <form onSubmit={onSubmitHandler}>
          <Input type="text" id="firstName" placeholder="First Name" />
          <Input type="text" id="lastName" placeholder="Last Name" />
          <br />
          <Input type="text" id="email" placeholder="Email" />
          <br />
          <Input type="password" id="password" placeholder="Password" />
          <br />
          <Input
            type="password"
            id="confPassword"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <Button type="submit" id="registerBtn" btnName="Register!" />
          <p className="opaqueFont">
            Already have an account?{" "}
            <Link to="/wego/login" className="link blue pointer dim">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default connect(null, { register })(Registration);

// import React from "react";
import axios from "axios";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const register = async (registrationObj) => {
  try {
    const response = await axios.post("/registration", registrationObj);

    //reponse.data.data => { email: email, id:id }
    const customer = response.data.data;
    console.log(response.data.data);

    // TODO: create user session in cookies
    // createSession(customer);

    // TODO: user is authorized if no error is caught, re-route to login
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};

const Registration = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const confPasswd = e.target[4].value;

    const registrationObj = {
      fName: e.target[0].value,
      lName: e.target[1].value,
      email: e.target[2].value,
      passwd: e.target[3].value,
    };
    if (registrationObj.passwd === confPasswd) {
      register(registrationObj);
    } else {
      alert("Passwords do not match!");
    }
  };

  return (
    <div className="registration">
      <h1 className="tc f2 light-green br-pill bg-black-80 pa1 mh6 ">
        Registration
      </h1>
      <br />
      <br />
      <br />
      <div className="tc">
        <form onSubmit={onSubmitHandler}>
          <Input type="text" id="fName" placeholder="First Name" />
          <Input type="text" id="lName" placeholder="Last Name" />
          <br />
          <Input type="text" id="email" placeholder="Email" />
          <br />
          <Input type="password" id="passwd" placeholder="Password" />
          <br />
          <Input
            type="password"
            id="confPasswd"
            placeholder="Confirm Password"
          />
          <br />
          <br />
          <Button type="submit" id="registerBtn" btnName="Register!" />
        </form>
      </div>
    </div>
  );
};

export default Registration;

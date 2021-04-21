import React from "react";
import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";
import "./HomePage.css";

export default function HomePage() {
  const history = useHistory();
  const onClickHandler = (route) => {
    history.push(route);
  };
  return (
    <div>
      <p className="center mt5 header w-550px satisfy">
        Autonomous Vehicle Transportation Services
      </p>
      <div className="flex justify-center tc">
        <div className="w-400px ph4 br bw1 b--black-20">
          <p className="primarySize" className="primarySize">
            Sign Up
          </p>
          <p className="secondarySize opaqueFont">
            if you are new to our system, sign up to start an order
          </p>
          <Button
            btnName="Sign Up"
            onClick={() => onClickHandler("/registration")}
            classNames="mt5"
          />
        </div>
        <div className="ph4 w-400px">
          <p className="primarySize">Returning user login</p>
          <p className="secondarySize opaqueFont">
            Enter your previously created username and password to view previous
            orders and create new ones! If you have not already set up an
            account, please select “Sign up”.
          </p>
          <Button btnName="Log In" onClick={() => onClickHandler("/login")} />
        </div>
      </div>
    </div>
  );
}

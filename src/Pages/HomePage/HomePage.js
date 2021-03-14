import React from "react";
import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";

export default function HomePage() {
  const history = useHistory();
  const onClickHandler = (route) => {
    history.push(route);
  };
  return (
    <div>
      <p className="tc mt5 primarySize">
        Welcome to <span className="satisfy">WeGo</span>
      </p>
      <div className="flex justify-center tc">
        <div className="w-40 ph4 br bw1 b--black-20" style={{ width: "368px" }}>
          <p className="primarySize" className="primarySize">
            Sign Up
          </p>
          <p className="secondarySize opaqueFont">
            if you are new to our system, sign up to start an order
          </p>
          <Button
            btnName="Sign Up"
            onClick={() => onClickHandler("/registration")}
            style={{ marginTop: "91px" }}
          />
        </div>
        <div className="ph4" style={{ width: "368px" }}>
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

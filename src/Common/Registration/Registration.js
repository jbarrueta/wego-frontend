import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { register } from "../../actions/session";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import Cookies from "universal-cookie";
import { withCookies } from "react-cookie";
import {
  isMatchingPasswords,
  isValidEmail,
  isValidPassword,
} from "../../util/validation";
import { useState } from "react";

const Registration = ({ register, cookies }) => {
  const [state, setstate] = useState({
    validEmail: true,
    validPassword: true,
    matchingPasswords: true,
    emailClass: "b--black",
    passwordClass: "b--black",
    matchingClass: "b--black",
  });
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const confPassword = e.target[4].value;

    const registrationObj = {
      firstName: e.target[0].value,
      lastName: e.target[1].value,
      email: e.target[2].value,
      password: e.target[3].value,
    };

    const validEmail = isValidEmail(registrationObj.email),
      validPassword = isValidPassword(registrationObj.password),
      matchingPassword = isMatchingPasswords(
        registrationObj.password,
        confPassword
      );

    setstate({
      validEmail: validEmail,
      validPassword: validPassword,
      matchingPasswords: matchingPassword,
      emailClass: validEmail ? "b--black" : "invalid",
      passwordClass: validEmail && matchingPassword ? "b--black" : "invalid",
      matchingClass: matchingPassword ? "b--black" : "invalid",
    });
    const allIsValid =
      state.validEmail && state.validPassword && state.matchingPasswords;
    if (allIsValid) {
      register(registrationObj, cookies);
    }
  };

  const onChangeHandler = (inputName) => {
    if (inputName === "email") {
      setstate({ validEmail: true, emailClass: "b--black" });
    } else {
      setstate({
        validPassword: true,
        matchingPasswords: true,
        passwordClass: "b--black",
        matchingClass: "b--black",
      });
    }
  };

  return (
    <div className="registration">
      <p className="tc primarySize mt5">Registration</p>
      <div className="tc">
        <form onSubmit={onSubmitHandler}>
          <Input type="text" id="firstName" placeholder="First Name" required />
          <Input type="text" id="lastName" placeholder="Last Name" required />
          <br />
          <Input
            type="text"
            id="email"
            placeholder="Email"
            required
            className={state.emailClass}
            onChange={() => onChangeHandler("email")}
          />
          <br />
          <Input
            type="password"
            id="password"
            placeholder="Password"
            required
            className={state.passwordClass}
            onChange={() => onChangeHandler("password")}
          />
          <br />
          <Input
            type="password"
            id="confPassword"
            placeholder="Confirm Password"
            required
            className={state.matchingClass}
            onChange={() => onChangeHandler("matchingPassword")}
          />
          <br />
          <br />
          <Button type="submit" id="registerBtn" btnName="Register!" />
          <p className="opaqueFont">
            Already have an account?{" "}
            <Link to="/login" className="link blue pointer dim">
              Login here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Registration.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  register: PropTypes.func.isRequired,
};

export default withCookies(connect(null, { register })(Registration));

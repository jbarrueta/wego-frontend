import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../actions/common/session";
import { Cookies, withCookies } from "react-cookie";
import PropTypes from "prop-types";

const Login = ({ login, cookies }) => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    login(loginObj, cookies);
  };

  return (
    <div className="login">
      <p className="tc primarySize pa1 mt5 ">Login</p>
      <div className="tc">
        <form onSubmit={onSubmitHandler}>
          <Input type="text" id="email" placeholder="Email" />
          <br />
          <Input type="password" id="password" placeholder="Password" />
          <br />
          <br />
          <br />
          <Button type="submit" id="loginBtn" btnName="Login" />
          <p className="opaqueFont">
            Don't have an account?{" "}
            <Link to="/registration" className="link blue pointer dim">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

Login.propTypes = {
  cookies: PropTypes.instanceOf(Cookies).isRequired,
  login: PropTypes.func.isRequired,
};

export default withCookies(connect(null, { login })(Login));

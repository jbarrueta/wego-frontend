import axios from "axios";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";

const Login = ({ login }) => {
  const history = useHistory();
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: e.target[0].value,
      password: e.target[1].value,
    };

    login(loginObj, history);
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
            <Link to="/wego/registration" className="link blue pointer dim">
              Register here
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;

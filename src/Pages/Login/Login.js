import axios from "axios";
import Input from "../../Components/Input/Input";
import Button from "../../Components/Button/Button";

const login = async (loginObj) => {
  try {
    const response = await axios.post("/login", loginObj);
    console.log(response.data.data);
  } catch (err) {
    alert(err.response.data.data.msg);
  }
};

const Login = () => {
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    const loginObj = {
      email: e.target[0].value,
      passwd: e.target[1].value,
    };

    login(loginObj);
  };

  return (
    <div className="login">
      <h1 className="tc f2 light-green br-pill bg-black-80 pa1 mh6 ">Login</h1>
      <br />
      <br />
      <br />
      <div className="tc">
        <form onSubmit={onSubmitHandler}>
          <Input type="text" id="email" placeholder="Email" />
          <br />
          <Input type="password" id="passwd" placeholder="Password" />
          <br />
          <br />
          <Button type="submit" id="loginBtn" btnName="Login!" />
        </form>
      </div>
    </div>
  );
};

export default Login;

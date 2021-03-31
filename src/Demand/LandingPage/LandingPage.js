import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";

const LandingPage = ({ user, logout }) => {
  const history = useHistory();

  const onClickHandler = (route) => {
    history.push(route);
  };

  return (
    <div className="landingPage">
      <p className="tc primarySize">{`Welcome back ${user.firstName}`}</p>
      <br />
      <br />
      <br />
      <div className="tc">
        <Button
          btnName="Pet2Vet"
          onClick={() => onClickHandler("/pet2vet")}
          classNames="db center ma3"
        />
        <Button btnName="Medicine" classNames="db center ma3" />
        <Button btnName="Grocery" classNames="db center ma3" />
        <Button btnName="Boat" classNames="db center ma3" />
        <Button btnName="Logout" onClick={logout} classNames="db center ma3" />
      </div>
    </div>
  );
};

export default LandingPage;

import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";

const LandingPage = ({ user }) => {
  console.log(user);
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
        <form onSubmit={onclick}>
          <br />
          <Button
            type="onClick"
            id="plugInBtn"
            btnName="Pet2Vet"
            onClick={() => onClickHandler("/Pet2Vet")}
          />
          <br />
          <br />
          <Button type="onClick" id="plugInBtn" btnName="Medicine" />
          <br />
          <br />
          <Button type="onClick" id="plugInBtn" btnName="Grocery" />
          <br />
          <br />
          <Button type="onClick" id="plugInBtn" btnName="Boat" />
        </form>
      </div>
    </div>
  );
};

export default LandingPage;

import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";

const LandingPage = () => {
  const history = useHistory();

  const onClickHandler = (route) => {
    history.push(route);
  };

  return (
    <div className="landingPage">
      <h1 className="tc f2 light-green br-pill bg-black-80 pa1 mh6 ">Hello</h1>
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

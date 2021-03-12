import axios from "axios";
import Button from "../../Components/Button/Button";

const landingPage = async (landingPageObj) => 
{
   
};

const landingPage = () => {
    const onClick = async (e) => {
      e.preventDefault();
  
      const landingPageObj = {
      };
  
      landingPage(landingPageObj);
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
            <Button type="onClick" id="plugInBtn" btnName="Pet2Vet" />
            <br />
            <Button type="onClick" id="plugInBtn" btnName="Medicine" />
            <br />
            <Button type="onClick" id="plugInBtn" btnName="Grocery" />
            <br />
            <Button type="onClick" id="plugInBtn" btnName="Boat" />
          </form>
        </div>
      </div>
    );
  };
  
  export default landingPage;
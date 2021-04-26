import { connect } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";
import { logout } from "../../actions/common/session";
import { Cookies, withCookies } from "react-cookie";
import PropTypes from "prop-types";
import ServiceCard from "../../Components/ServiceCard/ServiceCard";
import pet2vetGIF from "./pet2vet.gif";
import pet2vetImage from "./pet2vet.png";
import medicineGIF from "./medicine.gif";
import medicineImage from "./medicine.png";
import groceriesGIF from "./groceries.gif";
import groceriesImage from "./groceries.png";
import boatGIF from "./boat.gif";
import boatImage from "./boat.png";

const mapStateToProps = ({ session: { user } }) => ({
  user,
});

const LandingPage = ({ user, logout, cookies }) => {
  const history = useHistory();

  const onClickHandler = (route) => {
    history.push(route);
  };
  return (
    <div className="landingPage">
      <p className="tc primarySize">{`Welcome back ${user.firstName}`}</p>

      <div className="center flex-wrap ">
        <ServiceCard
          gif={pet2vetGIF}
          image={pet2vetImage}
          title="Pet2Vet"
          description="In a rush? Get your pet delivered to your desired veterinarian. Just put your pet in the vehicle and We-Go will take care of the rest!"
          onClickHandler={() => onClickHandler("/pet2vet")}
          className="ma2"
        />
        <ServiceCard
          gif={medicineGIF}
          image={medicineImage}
          title="Pharma"
          description="Need a medication from your local pharmacy but too ill to go get it? Request an autonomous delivery straight to your home."
          onClickHandler={() => onClickHandler("/pharma/order/form")}
          className="ma2"
        />
        <ServiceCard
          gif={groceriesGIF}
          image={groceriesImage}
          title="Groceries"
          description="In need of a fast restock of groceries? Quick autonomous delivery is exactly what you need."
          onClickHandler={() => onClickHandler("/groceries/order/form")}
          className="ma2"
        />
        <ServiceCard
          gif={boatGIF}
          image={boatImage}
          title="Boat"
          description="Does your boat need servicing but you have no way to tow it? Strap your boat onto our autonomous truck and away we go."
          onClickHandler={() => onClickHandler("/boat/order/form")}
          className="ma2"
        />
      </div>
    </div>
  );
};

LandingPage.propTypes = {
  user: PropTypes.object,
  logout: PropTypes.func,
  cookies: PropTypes.instanceOf(Cookies),
};

export default withCookies(connect(mapStateToProps, { logout })(LandingPage));

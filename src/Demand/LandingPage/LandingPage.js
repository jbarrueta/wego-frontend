import { connect } from "react-redux";
import { useHistory } from "react-router";
import Button from "../../Components/Button/Button";
import { logout } from "../../actions/common/session";
import { Cookies, withCookies } from "react-cookie";
import PropTypes from "prop-types";

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
        <Button
          btnName="Logout"
          onClick={() => logout(cookies)}
          classNames="db center ma3"
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

import { useCookies } from "react-cookie";

export const cookiesOptions = {
  path: "/",
  maxAge: 18000,
  //   domain: ".team12.sweispring21.tk",
  secure: false,
  httpOnly: false,
};

const setTimer = (user) => {
  setTimeout(
    () =>
      window.confirm(
        "Session will end in approx. 1 min would you like to refresh?"
      )
        ? createSession(user)
        : destroySession() && window.location.reload,
    29 * 60000
  );
};
export const createSession = (user) => {
  const [cookies, setCookie] = useCookies();
  setCookie("user", user, cookiesOptions);
  setTimer(user);
};

export const destroySession = () => {
  const [cookies, setCookie, removeCookie];
  removeCookie("user", cookiesOptions);
};

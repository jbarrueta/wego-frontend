import config from "../config/config";

const subdomain = config.hostedOnServer
  ? window.location.hostname.split(".")[0]
  : config.workingBranch;

export const cookiesOptions = {
  path: "/",
  maxAge: 1800,
  domain: `${subdomain}.team12.sweispring21.tk`,
  secure: true,
  httpOnly: false,
};

const setTimer = (user, cookies) => {
  setTimeout(
    () =>
      window.confirm(
        "Session will end in approx. 1 min would you like to refresh?"
      )
        ? cookies.get("user") && createSession(user, cookies)
        : destroySession(cookies) && window.location.reload,
    29 * 60000
  );
};
export const createSession = (user, cookies) => {
  cookies.set("user", user, cookiesOptions);
  setTimer(user, cookies);
};

export const destroySession = (cookies) => {
  cookies.remove("user", cookiesOptions);
};

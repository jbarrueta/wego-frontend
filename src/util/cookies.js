export const cookiesOptions = {
  path: "/",
  maxAge: 1800,
  //   domain: ".team12.sweispring21.tk",
  secure: false,
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

export const cookiesOptions = {
  path: "/",
  maxAge: 18000,
  //   domain: ".team12.sweispring21.tk",
  secure: false,
  httpOnly: false,
};

const setTimer = (cookies, user) => {
  setTimeout(
    () =>
      window.confirm(
        "Session will end in approx. 1 min would you like to refresh?"
      )
        ? createSession(cookies, user)
        : destroySession(cookies) && window.location.reload,
    29 * 60000
  );
};
export const createSession = (cookies, user) => {
  cookies.set("user", user, cookiesOptions);
  setTimer(cookies, user);
};

export const destroySession = (cookies) => {
  cookies.remove("user", cookiesOptions);
};

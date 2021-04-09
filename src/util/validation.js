export const isValidEmail = (email) => {
  if (
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    return true;
  }
  alert("You have entered an invalid email address!");
  return false;
};

export const isValidPassword = (password) => {
  if (/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(password)) {
    return true;
  }
  alert(
    "You have entered an invalid password!\n\nPasswords must be 6 to 20 characters which contain at least one numeric digit, one uppercase and one lowercase letter"
  );
  return false;
};

export const isMatchingPasswords = (password, confPassword) => {
  if (password === confPassword) {
    return true;
  }
  alert("Passwords do not match!");
  return false;
};

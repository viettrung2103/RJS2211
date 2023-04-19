const isEmail = (email) => {
  const emailRegEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (email.match(emailRegEx)) return true; // valid email
  else return false;
};

const isEmpty = (string) => {
  // in case user enter whitespace>> use strim
  if (string.trim() === "") return true;
  else return false;
};

const validateSignupData = (data) => {
  let errors = {};
  //validate email
  if (isEmpty(data.email)) {
    errors.email = "Must not be empty";
  } else if (!isEmail(data.email)) {
    errors.email = "Must be a valid email address";
  }

  if (isEmpty(data.password)) errors.password = "Must not be empty";
  if (isEmpty(data.confirmPassword))
    errors.confirmPassword = "Must not be empty";
  if (data.password !== data.confirmPassword)
    errors.confirmPassword = "Passwords must match";
  if (isEmpty(data.handle)) errors.handle = "Must not be empty";

  //if there is key inside error Object, proceed to error and stop program,
  // if key object is empty, continue the program
  // if (Object.keys(errors).length > 0) return res.status(400).json(errors);
  return {
    errors,
    valid: Object.keys(errors).length === 0 ? true : false,
  };
};

const validateLoginData = (data) => {
  let errors = {};
  if (isEmpty(data.email)) errors.email = "Must not be empty";
  if (isEmpty(data.password)) errors.password = "Must not be empty";
  // if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  return {
    errors,
    valid: Object.keys(errors).length > 0 ? true : false,
  };
};

module.exports = { validateLoginData, validateSignupData };

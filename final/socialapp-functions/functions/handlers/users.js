const { db } = require("../util/admin");
const {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} = require("firebase/auth");

const fireBaseConfig = require("../util/config");
const firebase = require("firebase/compat/app");

const firebaseApp = firebase.initializeApp(fireBaseConfig);
const auth = getAuth(firebaseApp);

const { validateSignupData, validateLoginData } = require("../util/validators");


exports.signup = (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    handle: req.body.handle,
  };

  const { valid, errors } = validateSignupData(newUser);
  if (!valid) return res.status(400).json(errors);

  //TODO: validate data
  // let errors = {};
  // //validate email
  // if (isEmpty(newUser.email)) {
  //   errors.email = "Must not be empty";
  // } else if (!isEmail(newUser.email)) {
  //   errors.email = "Must be a valid email address";
  // }

  // if (isEmpty(newUser.password)) errors.password = "Must not be empty";
  // if (isEmpty(newUser.confirmPassword))
  //   errors.confirmPassword = "Must not be empty";
  // if (newUser.password !== newUser.confirmPassword)
  //   errors.confirmPassword = "Passwords must match";
  // if (isEmpty(newUser.handle)) errors.handle = "Must not be empty";

  // //if there is key inside error Object, proceed to error and stop program,
  // // if key object is empty, continue the program
  // if (Object.keys(errors).length > 0) return res.status(400).json(errors);
  // to initialize token
  let token, userId;
  db.doc(`/users/${newUser.handle}`)
    .get()
    .then((doc) => {
      if (doc.exists) {
        return res.status(400).json({ handle: "this handle is already taken" });
      } else {
        return createUserWithEmailAndPassword(
          auth,
          newUser.email,
          newUser.password
        );
      }
    })
    .then((data) => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    .then((idToken) => {
      token = idToken;
      const userCredentials = {
        userHandle: newUser.handle,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        userId,
      };
      // to persist data into database
      return db.doc(`/users/${newUser.handle}`).set(userCredentials);
      // return res.status(201).json({ token });
    })
    .then(() => {
      return res.status(201).json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "email is already in use." });
      } else {
        return res.status(500).json({ error: err.code, message: err.message });
      }
    });
};

exports.login = (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  signInWithEmailAndPassword(auth, user.email, user.password)
    .then((data) => {
      return data.user.getIdToken();
    })
    .then((token) => {
      return res.json({ token });
    })
    .catch((err) => {
      console.error(err);
      if (err.code === "auth/wrong-password") {
        return res
          .status(403)
          .json({ general: "Wrong credentials, please try again" });
      } else
        return res.status(500).json({ error: err.code, message: err.message });
    });
};

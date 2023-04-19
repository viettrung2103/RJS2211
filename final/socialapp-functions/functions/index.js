const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("express")();
const firebase = require("firebase/compat/app");
const {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} = require("firebase/auth");
const { firebaseConfig } = require("./util/config");

const { validateLoginData, validateSignupData } = require("./util/validators");
// const { FBauth } = require("./util/FBauth");
// const { login } = require("./handlers/users");
// const {} = require("firebase-admin/auth");

admin.initializeApp();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBfM8aNUuY-JSLCPQFAhdmYy99nMGSSW3A",
//   authDomain: "socialapp-final.firebaseapp.com",
//   projectId: "socialapp-final",
//   storageBucket: "socialapp-final.appspot.com",
//   messagingSenderId: "46702018903",
//   appId: "1:46702018903:web:b8b724c4f49c3b15c5fe12"
// };

// // Initialize Firebase
// const firebase = initializeApp(firebaseConfig);

// const express = require("express");

// const express = require("express");
// const app = express();
// firebase/app not firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = admin.firestore();

// const db = firebaseApp.firestore;
// const storage = firebase.storage;

// const { createUserWithEmailAndPassword } = require("firebase/auth");
// import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
// import

// const auth = firebaseApp.auth();
// const firebase = require("firebase");
// firebaseApp.initializeApp(firebaseConfig);

//get method
app.get("/screams", (req, res) => {
  db.collection("screams")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          handle: doc.data().handle,
          createdAt: doc.data().createdAt,
          commentCount: doc.data().commentCount,
          likeCount: doc.data().likeCount,
        });
      });
      return res.json(screams);
    })
    .catch((err) => console.log(err));
});
//FB auth
const FBAuth = (req, res, next) => {
  let idToken;
  //if the authorization exist and it start with "Beaer " and token then it is authorized
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer ")
  ) {
    idToken = req.headers.authorization.split("Bearer ")[1];
  } else {
    console.error("No token found");
    return res.status(403).json({ error: "Unauthorized" });
  }
  admin
    .auth()
    .verifyIdToken(idToken) // to verify whether this token is from our own Firebase app or not, , it will return a user body, by query our db, db will return the requested user
    .then((decodedToken) => {
      req.user = decodedToken;
      console.log(decodedToken);
      // console.log("req uid", req.user.uid);
      const data = db
        .collection("users")
        .where("userId", "==", req.user.uid) // to get the handle
        .limit(1)
        .get();
      return data;
    })
    // after getting the data, use .then to process the data
    .then((data) => {
      // console.log(data.docs[0].data().handle);
      // data is a string with only 1 item

      req.user.handle = data.docs[0].data().handle;
      // console.log(data.doc[0]); // data() to extract data from docs
      return next();
    })
    .catch((err) => {
      console.error("Error while verifying token", err); // token is expired, blacklisted or from other providers
      return res.status(403).json(err);
    });
};

//post method
app.post("/scream", FBAuth, (req, res) => {
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Body must not be empty" });
  }

  const newScream = {
    body: req.body.body,
    handle: req.body.handle,
    createdAt: new Date().toISOString(),
  };
  db.collection("screams")
    .add(newScream)
    .then((doc) => {
      res.json({
        message: `document ${doc.id} created successfully`,
      });
    })
    .catch((err) => {
      res.status(500).json({ error: "something went wrong" });
      console.log(err);
    });
});

// https://europe-west1-socialapp-final.cloudfunctions.net/api/

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

// Signup route
app.post("/signup", (req, res) => {
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
});

app.post("/login", (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password,
  };

  let errors = {};
  if (isEmpty(user.email)) errors.email = "Must not be empty";
  if (isEmpty(user.password)) errors.password = "Must not be empty";
  if (Object.keys(errors).length > 0) return res.status(400).json(errors);

  // const { valid, errors } = validateLoginData(user);
  // if (!valid) return res.status(400).json(errors);

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
});

exports.api = functions.region("europe-west1").https.onRequest(app);

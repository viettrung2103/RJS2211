const functions = require("firebase-functions");
const admin = require("firebase-admin");
const app = require("express")();
const firebase = require("firebase/compat/app");
const { getAuth, createUserWithEmailAndPassword } = require("firebase/auth");
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

const firebaseConfig = {
  apiKey: "AIzaSyBfM8aNUuY-JSLCPQFAhdmYy99nMGSSW3A",

  authDomain: "socialapp-final.firebaseapp.com",

  projectId: "socialapp-final",

  storageBucket: "socialapp-final.appspot.com",

  messagingSenderId: "46702018903",

  appId: "1:46702018903:web:b8b724c4f49c3b15c5fe12",
};

// const express = require("express");
// const app = express();
// firebase/app not firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

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
  admin
    .firestore()
    .collection("screams")
    .orderBy("createdAt", "desc")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push({
          screamId: doc.id,
          body: doc.data().body,
          userHandle: doc.data().userHandle,
          createdAt: doc.data().createdAt,
        });
      });
      return res.json(screams);
    })
    .catch((err) => console.log(err));
});

//post method
app.post("/scream", (req, res) => {
  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: new Date().toISOString(),
  };
  admin
    .firestore()
    .collection("screams")
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

// Signup route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    userHandle: req.body.userHandle,
  };
  //TODO: validate data
  createUserWithEmailAndPassword(auth, newUser.email, newUser.password)
    .then((data) => {
      return res
        .status(201)
        .json({ message: `user ${data.user.uid} signed up successfully` });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: err.code, message: err.message });
    });

  // .then((data) => {
  //   //register success
  //   return res
  //     .status(201)
  //     .json({
  //       message: `user ${data.user.uid} sign up successfully}`,
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       return res
  //         .status(500)
  //         .json({ error: err.code, message: err.message });
  //     });
  // });
});

exports.api = functions.region("europe-west1").https.onRequest(app);

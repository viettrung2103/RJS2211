const functions = require("firebase-functions");
const admin = require("firebase-admin");

admin.initializeApp();
// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started
//
exports.helloWorld = functions.https.onRequest((request, response) => {
  functions.logger.info("Hello logs!", { structuredData: true });
  response.send("Hello world!");
});

exports.getScreams = functions.https.onRequest((req, res) => {
  admin
    .firestore()
    .collection("screams")
    .get()
    .then((data) => {
      let screams = [];
      data.forEach((doc) => {
        screams.push(doc.data());
      });
      return res.json(screams);
    })
    .catch((err) => console.log(err));
});

exports.createScream = functions.https.onRequest((req, res) => {
  const date = new Date();

  const newScream = {
    body: req.body.body,
    userHandle: req.body.userHandle,
    createdAt: date
  };
  admin.firestore()
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

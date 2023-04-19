const { admin } = require("./admin");

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

module.exports = { FBAuth };

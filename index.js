const express = require("express");
const cors = require("cors");
const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20");
require("dotenv").config();
const port = process.env.PORT || 5000;

const app = express();

// middleware
const corsOptions = {
  origin: ["http://localhost:5173"],
  Credential: true,
};
app.use(cors(corsOptions));
app.use(express.json());
// *passport related appis

passport.use(
  new GoogleStrategy(
    {
      // options for google strategy
      callbackURL: "/auth/google/redirect",
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    },
    () => {
      // passport callback function
    }
  )
);

// auth logout

app.get("/auth/logout", async (req, res) => {
  // handle with passport
  res.send("logging out");
});

// auth with google
app.get(
  "/auth/google",
  passport.authenticate("google", {
    scope: ["profile"],  //this will show google screen
  })
);

// callback route for google to redirect to
// app.get('/auth/google/redirect',async(req,res)=>{

// })

app.get("/", (req, res) => {
  res.send("oAuth 2.0 with passport server is running");
});

app.listen(port, () => {
  console.log(`oAuth server is running on port ${port}`);
});

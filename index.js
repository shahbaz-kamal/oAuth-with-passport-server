const express = require("express");
const cors = require("cors");
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



app.get("/", (req, res) => {
  res.send("oAuth 2.0 with passport server is running");
});

app.listen(port, () => {
  console.log(`oAuth server is running on port ${port}`);
});

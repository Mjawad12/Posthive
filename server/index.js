const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");
require("dotenv").config({ path: path.resolve(__dirname, "./.env") });
app.use(
  cors({ origin: "https://posthive-odiswlmm.b4a.run", credentials: true })
);
app.use(express.json());

app.use("/users", require("./Routes/Users"));
app.use("/posts", require("./Routes/Posts"));
app.get("/check-auth", (req, res) => {
  const token = req.headers.cookie ? req.headers.cookie.split("=")[1] : false;

  if (!token) {
    console.log(token);
    return res.status(401).json({ authenticated: false });
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    console.log(decoded);
    return res
      .status(200)
      .json({ authenticated: true, userId: decoded.userId });
  } catch (error) {
    return res.status(200).json({ authenticated: false });
  }
});

const Connection = async () => {
  try {
    mongoose.connect(process.env.CONNECTIONSTRING, {
      connectTimeoutMS: 50000,
    });
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

app.get("/", (req, res) => {
  res.send("app launched");
});

Connection()
  .then(() => {
    app.listen(process.env.port || 5000, (req, res) => {
      console.log("app launched on port 5000");
      console.log("Connected to mongoDB");
    });
  })
  .catch((error) => {
    console.log(error.message);
  });

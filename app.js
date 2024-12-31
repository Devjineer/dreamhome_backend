require("dotenv").config();
const express = require("express");

const app = express();

// middleware
app.use(express.json())

const sendMail = require("./controllers/mail_controller");

app.get("/", (req, res) => {
  return res.json("REDEMPTION TIME");
});

app.get("/send-mail", sendMail);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () => console.log(`app is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

require("dotenv").config();
const express = require("express");

const app = express();

// routes
const mailRoutes = require("./routes/mailing");

// middleware
app.use(express.json());

app.get("/", (_, res) => {
  return res.json("REDEMPTION TIME");
});

app.use("/", mailRoutes);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () => console.log(`app is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

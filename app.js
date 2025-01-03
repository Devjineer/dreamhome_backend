require("dotenv").config();
const express = require("express");
require("express-async-errors");

const app = express();

// routes
const mailRoutes = require("./routes/mailing");
const notfoundMiddleware = require("./middlewares/not-found");
const errorHandlerMiddleware = require("./middlewares/error-handler");

// middleware
app.use(express.json());

app.use("/api/v1/send-mail", mailRoutes);

app.use(notfoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = () => {
  try {
    app.listen(port, () => console.log(`app is listening on port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

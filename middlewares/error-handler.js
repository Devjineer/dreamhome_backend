const { StatusCodes } = require("http-status-codes");

const errorHandlerMiddleware = (err, req, res, next) => {
  const error = {
    msg: err.message || "Something went wrong",
    status: err.status || StatusCodes.INTERNAL_SERVER_ERROR,
  };

  return res.json({ msg: error.msg }).status(error.status);
};

module.exports = errorHandlerMiddleware;

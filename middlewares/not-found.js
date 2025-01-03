const { StatusCodes } = require("http-status-codes");

const notfoundMiddleware = (req, res) => {
  return res
    .status(StatusCodes.NOT_FOUND)
    .json({ msg: "This Route is non existent" });
};

module.exports = notfoundMiddleware;

require("dotenv").config();
const nodemailer = require("nodemailer");
const mailConfig = require("../setup/mail_config");
const craftHTMLDoc = require("../utils/craftHTMLDoc");
const { BAD_REQUEST_ERROR } = require("../errorhandler");
const { StatusCodes } = require("http-status-codes");

// transporter global
const transporter = nodemailer.createTransport(mailConfig);

const sendMail = async (req, res) => {
  const { id } = req.params;
  const isBotMail = id === "bot" ? true : false;

  const reqBodyProps = Object.keys(req.body);

  const areAllInputsFilled = reqBodyProps.find((prop) => {
    const regex = /^$/;
    return regex.test(req.body[prop]);
  });

  if (areAllInputsFilled) {
    throw new BAD_REQUEST_ERROR(`Please fill the ${areAllInputsFilled} field`);
  }

  const html = craftHTMLDoc({ ...req.body, isBotMail });

  await transporter.sendMail({
    from: "Joseyjayy2@gmail.com",
    to: "hi@imrvon.dev",
    subject: `${isBotMail ? "Bot" : "Contact"} Form Submission`,
    html,
  });

  return res.json({ msg: "message sent succesfully" }).status(StatusCodes.OK);
};

module.exports = sendMail;

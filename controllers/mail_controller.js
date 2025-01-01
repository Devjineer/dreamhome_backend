require("dotenv").config();
const nodemailer = require("nodemailer");
const mailConfig = require("../setup/mail_config");
const craftHTMLDoc = require('../utils/craftHTMLDoc');
const { BAD_REQUEST_ERROR } = require("../errorhandler");

// transporter global
const transporter = nodemailer.createTransport(mailConfig);

const sendContactMail = async (req, res) => {
  const { firstname, lastname, phone, email, subject, message } = req.body;
  // will work on errors
  if (!firstname || !lastname || !phone || !email || !subject || !message) {
    throw new BAD_REQUEST_ERROR('Please fill all fields')
  }

  const html = craftHTMLDoc({
    firstname,
    lastname,
    phone,
    email,
    subject,
    message,
  });

  await transporter.sendMail({
    from: "Joseyjayy2@gmail.com",
    to: "joseyjayy1@gmail.com",
    subject,
    html,
  });

  return res.json({ msg: "message sent succesfully" });
};

const sendBotMail = async (req, res) => {
  return res.json({ msg: "message sent successfully" });
};

module.exports = { sendContactMail, sendBotMail };

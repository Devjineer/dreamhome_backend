require("dotenv").config();
const nodemailer = require("nodemailer");
const mailConfig = require('../setup/mail_config')
console.log(mailConfig)

const sendMail = async (req, res) => {
  const transporter = nodemailer.createTransport(mailConfig);

  const result = await transporter.sendMail({
    from: "joseyjayy2@gmail.com",
    to: "joseyjayy1@gmail.com",
    subject: "Hello ✔",
    text: "Hello world?",
    html: "<b>Hello world?</b>",
  });

  // return res.json({ msg: result });
  return res.json({msg: result});
};

module.exports = sendMail;

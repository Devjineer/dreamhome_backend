require("dotenv").config();
const nodemailer = require("nodemailer");
const mailConfig = require("../setup/mail_config");

// transporter global
const transporter = nodemailer.createTransport(mailConfig);
/**
 * From: [firstname] [lastname] <[email]>
To: <your_email@example.com>
Subject: [subject]

Dear [Your Name or Business],

You have received a new message from your contact form:

Name: [firstname] [lastname]
Phone: [phone]
Email: [email]
Subject: [subject]
Message: 
[message]

Best regards,
[firstname] [lastname]

 */

const sendContactMail = async (req, res) => {
  const { firstname, lastname, phone, email, subject, message } = req.body;

  const html = craftHTMLDoc();
  
  await transporter.sendMail({
    from: "Joseyjayy2@gmail.com",
    to: "joseyjayy1@gmail.com",
    subject,
    html: "<b>Hello world?</b>",
  });

  return res.json({ msg: "message sent succesfully" });
};

const sendBotMail = async (req, res) => {
  return res.json({ msg: "message sent successfully" });
};

module.exports = { sendContactMail, sendBotMail };

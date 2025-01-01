const express = require("express");
const router = express.Router();

const {
  sendContactMail,
  sendBotMail,
} = require("../controllers/mail_controller");

// router.route('/').get().post()
router.post("/", sendContactMail);
router.post("/bot-mail", sendBotMail);

module.exports = router;

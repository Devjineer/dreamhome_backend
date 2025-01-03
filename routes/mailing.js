const express = require("express");
const router = express.Router();

const sendMail = require("../controllers/mail_controller");
const { route } = require("express/lib/router");

// router.route('/').get().post()
router.post("/", sendMail);
router.post("/:id", sendMail);

module.exports = router;

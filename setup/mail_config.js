module.exports = {
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: "Josemariaofurum@gmail.com",
    pass: process.env.SMTP_PASS,
  },
};
